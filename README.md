# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

# Mobile Preview

![screenshot](https://github.com/romila2003/Expenses-chart-component/blob/main/mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Expenses-chart-component/blob/main/mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Expenses-chart-component/blob/main/desktop%20preview.PNG)

# Desktop Preview - desktop

![screenshot](https://github.com/romila2003/Expenses-chart-component/blob/main/desktop%20preview%20-%20active.PNG)

### Links

 - Source code: [https://github.com/romila2003/Expenses-chart-component](https://github.com/romila2003/Expenses-chart-component)
 - Live website: [https://romila-expenses-chart-component.netlify.app/](https://romila-expenses-chart-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SAAS (SCSS)
- Flexbox
- Mobile-first workflow

### What I learned

This project allowed me to really test my skills with using JSON data to input it within the chart. I learned a lot of about chart.js regarding its data and styling which took some time to understand. Recreating the design was the most enjoyable part of completing this project. There were some challenges that I faced with trying to complete this however, I gain lots of help from the documentation within chart.js to help me understand more about making changes. 

Javascript - Chart.js: 

```js

const barChart = new Chart(canvasEl, {
    type: "bar",
    data: {
        labels: xAxis,
        datasets: [{
            data: yAxis,   
            backgroundColor: barColours,
            hoverBackgroundColor: hoverBarColors,
        }],
    },

```

### Useful Resources

The main resource throughout my journey of completing this project was [chart.js](https://www.chartjs.org/docs/latest/), particularly the [configuration](https://www.chartjs.org/docs/latest/configuration/) which is utilised to change the way the chart functions/behaves. Since the chart has different versions, the latest being 3.9.1, it was important that the information I found was up to date.

### Continued development

For future developments, I want to learn more JS concepts and use more JS within future projects. I also want to practice more layouts that involve more of HTML and CSS/SCSS. Even though, I know how to use SCSS, I want to make the most use of its features such as having seperate files for good organisational skills.


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)
