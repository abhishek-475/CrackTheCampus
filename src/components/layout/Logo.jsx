import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Example icon from react-icons

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      {/* Icon instead of logo image */}
      <FaGraduationCap className="h-10 w-10 text-blue-600" />

      {/* Brand text */}
      <span className="text-2xl font-bold text-blue-600">
        Crack
        <span className="text-slate-900 dark:text-white">
          TheCampus
        </span>
      </span>
    </a>
  );
}

export default Logo;
