import { motion } from "framer-motion";
import { companies } from "../../../data/companies";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";
import Card from "../../ui/Card";

export default function Companies() {
  return (
    <Section id="companies" ariaLabel="Companies section">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Trusted by Recruiters
        </Badge>

        <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
          Join learners placed at
          <span className="block text-blue-600 dark:text-blue-400">
            world-class companies
          </span>
        </h2>

        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
          Practice, prepare and get hired with structured learning paths
          trusted by students across India.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <Card
              className="
                group
                flex h-24 items-center justify-center
                cursor-pointer
              "
            >
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="
                  h-9 w-auto object-contain
                  transition-all duration-300
                  md:grayscale md:opacity-70
                  group-hover:scale-110
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}