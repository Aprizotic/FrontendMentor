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

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/)
- [Sass](https://sass-lang.com/) - CSS Preprocessor

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
