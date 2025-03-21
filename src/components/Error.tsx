import { ValidationErrors } from "src/utils/validation";

import css from "./Error.module.css";

const errorMessageMap: Record<ValidationErrors, string> = {
  [ValidationErrors.LengthError]: "Must be at least 6 characters long.",
  [ValidationErrors.UppercaseError]:
    "Must contain at least one uppercase letter.",
  [ValidationErrors.LowercaseError]:
    "Must contain at least one lowercase letter.",
  [ValidationErrors.NumberError]: "Must contain at least one number.",
  [ValidationErrors.SpecialError]: `Must contain at least one special character (!@#$%^&*()_-+={[}]|:;"'<,>.).`,
  [ValidationErrors.MatchError]: "Must match confirmation.",
} as const;

interface Props {
  errors?: Set<ValidationErrors>;
}

function Error({ errors }: Props) {
  if (errors === undefined || errors.size === 0) return;
  return (
    <>
      {[...errors].map((error) => (
        <p className={css.error} key={error}>
          {errorMessageMap[error]}
        </p>
      ))}
    </>
  );
}

export default Error;
