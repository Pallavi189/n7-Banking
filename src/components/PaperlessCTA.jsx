import paperlessCardFrame48 from "../assets/paperless-card-frame-48.png";

function PaperlessCTA() {
  return (
    <section className="relative h-[543px] w-[1440px] bg-[#000D12] opacity-100">
      <img
        src={paperlessCardFrame48}
        alt="Take the full advantage of going paper-less now"
        className="absolute left-[81px] top-[58px] h-[427px] w-[1279px] rounded-[27px] object-cover opacity-100"
        loading="lazy"
      />
    </section>
  );
}

export default PaperlessCTA;
