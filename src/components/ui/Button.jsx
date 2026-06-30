function Button({ children, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition duration-300";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-white text-white hover:bg-white hover:text-blue-600",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}

export default Button;