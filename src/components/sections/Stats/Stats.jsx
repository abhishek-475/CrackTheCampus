import { motion } from "framer-motion";
import { stats } from "../../../data/stats";
import { useEffect, useState } from "react";

function CountUp({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numeric = parseInt(value.replace(/\D/g, "")) || 0;

    let start = 0;
    const duration = 1200;
    const increment = numeric / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numeric) {
        start = numeric;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden"
      aria-label="Statistics section"
    >
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-transform duration-300"
            >
              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                <CountUp value={item.value} />
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}