import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import navigation from "../../data/navigation";


function MobileMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <div className="md:hidden">

            <button
                onClick={() => setOpen(true)}
                aria-label="Open Menu"
                aria-expanded={open}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
                <Menu size={28} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="fixed top-0 right-0 h-screen w-72 bg-white dark:bg-slate-900 shadow-lg z-40 flex flex-col p-6">

                            {/* Drawer Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Menu
                                </h2>

                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close Menu"
                                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <nav className="flex flex-col flex-1 gap-5">

                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="px-3 py-2 rounded-lg text-lg font-medium text-slate-700 dark:text-slate-300 
                                        hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-all"
                                    >
                                        {item.name}
                                    </a>
                                ))}

                                <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-6">
                                    <span className="font-medium text-slate-700 dark:text-slate-300">
                                        Theme
                                    </span>

                                    <ThemeToggle />
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <Button className="w-full">
                                        Get Started
                                    </Button>
                                </div>

                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}



export default MobileMenu;