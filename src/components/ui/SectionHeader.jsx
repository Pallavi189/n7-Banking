import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, copy, align = "center" }) {
  const centered = align === "center";

  return (
    <motion.div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#008dff]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-sm leading-6 text-slate-300">{copy}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeader;
