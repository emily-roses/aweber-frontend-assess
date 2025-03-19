interface Props {
  onChange?: (value: string) => void;
  placeholder?: string;
  value: string;
}

function Input({ onChange, placeholder, value }: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange?.(e.target.value);

  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
