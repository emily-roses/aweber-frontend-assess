import { ValidationErrors } from "../utils/validation";

const errorMessageMap: Record<ValidationErrors, string> = {
  [ValidationErrors.LengthError]: "",
  [ValidationErrors.UppercaseError]: "",
  [ValidationErrors.LowercaseError]: "",
  [ValidationErrors.NumberError]: "",
  [ValidationErrors.SpecialError]: "",
  [ValidationErrors.MatchError]: "",
} as const;

interface Props {
  errors?: Set<ValidationErrors>;
}

function Error({ errors }: Props) {
  if (errors === undefined || errors.size === 0) return;
  return (
    <>
      {[...errors].map((error) => (
        <p>{errorMessageMap[error]}</p>
      ))}
    </>
  );
}

export default Error;
