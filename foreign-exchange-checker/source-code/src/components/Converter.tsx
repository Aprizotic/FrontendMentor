import { useState, useRef } from "react";
import CurrencySelector from "./CurrencySelector";

function Converter() {
  type Rate = {
    base: string;
    quote: string;
  };

  let [input, setInput] = useState(0);
  let [output, setOutput] = useState("0");
  let [curSelectedInp, setCurSelectedInp] = useState("USD");
  let [curSelectedOut, setCurSelectedOut] = useState("EUR");
  let triggerRef = useRef(null);

  const getRates = async () => {
    let response = await fetch(
      `https://api.frankfurter.dev/v2/rate/${curSelectedInp}/${curSelectedOut}`,
    );
    console.log(curSelectedInp, curSelectedOut);
    let pair = await response.json();

    return parseFloat(pair.rate);
  };

  const convert = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value);
    setInput(value);

    getRates().then((rate: number) => {
      setOutput((value * rate).toFixed(2));
    });
  };

  return (
    <section className="converter">
      <div className="converter__main">
        <div ref={triggerRef} className="converter__box">
          <h2 className="converter__subheading">SEND</h2>

          <div className="converter__options">
            <input
              className="converter__input"
              type="text"
              placeholder="0"
              onChange={convert}
            />

            <CurrencySelector
              currentState={curSelectedInp}
              changeState={setCurSelectedInp}
              triggerRef={triggerRef}
            />
          </div>
        </div>

        <button className="converter__switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m11 6 4-4 4 4m-4-4v16m-6-4-4 4-4-4m4 4V2"
            />
          </svg>
        </button>

        <div className="converter__box">
          <h2 className="converter__subheading">RECEIVE</h2>

          <div className="converter__options">
            <span className="converter__output">{output}</span>

            <CurrencySelector
              currentState={curSelectedOut}
              changeState={setCurSelectedOut}
              triggerRef={triggerRef}
            />
          </div>
        </div>
      </div>

      <div className="converter__footer">
        <span className="converter__rate">1 USD = 0.8530 EUR</span>

        <div className="converter__controls">
          <button className="converter__favorite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M7.332 2.41c.281-.562 1.078-.538 1.336 0l1.547 3.118 3.422.492c.61.094.843.844.398 1.29l-2.46 2.413.585 3.399c.094.61-.562 1.078-1.101.797l-3.047-1.617-3.07 1.617c-.54.28-1.196-.188-1.102-.797l.586-3.399L1.965 7.31c-.446-.445-.211-1.195.398-1.289l3.446-.492z"
              />
            </svg>
            FAVORITED
          </button>
          <button className="converter__log">LOG CONVERSION</button>
        </div>
      </div>
    </section>
  );
}

export default Converter;
