import Input from "./components/Input";

import css from "./App.module.css";
import { isValidPassword } from "./validation";
import Button from "./components/Button";

function App() {
  const handleSubmit = () => isValidPassword("");

  return (
    <div className={css.base}>
      <Input />
      <Input />
      <Button onSubmit={handleSubmit}>Submit</Button>
    </div>
  );
}

export default App;
