import { motion } from "framer-motion";
import { companies } from "../../../data/companies";

export default function Companies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
            Trusted by Leading Recruiters
          </span>

          <h2
            id="companies-heading"
            className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Join learners placed at
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              world-class companies
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Practice, prepare and get hired with structured learning paths trusted by students across India.
          </p>
        </motion.div>

        {/* Infinite Logo Marquee */}
        <div className="relative mt-16 overflow-hidden">

          {/* Fades */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="
                  group
                  flex h-24 w-48 shrink-0
                  items-center justify-center
                  rounded-2xl
                  border border-slate-200 dark:border-slate-800
                  bg-white/80 dark:bg-slate-900/80
                  backdrop-blur-sm
                  shadow-sm shadow-blue-500/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:shadow-xl hover:shadow-blue-500/20
                "
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  className="
                    max-h-9 w-auto object-contain
                    md:grayscale md:opacity-80
                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                    transition-all duration-300
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}