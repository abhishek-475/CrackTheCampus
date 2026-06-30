import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../../../data/testimonials";
import Section from "../../ui/Section";

export default function Testimonials() {
  const controls = useAnimation();
  const [speed] = useState(50);

  const startAnimation = (duration = speed) => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();

    return () => controls.stop();
  }, []);

  const pause = () => controls.stop();
  const resume = () => startAnimation();

  return (
    <Section id="testimonials"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
      aria-label="Testimonials section"
    >
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20" />

      
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Student Success Stories
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Thousands of students have cracked placements using CrackTheCampus.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
            drag="x"
            dragElastic={0.05}
            dragConstraints={{ left: -1000, right: 0 }}
            onDragStart={pause}
            onDragEnd={resume}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="w-[340px] flex-shrink-0 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 shadow-sm"
              >
                {/* Quote */}
                <Quote className="w-9 h-9 text-blue-500 mb-4 opacity-80" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-7">
                  "{item.quote}"
                </p>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={`Photo of ${item.name}`}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
                    />

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm text-slate-500">{item.role}</p>
                      <p className="text-xs text-slate-400">{item.company}</p>
                    </div>
                  </div>

                  {item.verified && (
                    <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold">
                      ✓ Verified
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      
    </Section>
  );
}