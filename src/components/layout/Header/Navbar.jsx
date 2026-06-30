import { useState } from "react";
import navigation from "../../../data/navigation";

function Navbar() {
    const [active, setActive] = useState("features");



    return (
        <nav className="hidden md:flex gap-8">
            {navigation.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActive(item.id)}
                    className={`font-medium transition-colors duration-300 ${active === item.id
                            ? "text-blue-600"
                            : "text-slate-600 dark:text-slate-300 hover:text-blue-600"
                        }`}
                >
                    {item.name}
                </a>
            ))}
        </nav>
    );
}

export default Navbar;