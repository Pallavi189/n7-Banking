import { ArrowLeft, ArrowRight, Zap } from "lucide-react";

function CasePattern({ muted = false }) {
  return (
    <div
      className={`grid grid-cols-2 gap-[42px] rounded-[9px] bg-[#071D42] p-[31px] ${
        muted ? "h-[334px] w-[334px] opacity-40" : "h-[381px] w-[421px]"
      }`}
    >
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className={muted ? "relative h-[110px] w-[110px]" : "relative h-[138px] w-[138px]"}>
          <span
            className={`absolute left-0 top-0 rounded-[24px] border-[#00B4FD] border-b-transparent border-r-transparent ${
              muted ? "h-[110px] w-[110px] border-[22px]" : "h-[138px] w-[138px] border-[28px]"
            }`}
          />
          <span
            className={`absolute bottom-0 right-0 rounded-[24px] border-[#00B4FD] border-l-transparent border-t-transparent ${
              muted ? "h-[110px] w-[110px] border-[22px]" : "h-[138px] w-[138px] border-[28px]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function CaseStudies() {
  return (
    <section className="frame-41 relative overflow-hidden">
      <h2 className="absolute left-1/2 top-[46px] -translate-x-1/2 font-['Archivo'] text-[52px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
        Our Case Studies
      </h2>

      <div className="absolute left-[122px] top-[214px] h-[382px] w-[1095px] rounded-[16px] bg-[#001A22]/45 opacity-60" />
      <div className="absolute left-[143px] top-[234px]">
        <CasePattern muted />
      </div>

      <article className="absolute left-[213px] top-[180px] flex h-[437px] w-[1015px] gap-[77px] rounded-[16px] bg-[#001A22] px-[24px] py-[25px] opacity-100">
        <CasePattern />

        <div className="w-[432px] pt-[31px]">
          <p className="font-['Chivo_Mono'] text-[13px] font-normal uppercase leading-[130%] tracking-[0.18em] text-[#00B4FD]">
            Getting started
          </p>
          <h3 className="mt-5 w-[432px] font-['Archivo'] text-[43px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
            How we help brand reach out to more people
          </h3>
          <div className="mt-8 flex items-center gap-3 text-[#66829A]">
            <Zap className="h-[32px] w-[32px]" fill="currentColor" />
            <span className="font-['Archivo'] text-[24px] font-semibold leading-[120%]">
              Zoomerr
            </span>
          </div>
          <button className="mt-12 h-[36px] w-[432px] rounded-[9px] border border-[#E9F4F9]/70 font-['Chivo_Mono'] text-[12px] font-normal uppercase leading-[130%] text-[#E9F4F9] opacity-60 transition duration-300 hover:opacity-100">
            Read more
          </button>
        </div>
      </article>

      <div className="absolute left-[599px] top-[651px] flex h-[42px] items-center gap-[29px] text-[#00B4FD]">
        <button className="grid h-[42px] w-[42px] place-items-center rounded-full border border-[#00B4FD]" aria-label="Previous case study">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-[12px]">
          <span className="h-[12px] w-[12px] rounded-full border border-[#00B4FD] opacity-60" />
          <span className="h-[12px] w-[38px] rounded-full bg-[#00B4FD] opacity-45" />
          <span className="h-[12px] w-[12px] rounded-full border border-[#00B4FD] opacity-60" />
          <span className="h-[12px] w-[12px] rounded-full border border-[#00B4FD] opacity-60" />
        </div>
        <button className="grid h-[42px] w-[42px] place-items-center rounded-full border border-[#00B4FD]" aria-label="Next case study">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <a
        href="#footer"
        className="absolute left-[1141px] top-[666px] inline-flex items-center gap-2 border-b border-[#00B4FD] font-['Chivo_Mono'] text-[14px] font-normal uppercase leading-[130%] text-[#00B4FD]"
      >
        View all
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}

export default CaseStudies;
