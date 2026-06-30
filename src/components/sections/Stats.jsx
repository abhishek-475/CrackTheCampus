import { motion } from "framer-motion";
import { stats } from "../../data/stats";
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

    // keep suffix like +, %
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
        <section className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">

            {/* Floating Glow Background */}
            <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            {/* Gradient Highlight Number */}
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                <CountUp value={item.value} />
                            </h3>

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