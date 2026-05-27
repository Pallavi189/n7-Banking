import { motion } from "framer-motion";
import { ArrowRight, Atom, BadgeCheck, Blend, Orbit, Sparkles } from "lucide-react";
import { solutions } from "../data/siteData";
import Button from "./ui/Button";

const iconMap = [Blend, Sparkles, Atom, BadgeCheck, Orbit];

function SolutionCard({ solution, index }) {
  const Icon = iconMap[index] || Blend;

  return (
    <motion.article
      className="relative flex h-[327px] w-[268.5061px] flex-col gap-[26px] opacity-100"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex h-12 items-start justify-between">
        <Icon className="h-12 w-12 text-[#E9F4F9]" strokeWidth={1.5} />
        {index >= 3 ? (
          <span className="mt-8 font-['Chivo_Mono'] text-[14px] font-normal uppercase leading-[130%] text-[#E9F4F9]">
            NBFC
          </span>
        ) : null}
      </div>
      <div className="flex h-[205px] w-[268.5061px] flex-col gap-8 opacity-100">
        <div>
          <h3 className="h-[26px] w-[263.7182px] font-['Archivo'] text-[22px] font-normal leading-[120%] tracking-normal text-[#E9F4F9] opacity-100">
            {solution.title}
          </h3>
          <p className="mt-[26px] h-[147px] w-[268.5061px] font-['Archivo'] text-[16px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-70">
            {solution.copy}
          </p>
        </div>
        <a
          href="#core"
          className="inline-flex items-center gap-2 font-['Chivo_Mono'] text-[15px] font-normal uppercase leading-[130%] text-[#00B4FD]"
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="relative bg-[#000D12] py-20 opacity-100 sm:py-28 lg:h-[1177px] lg:w-[1440px] lg:py-0">
      <div className="section-shell relative h-full">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="opacity-100 lg:absolute lg:left-0 lg:top-[47.09px] lg:flex lg:h-[185px] lg:w-[433px] lg:flex-col lg:gap-12">
            <h2 className="h-[88px] w-[433px] font-['Archivo'] text-[37px] font-normal leading-[120%] tracking-[-0.01em] text-[#E9F4F9] opacity-100">
              All of our solutions are tailor-made to your needs
            </h2>
            <Button
              className="mt-7 h-[49px] w-[226px] gap-2 whitespace-nowrap rounded-[10px] border border-[#E9F4F9] px-[59px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal uppercase leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 lg:mt-0 [&>span]:whitespace-nowrap"
              variant="ghost"
              icon={false}
            >
              Request demo
            </Button>
          </div>
        </div>

        <div className="mt-24 grid gap-x-14 gap-y-12 lg:absolute lg:left-[650px] lg:top-[47.09px] lg:mt-0 lg:h-[1085px] lg:w-[613.0121px] lg:grid-cols-2 lg:gap-x-[75px] lg:gap-y-[76px]">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
