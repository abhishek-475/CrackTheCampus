export default function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        rounded-2xl
        border border-slate-200 dark:border-slate-800
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-md
        shadow-sm

        transition-all duration-300

        ${hover ? "hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-1" : ""}

        ${className}
      `}
    >
      {children}
    </div>
  );
}