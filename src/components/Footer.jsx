import Frame120 from "./Frame120";

function Footer() {
  return (
    <footer id="footer" className="frame-42 relative overflow-hidden">
      <div className="absolute left-20 top-[130px] bg-[linear-gradient(106.53deg,#00D5FD_-5.68%,#003ACE_86.98%)] bg-clip-text font-['Archivo'] text-[318px] font-medium leading-[0.73] tracking-[-0.08em] text-transparent">
        N7
      </div>

      <Frame120 />

      <p className="absolute left-[543.68px] top-[718.96px] h-9 w-[779.4307px] font-['Archivo'] text-[14px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-30">
        Copyright © 2022 by Linktia Infosystems Limited - [CB7 and N7 as Commercial Brand] - [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
      </p>
    </footer>
  );
}

export default Footer;
