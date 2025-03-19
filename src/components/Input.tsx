interface Props {
  placeholder?: string;
}

function Input({ placeholder }: Props) {
  return <input type="text" placeholder={placeholder} />;
}

export default Input;
