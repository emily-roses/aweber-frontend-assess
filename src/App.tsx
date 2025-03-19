import Button from "./components/Button";
import Error from "./components/Error";
import Input from "./components/Input";
import { isValidPassword, ValidationErrors } from "./utils/validation";

import css from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [errorList, setErrorList] = useState<Set<ValidationErrors>>(new Set());
  const [passwordInput, setPasswordInput] = useState("");
  const [validationInput, setValidationInput] = useState("");

  useEffect(() => {
    setErrorList(new Set());
  }, [passwordInput]);

  useEffect(() => {
    if (passwordInput === validationInput)
      setErrorList((prev) => {
        prev.delete(ValidationErrors.MatchError);
        console.log(prev);
        return new Set(prev);
      });
    else setErrorList((prev) => new Set(prev.add(ValidationErrors.MatchError)));
  }, [passwordInput, validationInput]);

  const handleSubmit = () => {
    const resp = isValidPassword(passwordInput);
    console.log(resp);
    if (resp !== true) setErrorList(resp);
  };

  return (
    <div className={css.base}>
      <Input onChange={setPasswordInput} value={passwordInput} />
      <Input onChange={setValidationInput} value={validationInput} />
      <Button disabled={errorList.size > 0} onSubmit={handleSubmit}>
        Submit
      </Button>
      <Error errors={errorList} />
    </div>
  );
}

export default App;
