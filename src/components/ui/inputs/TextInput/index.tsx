import "./style.css";
import { ITextInput } from "../../../../types";

const TextInput = ({
  label,
  placeholder,
  disabled,
  alertIsOpen,
  type,
  value,
  onChange,
  maxLength,
  
}: ITextInput) => {
  return (
    <div className="text-input-wrapper">
      {alertIsOpen && <div className="alert">*Campo obrigatório</div>}
      <input
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        type={type || "text"}
        onChange={onChange}
        name={label}
        maxLength={maxLength}
      />
      <label>{label}</label>
    </div>
  );
};

export default TextInput;
