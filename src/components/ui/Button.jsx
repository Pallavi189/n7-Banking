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

function Button({ children, className = "", variant = "primary", icon = true, ...props }) {
  return (
    <button
      className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-[5px] px-6 text-[11px] font-bold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200/70 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} /> : null}
    </button>
  );
}

export default Button;
