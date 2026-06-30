import { motion } from "framer-motion";
import Button from "../../ui/Button";
import { ArrowRight, Play, Users, Target, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      aria-label="Hero section"
    >
      {/* background orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium">
             Built for placement-driven preparation
          </div>

          {/* headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Train for Placements like a{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Top 1% Candidate
            </span>
          </h1>

          {/* subtext */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Practice real interview patterns, company-specific questions, and AI-driven mock tests designed to simulate actual hiring pipelines.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-transform hover:scale-[1.02]">
              Start Practicing Free <ArrowRight size={18} />
            </Button>

            <Button
              variant="secondary"
              className="flex items-center gap-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Play size={18} />
              View Demo Test
            </Button>
          </div>

          {/* trust row */}
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 pt-2">
            <span className="flex items-center gap-1">
              <TrendingUp size={16} className="text-emerald-500" />
              4.9/5 learner rating
            </span>

            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />

            <span className="flex items-center gap-1">
              <Users size={16} className="text-blue-500" />
              10,000+ active learners
            </span>

            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />

            <span className="flex items-center gap-1">
              <Target size={16} className="text-purple-500" />
              95% placement success
            </span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative w-full max-w-lg mx-auto">

            {/* glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            {/* MAIN CARD */}
            <div className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/40 rounded-3xl shadow-2xl p-6">

              {/* top bar */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-slate-500 ml-2">
                  Live Practice Dashboard
                </span>
              </div>

              {/* mock content */}
              <div className="space-y-4">

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <p className="text-sm text-slate-500">Current Session</p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Aptitude: Probability & Permutations
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      87%
                    </p>
                    <p className="text-xs text-slate-500">Accuracy</p>
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-center">
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      #128
                    </p>
                    <p className="text-xs text-slate-500">Ranking</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">
                      Weekly Progress
                    </span>
                    <span className="text-emerald-600 font-semibold">
                      +12%
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-emerald-500 rounded-full" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}