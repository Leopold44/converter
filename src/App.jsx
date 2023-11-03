import "./App.css";
import { useState } from "react";
import Devise from "./assets/components/devise";

function App() {
  const [devise1, setDevise1] = useState(4.184818);
  const [devise2, setDevise2] = useState(4.184818);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const toConvertWithFirst = (props) => {
    setValue1(props.target.value);
    setValue2((props.target.value / devise1) * devise2);
  };
  const toConvertWithLast = (props) => {
    setValue2(props.target.value);
    setValue1((props.target.value / devise2) * devise1);
  };
  const toConvertWithFirstSelect = (props) => {
    setDevise1(props.target.value);
    setValue2((value1 / props.target.value) * devise2);
  };
  const toConvertWithLastSelect = (props) => {
    setDevise2(props.target.value);
    setValue1((value2 / props.target.value) * devise1);
  };

  return (
    <div className="convert">
      <h1>💰 Converter 💰</h1>
      <Devise
        nameInput="firstInput"
        valueInput={value1}
        fonctionInput={toConvertWithFirst}
        nameSelect="firstSelect"
        fonctionSelect={toConvertWithFirstSelect}
      />
      <Devise
        nameInput="secondInput"
        valueInput={value2}
        fonctionInput={toConvertWithLast}
        nameSelect="SecondSelect"
        fonctionSelect={toConvertWithLastSelect}
      />
    </div>
  );
}

export default App;
