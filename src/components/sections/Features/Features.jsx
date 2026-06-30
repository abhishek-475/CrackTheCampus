import { features } from "../../../data/features";
import FeatureCard from "./FeatureCard";
import Section from "../../ui/Section";

export default function Features() {
  return (
    <Section
      id="features"
      className="py-24 bg-white dark:bg-slate-950"
      ariaLabel="Features section"
    >
      

        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Everything you need to get hired
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            A focused set of tools designed to simulate real placement pipelines and improve interview readiness.
          </p>
        </div>

        {/* grid */}
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