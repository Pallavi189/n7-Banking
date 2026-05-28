import { ArrowRight } from "lucide-react";

function FooterColumn({ address, className, group, widthClass }) {
  return (
    <div className={`flex flex-col opacity-100 ${className}`}>
      <div className={widthClass}>
        <h3 className="font-['Archivo'] text-[16px] font-medium leading-[130%] text-[#E9F4F9]">
          {address.city}
        </h3>
        <p className="mt-5 font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#E9F4F9] opacity-70">
          {address.text}
        </p>
      </div>

      <div>
        <h3 className="font-['Archivo'] text-[16px] font-medium leading-[130%] text-[#E9F4F9]">
          {group.title}
        </h3>
        <div className="mt-5 grid gap-[14px]">
          {group.links.map((link) => (
            <a
              key={link}
              href="#top"
              className="flex w-[164px] items-start justify-between gap-4 font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#E9F4F9] opacity-70 transition hover:opacity-100"
            >
              <span>{link}</span>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#00B4FD]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterColumn;
