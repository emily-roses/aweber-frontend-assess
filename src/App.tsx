import Button from "./components/Button";
import Error from "./components/Error";
import Input from "./components/Input";
import { isValidPassword, ValidationErrors } from "./utils/validation";

import css from "./App.module.css";
import { useState } from "react";

function App() {
  const [errorList, setErrorList] = useState<Set<ValidationErrors>>(new Set());
  const handleSubmit = () => isValidPassword("");

  return (
    <div className={css.base}>
      <Input />
      <Input />
      <Button disabled={errorList.size > 0} onSubmit={handleSubmit}>
        Submit
      </Button>
      <Error errors={errorList} />
    </div>
  );
}

export default App;
