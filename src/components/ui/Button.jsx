import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-[#008dff] text-white shadow-[0_0_28px_rgba(0,141,255,0.28)] hover:bg-[#1aa4ff]",
  ghost:
    "border border-white/22 bg-transparent text-white hover:border-[#008dff] hover:bg-[#008dff]/10",
  dark: "border border-[#001116] bg-[#001116] text-white hover:bg-[#07212a]",
  lightGhost:
    "border border-[#001116]/20 bg-transparent text-[#001116] hover:border-[#008dff] hover:text-[#008dff]",
};

const presets = {
  demo:
    "h-[49px] w-[210px] gap-2 whitespace-nowrap rounded-[10px] border-0 bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-[51px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal leading-[130%] tracking-normal text-white opacity-100 [&>span]:h-[19px] [&>span]:w-[108px] [&>span]:whitespace-nowrap",
  outlineRequest:
    "h-[49px] w-[226px] gap-2 whitespace-nowrap rounded-[10px] border border-[#E9F4F9] bg-transparent px-[59px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 [&>span]:h-[19px] [&>span]:w-[108px] [&>span]:whitespace-nowrap",
  contact:
    "h-[49px] w-[208px] gap-2 whitespace-nowrap rounded-[10px] border border-[#E9F4F9] px-[59px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 [&>span]:h-[19px] [&>span]:w-[90px] [&>span]:whitespace-nowrap",
  navDemo:
    "hidden h-[26px] min-h-0 w-[146px] gap-2 whitespace-nowrap rounded-[6px] border border-[#E9F4F9] px-[37px] py-[5px] font-['Chivo_Mono'] text-[12px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 sm:inline-flex [&>span]:h-4 [&>span]:w-[87px] [&>span]:whitespace-nowrap",
};

function Button({
  children,
  className = "",
  variant = "primary",
  preset,
  icon = true,
  ...props
}) {
  const visualClass = preset ? presets[preset] : variants[variant];

  return (
    <button
      className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-[5px] px-6 text-[11px] font-bold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200/70 ${visualClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} /> : null}
    </button>
  );
}

export default Button;
