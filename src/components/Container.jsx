import { useState } from "react";
import "../styles/main.css";

function Container() {
  const [display, setDisplay] = useState("");
  const [keys, setKeys] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "*",
    "-",
    "Enter",
    "Backspace",
  ]);

  const handleKeyup = (e) => {
    let find = keys.some((keys) => {
      return keys === e.key;
    });
    console.log(e);
    if (find) {
      if (e.key === "Enter") {
        try {
          setDisplay(eval(display));
        } catch (error) {
          setDisplay("Error");
        }
      } else if (e.key === "Backspace") {
        setDisplay(display.slice(0, display.length - 1));
      } else {
        setDisplay(display + e.key);
      }
    }
  };
  const handleClick = (e) => {
    if (e.target.value === "=") {
      try {
        setDisplay(eval(display));
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + e.target.value);
    }
  };
  const handleDisplayCleaner = () => {
    setDisplay("");
  };
  return (
    <div id="container" className="py-5 bg-dark">
      <h1>calculator</h1>
      <div
        id="calc"
        className="row py-5 border border-3 border-primary ps-4 mt-3 mb-3 "
      >
        <input
          id="display"
          className="form-control col-12 mb-4"
          placeholder="0"
          value={display}
          onKeyUp={handleKeyup}
        />
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"7"}
        >
          7
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"8"}
        >
          8
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"9"}
        >
          9
        </button>
        <button
          onClick={handleClick}
          className="btn btn-light col-3 p-2 m-2"
          value={"*"}
        >
          x
        </button>

        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"4"}
        >
          4
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"5"}
        >
          5
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"6"}
        >
          6
        </button>
        <button
          onClick={handleClick}
          className="btn btn-light col-3 p-2 m-2"
          value={"/"}
        >
          /
        </button>

        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"1"}
        >
          1
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"2"}
        >
          2
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"3"}
        >
          3
        </button>
        <button
          onClick={handleClick}
          className="btn btn-light col-3 p-2 m-2"
          value={"-"}
        >
          -
        </button>

        <button
          onClick={handleDisplayCleaner}
          className="btn btn-danger col-2 p-2 m-2"
          value={"c"}
        >
          C
        </button>
        <button
          onClick={handleClick}
          className="btn btn-primary col-2 p-2 m-2"
          value={"0"}
        >
          0
        </button>
        <button
          onClick={handleClick}
          className="btn btn-light col-2 p-2 m-2"
          value={"="}
        >
          =
        </button>
        <button
          onClick={handleClick}
          className="btn btn-light col-3 p-2 m-2"
          value={"+"}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Container;
