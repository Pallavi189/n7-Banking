import { ArrowRight } from "lucide-react";

const addresses = [
  {
    city: "London",
    address: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address: "Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "London",
    address: "Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

const groups = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

const footerColumns = addresses.map((address, index) => ({
  address,
  group: groups[index],
}));

function FooterLinks({ group }) {
  return (
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
  );
}

function Footer() {
  return (
    <footer id="footer" className="relative h-[787px] w-[1440px] overflow-hidden bg-[#000D12] opacity-100">
      <div className="absolute left-20 top-[130px] bg-[linear-gradient(106.53deg,#00D5FD_-5.68%,#003ACE_86.98%)] bg-clip-text font-['Archivo'] text-[318px] font-medium leading-[0.73] tracking-[-0.08em] text-transparent">
        N7
      </div>

      <div className="absolute left-[543.68px] top-[130px] flex h-[509px] w-[816.3174px] flex-col gap-[34px] opacity-100">
        <div className="grid grid-cols-3 gap-[34px]">
          {footerColumns.map(({ address, group }, index) => (
            <div
              key={`${address.city}-${group.title}`}
              className={
                index === 2
                  ? "flex h-[317px] w-[211.3053px] flex-col gap-[107px] opacity-100"
                  : index === 1
                    ? "flex h-[509px] w-[268.5061px] flex-col gap-[107px] opacity-100"
                    : "flex h-[504px] w-[268.5061px] flex-col gap-32 opacity-100"
              }
            >
              <div className={index === 2 ? "w-[211.3053px]" : "w-[268.5061px]"}>
              <h3 className="font-['Archivo'] text-[16px] font-medium leading-[130%] text-[#E9F4F9]">
                {address.city}
              </h3>
              <p className="mt-5 font-['Archivo'] text-[16px] font-normal leading-[130%] text-[#E9F4F9] opacity-70">
                {address.address}
              </p>
              </div>
              <FooterLinks group={group} />
            </div>
          ))}
        </div>
      </div>

      <p className="absolute left-[543.68px] top-[718.96px] h-9 w-[779.4307px] font-['Archivo'] text-[14px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-30">
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
      </p>
    </footer>
  );
}

export default Footer;
