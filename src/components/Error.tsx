import { ValidationErrors } from "../utils/validation";

import css from "./Error.module.css";

const errorMessageMap: Record<ValidationErrors, string> = {
  [ValidationErrors.LengthError]: "LengthError",
  [ValidationErrors.UppercaseError]:
    "Password must contain at least one uppercase letter.",
  [ValidationErrors.LowercaseError]:
    "Password must contain at least one lowercase letter.",
  [ValidationErrors.NumberError]: "Password must contain at least one number.",
  [ValidationErrors.SpecialError]: `Password must contain at least one special character (!@#$%^&*()_-+={[}]|:;"'<,>.).`,
  [ValidationErrors.MatchError]: "Password must match validation.",
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
