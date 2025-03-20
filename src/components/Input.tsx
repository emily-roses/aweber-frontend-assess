import { useId } from "react";

interface Props {
  label?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
}

function Input({ label, onChange, placeholder, type = "text", value }: Props) {
  const id = useId();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange?.(e.target.value);

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
