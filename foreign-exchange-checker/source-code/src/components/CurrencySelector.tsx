import { useState, useEffect } from "react";
import { SearchField } from "./SearchField";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components/Select";
import { Header, ListBoxSection } from "react-aria-components/ListBox";

function CurrencySelector({ currentState, changeState, triggerRef }) {
  let [currencies, setCurrencies] = useState([]);
  let [currency, setCurrency] = useState(currentState);
  let [search, setSearch] = useState("");

  const filteredCurrencies = currencies.filter((currency) =>
    currency.iso_code.toLowerCase().includes(search.toLowerCase()),
  );

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path
            fill="#fff"
            d="M2.988 4.02h6.024c.422 0 .633.515.328.82l-3 3a.48.48 0 0 1-.68 0l-3-3c-.304-.305-.093-.82.328-.82"
          />
        </svg>
      </Button>

      <Popover
        className="converter__select-popover"
        triggerRef={triggerRef}
        offset={4}
        maxHeight={456}
        shouldFlip={false}
      >
        <SearchField
          placeholder="Search currencies..."
          value={search}
          onChange={setSearch}
          autoFocus
        />

        {search === "" ? (
          <ListBox items={filteredCurrencies}>
            {/* <Header className="converter__select-header">
              <span>POPULAR</span> <span>3</span>
            </Header>

            <ListBoxItem className="converter__select-item" id="USD">
              <img
                className="converter__select-img"
                src={`assets/images/flags/us.webp`}
                alt=""
              />
              <span>USD</span>
              <span className="converter__select-item-name">US Dollar</span>
            </ListBoxItem>

            <ListBoxItem className="converter__select-item" id="EUR">
              <img
                className="converter__select-img"
                src={`assets/images/flags/eu.webp`}
                alt=""
              />
              <span>EUR</span>
              <span className="converter__select-item-name">Euro</span>
            </ListBoxItem>

            <ListBoxItem className="converter__select-item" id="GBP">
              <img
                className="converter__select-img"
                src={`assets/images/flags/gb.webp`}
                alt=""
              />
              <span>GBP</span>
              <span className="converter__select-item-name">British Pound</span>
            </ListBoxItem>

            <Header className="converter__select-header">
              <span>OTHER CURRENCIES</span> <span>52</span>
            </Header> */}

            {(item) => (
              <ListBoxItem
                className="converter__select-item"
                id={item.iso_code}
              >
                <img
                  className="converter__select-img"
                  src={`assets/images/flags/${item.iso_code.slice(0, 2).toLowerCase()}.webp`}
                  alt=""
                />
                <span>{item.iso_code}</span>
                <span className="converter__select-item-name">{item.name}</span>
              </ListBoxItem>
            )}
          </ListBox>
        ) : (
          <ListBox items={filteredCurrencies}>
            {(item) => (
              <ListBoxItem
                className="converter__select-item"
                id={item.iso_code}
              >
                <img
                  className="converter__select-img"
                  src={`assets/images/flags/${item.iso_code.slice(0, 2).toLowerCase()}.webp`}
                  alt=""
                />
                <span>{item.iso_code}</span>
                <span className="converter__select-item-name">{item.name}</span>
              </ListBoxItem>
            )}
          </ListBox>
        )}
      </Popover>
    </Select>
  );
}

export default CurrencySelector;
