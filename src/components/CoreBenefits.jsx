import { Check } from "lucide-react";
import { coreBenefits } from "../data/siteData";

function DashboardPanel() {
  return (
    <div className="absolute left-[-180px] top-[110px] h-[461px] w-[674px] rounded-t-[14px] border-2 border-[#00B4FD] bg-[#dce2e4] shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
      <div className="absolute left-4 top-0 h-full w-12 bg-[#eef2f3]" />
      <div className="absolute left-16 right-0 top-0 h-full bg-[#cfd4d6] p-8">
        <div className="mb-5 h-8 w-[360px] rounded border border-blue-300 bg-white/50" />
        <h3 className="font-['Archivo'] text-[20px] font-semibold text-slate-700">
          CYC Dashboard
        </h3>
        <p className="mt-1 text-xs text-slate-500">XXXXX</p>

        <div className="mt-5 grid grid-cols-3 gap-4">
          {[
            ["1115", "Total Record", "text-blue-500", "border-blue-400"],
            ["940", "In Progress", "text-amber-500", "border-amber-400"],
            ["105", "KYC Completed", "text-teal-500", "border-teal-400"],
          ].map(([value, label, color, border]) => (
            <div key={label} className={`rounded-md border ${border} bg-white/65 p-4 ${color}`}>
              <p className="text-[32px] font-semibold leading-none">{value}</p>
              <p className="mt-2 text-xs text-slate-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[1fr_0.82fr] gap-4">
          <div className="h-[210px] rounded-md bg-white/70 p-4">
            <div className="mb-3 h-4 w-36 rounded bg-slate-300" />
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 35 }).map((_, index) => (
                <span key={index} className="h-3 rounded bg-slate-300/80" />
              ))}
            </div>
          </div>
          <div className="h-[210px] rounded-md bg-white/70 p-4">
            <div className="mb-3 h-4 w-28 rounded bg-slate-300" />
            <div className="flex h-[150px] items-end gap-3">
              {[118, 74, 132, 68, 108].map((height, index) => (
                <span
                  key={height + index}
                  className="w-10 rounded-t bg-teal-500"
                  style={{ height }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-[-67px] h-[31px] w-[744px] rounded-b-[14px] rounded-t-none border-2 border-[#00B4FD] bg-[#000D12]" />
    </div>
  );
}

function BenefitItem({ children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function CoreBenefits() {
  const leftBenefits = coreBenefits.slice(0, 5);
  const rightBenefits = coreBenefits.slice(5);

  return (
    <section className="frame-80 relative overflow-hidden">
      <DashboardPanel />

      <div className="absolute left-[770px] top-[171px] w-[516px]">
        <h2 className="font-['Archivo'] text-[29px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
          Run a more efficient, flexible,and digitally connected corebanking system
        </h2>

        <p className="mt-10 font-['Archivo'] text-[16px] font-semibold leading-[130%] text-[#E9F4F9]">
          What you will get:
        </p>

        <div className="mt-5 grid grid-cols-2 gap-x-[66px] font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#E9F4F9]/70">
          <ul className="grid gap-4">
            {leftBenefits.map((benefit) => (
              <BenefitItem key={benefit}>{benefit}</BenefitItem>
            ))}
          </ul>
          <ul className="grid gap-4">
            {rightBenefits.map((benefit) => (
              <BenefitItem key={benefit}>{benefit}</BenefitItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CoreBenefits;
