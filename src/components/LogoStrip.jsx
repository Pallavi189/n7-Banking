function LogoStrip() {
  const items = ["N7", "Say", "to the new way of banking", "CB7", "Say"];

  return (
    <div className="border-y border-slate-200 bg-white py-3 text-[#001116]">
      <div className="flex min-w-max animate-[slide_18s_linear_infinite] items-center justify-center gap-8 overflow-hidden text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
        {[...items, ...items].map((item, index) => (
          <span key={item + index} className={item === "N7" || item === "CB7" ? "text-[#008dff]" : ""}>
            {item === "Say" ? "Say 👋" : item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LogoStrip;
