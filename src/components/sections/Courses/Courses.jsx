import { courses } from "../../../data/courses";
import CourseCard from "./CourseCard";

export default function Courses() {
    return (
        <section
            id="courses"
            className="bg-slate-50 py-24 dark:bg-slate-950"
            aria-labelledby="courses-heading"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mx-auto mb-16 max-w-2xl text-center">

                    <span className="font-semibold uppercase tracking-wider text-blue-600">
                        Preparation Paths
                    </span>

                    <h2
                        id="courses-heading"
                        className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
                    >
                        Learn with structured placement tracks
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Carefully designed learning paths covering aptitude,
                        programming, interviews and company-specific preparation.
                    </p>

                </div>

                <div className="space-y-8">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={course.title}
                            course={course}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}