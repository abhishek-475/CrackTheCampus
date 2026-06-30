import { features } from "../../../data/features";
import FeatureCard from "./FeatureCard";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";

export default function Features() {
  return (
    <Section
      id="features"
      ariaLabel="Features section"
    >

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-16">

        <Badge className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
          Core Features
        </Badge>

        <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
          Everything you need to get hired
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          A focused set of tools designed to simulate real placement pipelines
          and improve interview readiness.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            index={index}
          />
        ))}
      </div>

    </Section>
  );
}