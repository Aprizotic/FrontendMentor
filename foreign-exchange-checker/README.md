# Frontend Mentor - FX Checker solution

This is a solution to the [FX Checker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/foreign-exchange-currency-converter). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Pre Project Goals](#pre-project-goals)
  - [The Journey](#the-journey)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Your users should be able to:

#### Converter

- Enter an amount to send and see it convert in real time as they type
- Pick the "send" and "receive" currencies from a searchable currency picker
- See the live exchange rate for the active pair (for example, `1 USD = 0.8530 EUR`)
- Swap the send and receive currencies with the swap button
- Favorite the active pair, and log a conversion to their history

#### Currency picker

- Search the full list of available currencies by code or name
- See currencies grouped into "Popular" and "Other currencies", each row showing the flag, code, and name
- See a check against the currency that's currently selected

#### Live markets ticker

- See a ticker of currency pairs, each with its current rate and 24-hour change (up or down)

#### Rate history

- View a line and area chart of the active pair's rate over time
- Switch the chart range between 1D, 1W, 1M, 3M, 1Y, and 5Y
- See the open, last, absolute change, and percentage change for the selected range

#### Compare

- See their send amount converted into a range of other currencies at once, each with its reference rate
- Pin or unpin any comparison row to their favorites

#### Favorites

- See their pinned pairs, each with its live rate and 24-hour change
- Load a pinned pair back into the converter by selecting its row
- Unpin a pair they no longer want to track

#### Conversion log

- See a log of conversions they've made, each showing the relative time, the pair, and the send and receive amounts
- Clear the whole log
- Delete an individual entry

#### UI & accessibility

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app using only their keyboard

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/Aprizotic/FrontendMentor/tree/master/foreign-exchange-checker](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Pre Project Goals

**Thursday 18 June**

I'm going into this project with limited knowledge of **react** and **0** knowledge of **typescript**. This is the first project where I will be writing a proper README and making meaningful commits. By the end of this project I want to as a minimum **improve my knowledge of react and typescript**.

### The Journey

#### Boilerplate Code

Beginning with:

```bash
npm create vite@latest
```

to create the scaffold for the project.

From here I added **CSS variables** for the systems put in place the figma file, and used **SCSS Mixins** for the typography presets.

### Mobile View

#### The First Few Questions

![](./design-files/Project%20Screenshots/1.png)

At this stage I'm not sure how I will add the live market section and how to make the currency picker, since the `<select>` tag has very difficult customisation around it.

At first I found this video on custom select which is not supported :/ [Custom Select](https://www.youtube.com/watch?v=tNBufpGQihY)

After browsing for more solutions I stumbled upon React ARIA: [video](https://www.youtube.com/watch?v=lTPh6NGLAmk), which also introduces more accessible UI elements.

This will be my first time using an external library.

![](./design-files/Project%20Screenshots/2.png)

![](./design-files/Project%20Screenshots/3.png)

This marks the end of my strengths.

I've never made UI such as the segmented control and the graph, I also need to implement data from the API so... back to learning.

I got a good understanding of how to fetch API's from these 3 videos:

- [Promises](https://www.youtube.com/watch?v=DHvZLI7Db8E)
- [Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
- [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)

Putting it in my own words, a promise is an object that holds a future value (like saying I promise to finish this hackathon, I either resolve that promise or not), that is an improvement over using callbacks. Async await is a cleaner syntax of `.this()` and `.catch` and `fetch()` is something that returns a promise.

The next issue would be implementing this with the Frankfurter API, and making it interactive with the UI, in typescript aswell, my head is spinning 😵‍💫.

#### API Implementation

Starting off small, lets make the input work with only USD to EUR.

```tsx
async function getRates() {
  let response = await fetch("https://api.frankfurter.dev/v2/rates");
  let rates = await response.json();
  let target = rates.find(
    (rate) => rate.base === "EUR" && rate.quote === "USD",
  );
  console.log(target.rate);
}

getRates();
```

VScode is throwing an error about types for rate, that is for future me to solve, for now I have the exchange rate and I need to apply it to the user input.

```tsx
let [input, setInput] = useState(0);
let [output, setOutput] = useState(0);

const getRates = async () => {
  let response = await fetch("https://api.frankfurter.dev/v2/rates");
  let rates = await response.json();
  let target = rates.find(
    (rate) => rate.base === "EUR" && rate.quote === "USD",
  );

  return parseFloat(target.rate);
};

const convert = (e) => {
  const value = e.target.value;
  setInput(value);

  getRates().then((rate) => {
    setOutput((value / rate).toFixed(2));
  });
};
```

The convert function is called with `onChange` from the input, and it updates the output state which displays the result and it works 🥹.

But there are a bunch of red squiggly lines under my code, time to learn some typescript.

[TypeScript Course](https://www.youtube.com/watch?v=K01hLNDdqg4)

The two big things I've learnt: **typescript infers alot**, very useful, and type safety makes **code easier to maintain and write**, as it helps find errors during production and helps you understand what guard cases you have to put in place. For example if a variable can be undefined you have to handle it with `if (!variable)`. It also gives you autocomplete as VScode knows what methods something has. Apart from that, all the other features of TS.

The next thing to do is make the conversion dynamic, by taking the selected values and getting the exchange rate from that.

```tsx
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

function CurrencySelector() {
  let [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const getCurrencies = async () => {
      let response = await fetch("https://api.frankfurter.dev/v2/currencies");
      setCurrencies(await response.json());
    };

    getCurrencies();
  }, []);

  return (
    <Select className="converter__select">
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
```

I created a separate component that populates the Select box with the different currencies, but now for the first time ever I'm experiencing performance issues with my website, cool, future me can solve this.

Now I created two states to manage what is in the select.

```tsx
let [curSelectedInp, setCurSelectedInp] = useState("USD");
let [curSelectedOut, setCurSelectedOut] = useState("EUR");
```

and made the `CurrencySelector` update that:

```tsx
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
```

```tsx
<Select
      className="converter__select"
      value={currency}
      onChange={handleChange}
    >
```

It's not typesafe but it works.

![](./design-files/Project%20Screenshots/4.png)

For comparison I'm using googles converter to check results.

![](./design-files/Project%20Screenshots/5.png)

Styled the select button, and from that I realised how bad I am at reading documentation, too used to watching youtube videos to explain everything.

Now I made the search work buy filtering use `.include()` and mapping through the filtered values.

```tsx
const filteredCurrencies = currencies.filter((currency) =>
  currency.iso_code.toLowerCase().includes(search.toLowerCase()),
);
```

and now the converter is broken because of the fact that I'm rendering something static and dynamic and it just doesn't work. At this point I also realised my approach of styling first before function was a bit of a mistake, I should probably do general layout first, function then style later.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/)
- [Sass](https://sass-lang.com/) - CSS Preprocessor
- [React Aria](https://react-aria.adobe.com/)

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

## Author

- Frontend Mentor - [@Aprizotic](https://www.frontendmentor.io/profile/aprizotic)

[The Markdown Guide](https://www.markdownguide.org/) to learn more.
