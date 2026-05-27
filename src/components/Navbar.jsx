import { ChevronDown, Search } from "lucide-react";
import { navLinks } from "../data/siteData";
import Button from "./ui/Button";

function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex h-full w-full items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="N7 home">
          <span className="font-['Archivo'] text-[24px] font-medium leading-[120%] tracking-normal text-[#E9F4F9]">
            N7
          </span>
        </a>

        <div className="hidden h-[26px] w-[504.4559px] items-center justify-between gap-20 sm:flex">
          <div className="flex h-4 w-[263.4559px] items-center gap-5">
            {navLinks.slice(0, 3).map((link, index) => {
              const frameWidth = index === 0 ? "w-[82.728px]" : index === 1 ? "w-[86.728px]" : "w-[59px]";
              const textWidth = index === 0 ? "w-[65px]" : index === 1 ? "w-[69px]" : "w-[59px]";

              return (
              <a
                key={link.label}
                href={link.href}
                className={`inline-flex h-4 ${frameWidth} items-center gap-1 rounded-[4px] font-['Chivo_Mono'] text-[12px] font-normal uppercase leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 transition hover:text-[#008dff]`}
              >
                <span className={`h-4 ${textWidth}`}>{link.label}</span>
                {index < 2 ? <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.7} /> : null}
              </a>
              );
            })}
          </div>
          <Button className="hidden h-[26px] min-h-0 w-[146px] gap-2 whitespace-nowrap rounded-[6px] border border-[#E9F4F9] px-[37px] py-[5px] font-['Chivo_Mono'] text-[12px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 sm:inline-flex [&>span]:h-4 [&>span]:w-[87px] [&>span]:whitespace-nowrap" variant="ghost" icon={false}>
            Request demo
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            className="grid h-6 w-6 place-items-center rounded-[4px] border border-white/12 bg-white/[0.05] text-white transition hover:bg-white/[0.1] sm:hidden"
            aria-label="Search"
          >
            <Search className="h-3 w-3" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
