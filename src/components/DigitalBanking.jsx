import digitalPhoneFrame85 from "../assets/digital-phone-frame-85.png";
import Button from "./ui/Button";

function DigitalBanking() {
  return (
    <section id="digital" className="light-section relative h-[2148.7001px] w-[1440px] overflow-hidden opacity-100">
      <div className="absolute left-20 top-[100px]">
        <h2 className="w-[420px] font-['Archivo'] text-[42px] font-normal leading-[120%] tracking-[-0.01em] text-[#001116]">
          Digital banking out-of-the-box
        </h2>
        <p className="mt-6 w-[390px] font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#001116] opacity-70">
          N7 helps your financial institution improve the client experience,
          establish secure paperless procedures and modernize operations.
        </p>
        <Button
          className="mt-9 h-[49px] w-[210px] gap-2 whitespace-nowrap rounded-[10px] border-0 bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-[51px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal uppercase leading-[130%] tracking-normal text-white opacity-100 [&>span]:whitespace-nowrap"
          icon={false}
        >
          Request demo
        </Button>
      </div>

      <img
        src={digitalPhoneFrame85}
        alt="N7 digital banking phone interface feature frames"
        className="absolute left-[622px] top-[100px] h-[1848.7001px] w-[651.7056px] object-contain opacity-100"
        loading="lazy"
      />
    </section>
  );
}

export default DigitalBanking;
