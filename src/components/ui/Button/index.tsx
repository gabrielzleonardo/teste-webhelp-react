import "./style.css";
const Button = ({
  label,
  disabled = false,
  className,
  isLarge,
  buttonType,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  className: "primary-button" | "secondary-button";
  isLarge?: boolean;
  buttonType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <button
      type={buttonType || "button"}
      onClick={onClick}
      className={`button ${isLarge === true ? "button-lg" : ""} ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
