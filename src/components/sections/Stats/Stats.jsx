import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "../../../data/stats";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";

// InView Hook
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

// CountUp (FIXED)
function CountUp({ end, duration = 2000, suffix = "", start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setValue(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, inView } = useInViewOnce();

  return (
    <Section id="stats" ariaLabel="Statistics section">

      {/* Heading */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Our Impact
        </Badge>

        <h2 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
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

              <CountUp
                end={item.number}
                suffix={item.suffix}
                duration={2000}
                start={inView}
              />

            </h3>

            <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </Section>
  );
}