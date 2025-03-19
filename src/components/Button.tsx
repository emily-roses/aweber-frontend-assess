import React from "react";

interface Props {
  children?: React.ReactElement | string;
  onSubmit?: () => void;
}

function Button({ children, onSubmit }: Props) {
  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = () =>
    onSubmit?.();

  return <button onSubmit={handleSubmit}>{children}</button>;
}

export default Button;
