import { courses } from "../../../data/courses";
import CourseCard from "./CourseCard";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";

export default function Courses() {
  return (
    <Section id="courses" ariaLabel="Courses section">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-14">

        <Badge>
          Preparation Paths
        </Badge>

        <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
          Structured learning tracks
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Carefully designed preparation journeys covering aptitude, coding,
          interviews, and company-specific practice modules.
        </p>

      </div>

      {/* CONTENT */}
      <div className="space-y-8">

        {courses.map((c, i) => (
          <CourseCard
            key={c.title || i}
            course={c}
            index={i}
          />
        ))}

      </div>

    </Section>
  );
}