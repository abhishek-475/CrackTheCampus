export default function Section({
  id,
  children,
  className = "",
  ariaLabel,
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`
        relative
        py-24
        bg-slate-50
        dark:bg-slate-950
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 overflow-visible">
        {children}
      </div>
    </section>
  );
}