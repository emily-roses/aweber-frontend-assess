import Button from "src/components/Button";
import Error from "src/components/Error";
import Input from "src/components/Input";
import {
  isMatching,
  isValidPassword,
  ValidationErrors,
} from "src/utils/validation";

import css from "./PasswordEntry.module.css";
import { useEffect, useState } from "react";
import Success from "./Success";

function PasswordEntry() {
  const [errorList, setErrorList] = useState<Set<ValidationErrors>>(new Set()); // storing errors in a set ensures no repeats
  const [passwordInput, setPasswordInput] = useState("");
  const [validationInput, setValidationInput] = useState("");
  const [success, setSuccess] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSuccess = (_password: string) => {
    // in production this function would handle submitting the new password to the backend
    setSuccess(true);
  };

  useEffect(() => {
    setErrorList(new Set()); // clear errors when Password input changes
  }, [passwordInput]);

  useEffect(() => {
    // match errors are checked separately from other errors to catch typos before submitting
    if (isMatching(passwordInput, validationInput))
      setErrorList((prev) => {
        prev.delete(ValidationErrors.MatchError);
        return new Set(prev); // for sets (and arrays, objects, etc) useState only updates on a change in reference equality
      });
    else setErrorList((prev) => new Set(prev.add(ValidationErrors.MatchError)));
  }, [passwordInput, validationInput]);

  const handleSubmit = () => {
    // check if password is valid and handle results
    const resp = isValidPassword(passwordInput);
    if (resp !== true) setErrorList(resp);
    else handleSuccess(passwordInput);
  };

  return (
    // possible future improvements could involve refactoring this into using a form
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
