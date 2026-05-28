import { ArrowRight } from "lucide-react";

function PatternTile() {
  return (
    <div className="grid h-[268px] w-[295px] grid-cols-2 gap-6 rounded-[8px] bg-[#071D42] p-6">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="relative h-[90px] w-[90px]">
          <span className="absolute left-0 top-0 h-[90px] w-[90px] rounded-[18px] border-[18px] border-[#00B4FD] border-b-transparent border-r-transparent" />
          <span className="absolute bottom-0 right-0 h-[90px] w-[90px] rounded-[18px] border-[18px] border-[#00B4FD] border-l-transparent border-t-transparent" />
        </div>
      ))}
    </div>
  );
}

function ReadMoreButton({ className = "" }) {
  return (
    <button
      className={`h-[36px] rounded-[9px] border border-[#E9F4F9]/70 font-['Chivo_Mono'] text-[12px] font-normal uppercase leading-[130%] text-[#E9F4F9] opacity-60 transition duration-300 hover:opacity-100 ${className}`}
    >
      Read more
    </button>
  );
}

function BlogMeta() {
  return (
    <div className="mt-4 flex items-center gap-4 font-['Archivo'] text-[14px] font-normal leading-[130%] text-[#00B4FD] opacity-70">
      <span>David Grohl</span>
      <span>17/08/24</span>
    </div>
  );
}

function BlogCard({ large = false }) {
  return (
    <article
      className={
        large
          ? "flex h-[316px] w-[670px] gap-8 rounded-[16px] bg-[#001A22] p-[24px] opacity-100"
          : "h-[317px] w-[320px] rounded-[16px] bg-[#001A22] px-8 py-10 opacity-100"
      }
    >
      {large ? (
        <>
          <PatternTile />
          <div className="flex w-[287px] flex-col">
            <p className="font-['Chivo_Mono'] text-[13px] font-normal uppercase leading-[130%] tracking-[0.18em] text-[#00B4FD]">
              Getting started
            </p>
            <h3 className="mt-4 font-['Archivo'] text-[26px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
              How to transition from a traditional to a digital bank
            </h3>
            <BlogMeta />
            <ReadMoreButton className="mt-auto w-[287px]" />
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col">
          <p className="font-['Chivo_Mono'] text-[13px] font-normal uppercase leading-[130%] tracking-[0.18em] text-[#00B4FD]">
            Getting started
          </p>
          <h3 className="mt-4 font-['Archivo'] text-[28px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
            How to transition from a traditional to a digital bank
          </h3>
          <BlogMeta />
          <ReadMoreButton className="mt-auto w-[288px]" />
        </div>
      )}
    </article>
  );
}

function BlogSection() {
  return (
    <section id="resources" className="frame-40 relative">
      <div className="absolute left-20 top-[83px]">
        <h2 className="w-[438px] font-['Archivo'] text-[37px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9]">
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <button className="mt-[50px] h-[49px] w-[190px] rounded-[9px] border border-[#E9F4F9] font-['Chivo_Mono'] text-[15px] font-normal uppercase leading-[130%] text-[#E9F4F9] opacity-100">
          Insights
        </button>
      </div>

      <div className="absolute left-[690px] top-20">
        <BlogCard large />
      </div>

      <div className="absolute left-[690px] top-[432px] flex gap-[30px]">
        <BlogCard />
        <BlogCard />
      </div>

      <a
        href="#footer"
        className="absolute left-[1199px] top-[772px] inline-flex items-center gap-2 border-b border-[#00B4FD] font-['Chivo_Mono'] text-[14px] font-normal uppercase leading-[130%] text-[#00B4FD]"
      >
        Read all insights
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}

export default BlogSection;
export { PatternTile };
