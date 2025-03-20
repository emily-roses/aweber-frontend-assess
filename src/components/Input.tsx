interface Props {
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
}

function Input({ onChange, placeholder, type = "text", value }: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange?.(e.target.value);

  return (
    <input
      type={type}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
