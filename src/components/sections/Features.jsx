import { features } from "../../data/features";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900 relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need to crack placements
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A complete preparation ecosystem designed for interviews, aptitude tests, and real-world hiring scenarios.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative overflow-hidden p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 
                dark:bg-slate-900/80 backdrop-blurhover:border-blue-500/40 hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon with gradient background */}
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br 
                  from-blue-600 to-indigo-500 text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Soft background glow */}
      <div className="absolute top-[-120px] right-[-120px] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

    </section>
  );
}