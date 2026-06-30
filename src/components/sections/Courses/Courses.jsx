import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { courses } from "../../../data/courses";

export default function Courses() {
    return (
        <section
            id="courses"
            className="py-24 bg-slate-50 dark:bg-slate-950"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">
                        Preparation Paths
                    </span>

                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Learn with structured placement tracks
                    </h2>

                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Carefully designed learning paths covering aptitude,
                        programming, interviews and company-specific preparation.
                    </p>
                </div>

                <div className="space-y-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .45, delay: index * .08 }}
                            viewport={{ once: true }}
                            className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition"
                        >
                            <div className="grid lg:grid-cols-2">

                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-72 lg:h-full w-full object-cover group-hover:scale-105 transition duration-500"
                                    />

                                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
                                        {course.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col justify-center">

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        {course.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {course.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                                        {course.topics.map((topic) => (
                                            <div
                                                key={topic}
                                                className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                {topic}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex gap-8 mt-8 text-sm">

                                        <div className="flex items-center gap-2">
                                            <Clock
                                                size={18}
                                                className="text-blue-600"
                                            />
                                            <span className="text-slate-600 dark:text-slate-400">
                                                {course.duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Users
                                                size={18}
                                                className="text-green-600"
                                            />
                                            <span className="text-slate-600 dark:text-slate-400">
                                                {course.students}
                                            </span>
                                        </div>

                                    </div>

                                    <button
                                        className="mt-8 inline-flex items-center gap-2 self-start
                    px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700
                    text-white font-medium transition"
                                    >
                                        Explore Track
                                        <ArrowRight size={18} />
                                    </button>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}