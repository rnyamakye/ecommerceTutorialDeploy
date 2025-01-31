import { Router } from "express";
import Stripe from "stripe";
const router = Router();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

router.post("/checkout", async (req, res) => {
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2024-12-18.acacia",
  });
  try {
    const { items, email } = await req.body;

    const extractingItems = await items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.discountedPrice * 100,
        product_data: {
          name: item.name,
          description: item.description,
          images: item.images,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url:
        "https://ecommerce-tutorial-38m7.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ecommerce-tutorial-38m7.vercel.app/cancel",
      metadata: {
        email,
      },
    });

    res.json({
      message: "Server is connected",
      success: true,
      id: session.id,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
export default router;
