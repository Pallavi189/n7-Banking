import FooterColumn from "./FooterColumn";

const address = {
  city: "Dubai",
  text: "Linktia Infosystems Ltd - CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
};

const group = {
  title: "N7 Banking",
  links: ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"],
};

function Frame118() {
  return (
    <FooterColumn
      address={address}
      className="h-[509px] w-[268.5060729980469px] gap-[107px]"
      group={group}
      widthClass="w-[268.5060729980469px]"
    />
  );
}

export default Frame118;
