export default function Badge({
  children,
  className = "",
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-transparent",
    outline:
      "bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        px-4 py-1
        text-sm font-semibold
        border
        transition-all duration-200
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}