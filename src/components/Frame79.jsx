import digitalPhoneFrame85 from "../assets/digital-phone-frame-85.png";
import Frame48 from "./Frame48";
import Frame1 from "./Frame1";

function Frame79Strip() {
  const items = ["N7", "Say", "to the new way of banking", "CB7", "Say"];

  return (
    <div className="absolute left-0 top-0 flex h-[86px] w-[1440px] items-center overflow-hidden bg-white text-[#001116]">
      <div className="flex min-w-full items-center justify-center gap-9 font-['Archivo'] text-[32px] font-semibold leading-[120%] tracking-normal">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`inline-flex items-center gap-9 ${item === "N7" || item === "CB7" ? "text-[#008DFF]" : ""}`}
          >
            <span className="text-[#A9B0B4]">{"\u2733"}</span>
            {item === "Say" ? <span>Say {"\u{1F44B}"}</span> : item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <section id="digital" className="frame-79 relative overflow-hidden">
      <Frame79Strip />

      <div className="light-section absolute left-0 top-[86px] h-[2677px] w-[1440px] overflow-hidden">
        <div className="absolute left-20 top-[100px]">
          <h2 className="w-[420px] font-['Archivo'] text-[42px] font-normal leading-[120%] tracking-[-0.01em] text-[#001116]">
            Digital banking out-of-the-box
          </h2>
          <p className="mt-6 w-[390px] font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#001116] opacity-70">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures
          </p>
          <Frame1 className="mt-9" />
          <a
            href="#resources"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#006DEB] font-['Chivo_Mono'] text-[15px] font-normal uppercase leading-[130%] text-[#006DEB]"
          >
            Learn more
          </a>
        </div>

        <img
          src={digitalPhoneFrame85}
          alt="N7 digital banking phone interface feature frames"
          className="absolute left-[622px] top-[100px] h-[1848.7001px] w-[651.7056px] object-contain opacity-100"
          loading="lazy"
        />

        <Frame48 className="top-[2142px]" />
      </div>
    </section>
  );
}

export default Frame79;
