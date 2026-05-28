import Frame1 from "./Frame1";
import Frame2 from "./Frame2";

function Frame3({ className = "absolute left-[757px] top-[189px]" }) {
  return (
    <div className={`flex h-[49px] w-[458px] gap-10 opacity-100 ${className}`}>
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default Frame3;
