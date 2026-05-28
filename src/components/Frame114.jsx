import { motion } from "framer-motion";
import heroBankingFrame from "../assets/hero-banking-frame.png";

function Frame114() {
  return (
    <motion.div
      className="relative mx-auto mt-12 h-auto w-full max-w-[562px] opacity-100 lg:absolute lg:left-[818px] lg:top-[255px] lg:mt-0 lg:h-[301px] lg:w-[562px]"
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

export default Frame114;
