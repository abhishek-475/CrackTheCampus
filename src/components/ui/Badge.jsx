export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        px-4 py-1
        text-sm font-semibold
        border
        transition
        ${className}
      `}
    >
      {children}
    </span>
  );
}