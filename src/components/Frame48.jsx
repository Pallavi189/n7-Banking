import Frame3 from "./Frame3";
import Frame49 from "./Frame49";

function Frame48({ className = "top-[127px]" }) {
  return (
    <div
      className={`absolute left-[81px] h-[427px] w-[1279px] overflow-hidden rounded-[27px] bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] opacity-100 ${className}`}
    >
      <div className="absolute -left-[55px] -top-[94px] font-['Archivo'] text-[530px] font-medium leading-[0.74] tracking-[-0.08em] text-transparent opacity-45 [-webkit-text-stroke:1px_#003D61]">
        CB7
      </div>

      <Frame49 className="absolute left-[65px] top-[121px]" />

      <Frame3 />
    </div>
  );
}

export default Frame48;
