import { motion } from "framer-motion";
import { stats } from "../../../data/stats";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";
import { useEffect, useRef, useState } from "react";

function useInViewOnce() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function CountUp({ end }) {
  const [v, setV] = useState(0);

  useEffect(() => {
    let i = 0;
    const step = end / 100;
    const t = setInterval(() => {
      i += step;
      if (i >= end) {
        i = end;
        clearInterval(t);
      }
      setV(Math.floor(i));
    }, 16);
  }, [end]);

  return v;
}

export default function Stats() {
  const { ref, inView } = useInViewOnce();

  return (
    <Section id="stats" ariaLabel="Stats section">

      <div className="text-center mb-16">
        <Badge>Our Impact</Badge>
        <h2 className="text-4xl font-bold">
          Trusted by thousands
        </h2>
      </div>

      <div ref={ref} className="grid md:grid-cols-4 gap-6">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-4xl font-bold text-blue-600">
              {inView ? <CountUp end={s.number} /> : 0}
            </h3>
            <p>{s.label}</p>
          </motion.div>
        ))}

      </div>

    </Section>
  );
}