import { motion } from "framer-motion";
import { companies } from "../../data/companies";

function Companies() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-4 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
            Trusted by Top Recruiters
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Our students work at the world's
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              leading companies
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Thousands of learners have secured opportunities at top technology
            companies through focused preparation and interview practice.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-24 p-4 hover:shadow-lg transition-all"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-8 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Companies;