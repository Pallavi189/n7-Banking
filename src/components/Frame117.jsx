import FooterColumn from "./FooterColumn";

const address = {
  city: "London",
  text: "Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.",
};

const group = {
  title: "Solutions",
  links: [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ],
};

function Frame117() {
  return (
    <FooterColumn
      address={address}
      className="h-[504px] w-[268.5060729980469px] gap-32"
      group={group}
      widthClass="w-[268.5060729980469px]"
    />
  );
}

export default Frame117;
