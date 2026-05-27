import { motion } from "framer-motion";
import { Aperture, Badge, Gem, Hexagon, Shield, Triangle } from "lucide-react";
import heroBankingFrame from "../assets/hero-banking-frame.png";
import { trustedBy } from "../data/siteData";
import Button from "./ui/Button";

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto mt-12 h-auto w-full max-w-[562px] lg:absolute lg:left-[738px] lg:top-[43.04px] lg:mt-0 lg:h-[301px] lg:w-[562px]"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <img
        src={heroBankingFrame}
        alt="N7 banking dashboard with recent activity and account balance cards"
        className="h-auto w-full lg:h-[301px] lg:w-[562px]"
        loading="eager"
      />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="desktop-1 relative bg-[#000D12] pb-16 pt-28 opacity-100 sm:pt-36 lg:h-[811px] lg:w-[1440px] lg:pb-0 lg:pt-[211.96px]">
      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            className="opacity-100 lg:flex lg:h-[319px] lg:w-[607.8349px] lg:flex-col lg:gap-[52px]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex h-[218px] w-[607.8349px] flex-col gap-4 opacity-100">
              <h1 className="h-[160px] w-[607.8349px] font-['Archivo'] text-[67px] font-medium leading-[120%] tracking-[-0.01em] text-[#E9F4F9] opacity-100">
                The new foundation of modern banking
              </h1>
              <p className="h-[42px] w-[356.1687px] font-['Archivo'] text-[16px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-80">
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </p>
            </div>
            <div className="mt-[52px] flex h-[49px] w-[438px] flex-wrap gap-5 opacity-100 lg:mt-0">
              <Button
                className="h-[49px] w-[210px] gap-2 whitespace-nowrap rounded-[10px] border-0 bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-[51px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal leading-[130%] tracking-normal text-white opacity-100 transition duration-300 ease-out [&>span]:h-[19px] [&>span]:w-[108px] [&>span]:whitespace-nowrap"
                icon={false}
              >
                Request demo
              </Button>
              <Button
                className="h-[49px] w-[208px] gap-2 whitespace-nowrap rounded-[10px] border border-[#E9F4F9] px-[59px] py-[15px] font-['Chivo_Mono'] text-[15px] font-normal leading-[130%] tracking-normal text-[#E9F4F9] opacity-100 [&>span]:h-[19px] [&>span]:w-[90px] [&>span]:whitespace-nowrap"
                variant="ghost"
                icon={false}
              >
                Contact us
              </Button>
            </div>
          </motion.div>

          <HeroVisual />
        </div>

        <div className="mt-20 flex h-auto w-full max-w-[621.3569px] flex-col gap-4 opacity-100 lg:absolute lg:left-0 lg:top-[443.1px] lg:mt-0 lg:h-[55.3979px] lg:w-[621.3569px]">
          <p className="h-[21px] w-[83px] font-['Archivo'] text-[16px] font-medium capitalize leading-[130%] tracking-normal text-[#E9F4F9] opacity-70">
            Trusted By:
          </p>
          <div className="flex h-[18.3979px] w-full max-w-[621.3569px] flex-wrap items-center gap-[18.4px] overflow-hidden text-[#66829a] opacity-90">
            {trustedBy.map((name, index) => {
              const icons = [Aperture, Gem, Hexagon, Badge, Shield, Triangle];
              const Icon = icons[index] || Aperture;

              return (
                <span
                  key={name}
                  className="inline-flex h-[18.3979px] items-center gap-1.5 text-[13px] font-bold leading-none tracking-[-0.04em]"
                >
                  <Icon className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={1.7} />
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
