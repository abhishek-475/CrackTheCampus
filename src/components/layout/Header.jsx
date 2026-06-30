import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300
                ${scrolled ? "shadow-lg bg-white/90 backdrop-blur dark:bg-slate-900/90" : "bg-transparent"} `}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left */}
                <Logo />

                {/* Center */}
                <Navbar />

                {/* Right */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button>Get Started</Button>
                </div>

                {/* Mobile */}
                <MobileMenu />

            </div>
        </header>
    );
}