# Chai Stall Bill Counter Page

Final project for **HTML, CSS & JavaScript Basics**.

## Live link

https://exelynt-learning-platform.github.io/html-css-javascript-final-128551-amar/

## What the page does

A quick bill counter for a roadside chai stall:

- Shows the current bill in rupees as a big number, starting at ₹0.
- Three buttons add an item to the bill: **Chai (₹15)**, **Samosa (₹20)** and **Vada Pav (₹25)**.
- **Reset** sets the bill back to ₹0 for the next customer.
- When the bill reaches **₹200 or more**, JavaScript adds the `big-order` CSS class, which turns the bill box orange and shows a **"Big order!"** message. Reset removes the class again.

## Files

- `index.html` – page structure: heading, intro line, bill display, buttons and a "How to use" list.
- `style.css` – colours, padding, borders and a flexbox row for the buttons, plus the `.big-order` highlight.
- `script.js` – uses `querySelector` and `addEventListener` to update the bill and toggle the highlight.

## What the screen looks like after a few clicks

After clicking Chai twice, Samosa once and Vada Pav once, the bill box in the middle of the cream-coloured card shows **₹75** in large brown text on a light peach background. The green item buttons and the white Reset button with a red border sit in one row underneath, and the "How to use" list is below them. Keep adding items until the bill reaches ₹200 or more: the bill box turns bright orange, the number turns white and **"Big order!"** appears under it. Clicking Reset brings it back to ₹0 and the normal peach colour.
