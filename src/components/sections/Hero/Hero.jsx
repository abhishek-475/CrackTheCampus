import { motion } from "framer-motion";
import Button from "../../ui/Button";
import { ArrowRight, Play, Users, Target, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 md:py-28 gradient-hero"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold">
            🚀 #1 Placement Prep Platform
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
            Crack Your Dream <br />
            <span className="text-blue-600 dark:text-blue-400">Placement</span> in
            Record Time
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            Master aptitude, coding, and soft skills with India’s most trusted
            placement preparation platform. Practice daily, track progress, and
            get hired.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-lg shadow-blue-600/20">
              Start Free Trial <ArrowRight size={18} />
            </Button>
            <Button
              variant="secondary"
              className="border-slate-300 dark:border-slate-600 flex items-center gap-2"
            >
              <Play size={18} /> Watch Demo
            </Button>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <TrendingUp size={16} className="text-emerald-500" /> 4.9/5 Rating
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="flex items-center gap-1">
              <Users size={16} className="text-blue-500" /> 10,000+ placed
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="flex items-center gap-1">
              <Target size={16} className="text-purple-500" /> 95% success rate
            </span>
          </div>
        </motion.div>

        {/* Right visual – modern dashboard card mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 ml-2">
                  Live Dashboard
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-20 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-sm">
                    +85%
                  </div>
                  <div className="h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-sm">
                    Aptitude
                  </div>
                  <div className="h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-300 font-bold text-sm">
                    Coding
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