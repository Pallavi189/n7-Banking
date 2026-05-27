function StatCard({ label, value, sub, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.055] p-4 ${className}`}>
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs text-cyan-200/80">{sub}</p>
    </div>
  );
}

export default StatCard;
