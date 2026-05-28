import { BarChart3 } from "lucide-react";
import Frame1 from "./Frame1";

function DashboardPreview() {
  return (
    <div className="absolute left-[849px] top-[80px] h-[461px] w-[674px] rounded-t-[14px] border-2 border-[#00B4FD] bg-[#dce2e4] shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
      <div className="absolute left-4 top-0 h-full w-12 bg-[#eef2f3]" />
      <div className="absolute left-16 right-0 top-0 h-full bg-[#cfd4d6] p-8">
        <h3 className="font-['Archivo'] text-[20px] font-semibold text-slate-700">
          AML Dashboard
        </h3>
        <p className="mt-1 text-xs text-slate-500">XXXXXXX</p>

        <div className="mt-5 grid grid-cols-[1.2fr_0.8fr] gap-4">
          <div className="rounded-md border border-pink-400 bg-white/65 p-5 text-pink-500">
            <p className="text-[42px] font-semibold leading-none">450</p>
            <p className="mt-2 text-xs text-slate-600">Total STR Report</p>
          </div>
          <div className="rounded-md border border-amber-400 bg-white/65 p-5 text-amber-500">
            <p className="text-[42px] font-semibold leading-none">3</p>
            <p className="mt-2 text-xs text-slate-600">Days Pending</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_0.9fr] gap-4">
          <div className="grid h-[170px] place-items-center rounded-md bg-white/65 p-5">
            <div className="grid h-36 w-36 place-items-center rounded-full border-[24px] border-teal-500 border-r-blue-700 border-b-amber-500 border-t-pink-500">
              <div className="text-center">
                <p className="text-xl font-semibold text-slate-700">450</p>
                <p className="text-xs text-slate-500">STR</p>
              </div>
            </div>
          </div>
          <div className="flex h-[170px] items-end gap-3 rounded-md bg-white/65 p-5">
            {[82, 130, 72, 116, 94].map((height, index) => (
              <span
                key={height + index}
                className="w-9 rounded-t bg-teal-500"
                style={{ height }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-md bg-white/70 p-4">
          <div className="mb-3 h-4 w-28 rounded bg-slate-300" />
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="h-3 rounded bg-slate-300/80" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-32 left-[-67px] h-[31px] w-[744px] rounded-b-[14px] rounded-t-none border-2 border-[#00B4FD] bg-[#000D12]" />
    </div>
  );
}

function CoreBanking() {
  return (
    <section id="core" className="frame-12 relative overflow-hidden">
      <div className="absolute -left-[64px] top-[121px] font-['Archivo'] text-[540px] font-medium leading-[0.75] tracking-[-0.08em] text-transparent opacity-30 [-webkit-text-stroke:1px_#003D61]">
        CB7
      </div>

      <div className="absolute left-20 top-[156.88px] flex h-[308px] w-[607.8349px] flex-col gap-4 opacity-100">
        <h2 className="w-[493px] font-['Archivo'] text-[52px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
          A complete cloud-based core banking.
        </h2>
        <p className="w-[383px] font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#E9F4F9] opacity-70">
          Faster time to market with our cloud-based core banking services
        </p>
        <Frame1 />
        <a
          href="#digital"
          className="inline-flex items-center gap-2 border-b border-[#00B4FD] font-['Chivo_Mono'] text-[15px] font-normal uppercase leading-[130%] text-[#00B4FD]"
        >
          Learn more
          <BarChart3 className="h-4 w-4" />
        </a>
      </div>

      <DashboardPreview />
    </section>
  );
}

export default CoreBanking;
