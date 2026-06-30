import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";

export default function CourseCard({ course, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.45,
                delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative overflow-hidden">
                    <img
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                        {course.category}
                    </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8">

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {course.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                        {course.description}
                    </p>

                    {/* Topics */}
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {course.topics.map((topic) => (
                            <div
                                key={topic}
                                className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                            >
                                <span className="h-2 w-2 rounded-full bg-blue-600" />
                                {topic}
                            </div>
                        ))}
                    </div>

                    {/* Meta */}
                    <div className="mt-8 flex flex-wrap gap-8 text-sm">

                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-blue-600" />
                            <span className="text-slate-600 dark:text-slate-400">
                                {course.duration}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Users size={18} className="text-emerald-600" />
                            <span className="text-slate-600 dark:text-slate-400">
                                {course.students}
                            </span>
                        </div>

                    </div>

                    <button
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Explore Track
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>
        </motion.article>
    );
}