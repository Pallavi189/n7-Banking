import FooterColumn from "./FooterColumn";

const address = {
  city: "London",
  text: "Linktia Infosystems Ltd - CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
};

const group = {
  title: "Our Socials",
  links: ["LinkedIn", "X"],
};

function Frame119() {
  return (
    <FooterColumn
      address={address}
      className="h-[317px] w-[211.3052978515625px] gap-[107px]"
      group={group}
      widthClass="w-[211.3052978515625px]"
    />
  );
}

export default Frame119;
