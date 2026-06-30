import { courses } from "../../../data/courses";
import CourseCard from "./CourseCard";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";

export default function Courses() {
  return (
    <Section id="courses" ariaLabel="Courses section">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge>Preparation Paths</Badge>

        <h2 className="mt-4 text-4xl font-bold">
          Structured learning tracks
        </h2>
      </div>

      <div className="space-y-8">
        {courses.map((c, i) => (
          <CourseCard key={i} course={c} index={i} />
        ))}
      </div>

    </Section>
  );
}