import './App.module.scss';
import Button from "./components/button/Button";
import styles from "./App.module.scss";
import {useState} from "react";

function App() {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Lets make some magic!</h1>

      <div className={styles.wrap}>
        <Button onClick={toggleClass} isActive={active}>1</Button>
      </div>
    </div>
  );
}

export default App;
