import Button from "src/components/Button";
import Error from "src/components/Error";
import Input from "src/components/Input";
import { isValidPassword, ValidationErrors } from "src/utils/validation";

import css from "./PasswordEntry.module.css";
import { useEffect, useState } from "react";
import Success from "./Success";

function PasswordEntry() {
  const [errorList, setErrorList] = useState<Set<ValidationErrors>>(new Set());
  const [passwordInput, setPasswordInput] = useState("");
  const [validationInput, setValidationInput] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrorList(new Set());
  }, [passwordInput]);

  useEffect(() => {
    if (passwordInput === validationInput)
      setErrorList((prev) => {
        prev.delete(ValidationErrors.MatchError);
        return new Set(prev);
      });
    else setErrorList((prev) => new Set(prev.add(ValidationErrors.MatchError)));
  }, [passwordInput, validationInput]);

  const handleSubmit = () => {
    const resp = isValidPassword(passwordInput);
    if (resp !== true) setErrorList(resp);
    else setSuccess(true);
  };

  return (
    <div className={css.base}>
      {success ? (
        <Success />
      ) : (
        <>
          <Input
            label="Password"
            type="password"
            onChange={setPasswordInput}
            value={passwordInput}
          />
          <Input
            label="Confirm Password"
            type="password"
            onChange={setValidationInput}
            value={validationInput}
          />
          <Button disabled={errorList.size > 0} onSubmit={handleSubmit}>
            Submit
          </Button>
          <Error errors={errorList} />
        </>
      )}
    </div>
  );
}

export default PasswordEntry;
