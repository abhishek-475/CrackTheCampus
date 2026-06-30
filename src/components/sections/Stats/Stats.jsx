import { motion } from "framer-motion";
import { stats } from "../../../data/stats";
import { useEffect, useRef, useState } from "react";

/* ---------------------------
   Custom Hook: InView (no libs)
---------------------------- */
function useInViewOnce() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

/* ---------------------------
   Animated CountUp (no libs)
---------------------------- */
function CountUp({ end, duration = 2000, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

/* ---------------------------
   Main Component
---------------------------- */
export default function Stats() {
  const { ref, inView } = useInViewOnce();

  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Our Impact
          </span>

          <h2
            id="stats-heading"
            className="mt-5 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            Trusted by thousands of aspiring professionals
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Our learners consistently improve their aptitude, coding skills,
            and interview performance through structured preparation.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="
                rounded-3xl
                border border-slate-200 dark:border-slate-800
                bg-white/70 dark:bg-slate-900/60
                backdrop-blur-md
                p-8
                text-center
                shadow-sm
                hover:shadow-xl hover:shadow-blue-500/10
                hover:border-blue-400/30
                transition-all
              "
            >
              <h3 className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
                {inView && (
                  <CountUp
                    end={item.number}
                    suffix={item.suffix}
                    duration={2000}
                  />
                )}
              </h3>

              <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}