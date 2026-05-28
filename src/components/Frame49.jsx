const defaultTitle = "Take the full advantage of going paper-less now.";
const defaultCopy =
  "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations";

function Frame49({
  className = "absolute left-20 top-[57px]",
  copy = defaultCopy,
  title = defaultTitle,
}) {
  return (
    <div className={`flex h-[202px] w-[607.8348999023438px] flex-col gap-8 opacity-100 ${className}`}>
      <h2 className="h-32 w-[607.8348999023438px] font-['Archivo'] text-[53px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9] opacity-100">
        {title}
      </h2>
      <p className="h-[42px] w-[462.9190979003906px] font-['Archivo'] text-[16px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-70">
        {copy}
      </p>
    </div>
  );
}

export default Frame49;
