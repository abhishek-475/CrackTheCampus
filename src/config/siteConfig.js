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
        overflow-hidden
        py-24
        px-6
        bg-slate-50
        dark:bg-slate-950
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}