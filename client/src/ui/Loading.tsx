import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black/80 absolute top-0 left-0 flex flex-col items-center justify-center">
      <RotatingLines
        visible={true}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      <p className="text-white text-2xl font-bold tracking-widest">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
