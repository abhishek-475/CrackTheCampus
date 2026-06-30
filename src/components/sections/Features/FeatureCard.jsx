import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-slate-200/70 dark:border-slate-800/60 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* soft glow accent (Stripe style subtle) */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />

      {/* icon */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition">
        <Icon size={18} />
      </div>

      {/* title */}
      <h3 className="relative mt-5 text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h3>

      {/* description */}
      <p className="relative mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}