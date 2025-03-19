import React from "react";

interface Props {
  children?: React.ReactElement | string;
  disabled?: boolean;
  onSubmit?: () => void;
}

function Button({ children, disabled = false, onSubmit }: Props) {
  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = () =>
    onSubmit?.();

  return (
    <button disabled={disabled} onSubmit={handleSubmit}>
      {children}
    </button>
  );
}

export default Button;
