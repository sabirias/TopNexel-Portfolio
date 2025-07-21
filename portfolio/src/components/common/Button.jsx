// Button component placeholder
const Button = ({
  children,
  href = "#",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-block px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30",
    secondary:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
  };
  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
