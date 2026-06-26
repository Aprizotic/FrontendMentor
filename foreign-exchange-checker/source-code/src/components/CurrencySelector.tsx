import { useState, useEffect } from "react";

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components/Select";

function CurrencySelector({ changeState }) {
  let [currencies, setCurrencies] = useState([]);
  let [currency, setCurrency] = useState("");

  useEffect(() => {
    const getCurrencies = async () => {
      let response = await fetch("https://api.frankfurter.dev/v2/currencies");
      setCurrencies(await response.json());
    };

    getCurrencies();
  }, []);

  const handleChange = (value: string) => {
    setCurrency(value);
    changeState(value);
  };

  return (
    <Select
      className="converter__select"
      value={currency}
      onChange={handleChange}
    >
      <Button className="converter__select-button">
        <SelectValue />
      </Button>

      <Popover>
        <ListBox>
          {currencies.map((currency) => (
            <ListBoxItem id={currency.iso_code}>
              <img
                src={`./assets/images/flags/${currency.iso_code.slice(0, 2)}.webp`}
                alt=""
              />
              {currency.iso_code}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
}

export default CurrencySelector;
