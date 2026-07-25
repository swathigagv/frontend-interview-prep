
# Component Challenge: Expense Tracker

Build a responsive, fully interactive expense tracker using semantic HTML, custom CSS, and advanced vanilla JavaScript — no frameworks, no libraries.

This challenge focuses on managing dynamic application state, persisting data across sessions, working with arrays of objects, and keeping the DOM in sync with data changes in real time.

## 💡 How to Approach This Challenge

Try to design and code the logic entirely on your own first! Start with a static layout, then add interactivity in layers: add → display → delete → calculate totals → persist to storage. Use the sample logic below strictly as a reference point if you get stuck or want to compare your architectural choices.

## 🧠 Core Concepts This Project Strengthens

* **State Management in Vanilla JS:** Keeping a single source of truth (an array of transaction objects) and re-rendering the UI from that state instead of manually patching the DOM.
* **Array Methods:** Using `.push()`, `.filter()`, `.reduce()`, and `.map()` to add, remove, calculate, and render transactions.
* **DOM Manipulation & Event Delegation:** Dynamically creating list elements and handling clicks on dynamically-added delete buttons via a single delegated event listener instead of one listener per item.
* **Local Storage Persistence:** Serializing state with `JSON.stringify()` / `JSON.parse()` so data survives a page refresh.
* **Form Handling & Validation:** Preventing default form submission, validating input, and handling edge cases (empty fields, invalid numbers, negative amounts).
* **Conditional Formatting:** Dynamically applying CSS classes based on data (e.g., green for income, red for expense) instead of hardcoding styles.

## 🛠️ Tech Stack

* HTML5 (semantic structure — `<form>`, `<ul>`, `<template>`)
* CSS3 (Flexbox/Grid layout, transitions)
* Vanilla JavaScript (ES6+, array methods, `localStorage`, event delegation)

## 📁 File Structure

```
index.html   → semantic markup (form, list, summary section)
style.css    → layout, color-coded transactions, responsive design
script.js    → state, rendering, storage logic
```

## ▶️ Running It

No build step required — open `index.html` directly in any modern browser, or serve the folder with any static server of your choice.

---

## 🔁 Similar Projects to Practice the Same Advanced JS Concepts

Once you're comfortable with the Expense Tracker, these projects reinforce the exact same core skills (state management, array methods, DOM sync, `localStorage`, event delegation) in a new context:

| Project | What It Reinforces |
|---|---|
| **To-Do List with Filters** (All / Active / Completed) | State array, `.filter()`, event delegation, `localStorage` |
| **Budget Splitter / Bill Divider** | `.reduce()` for calculations, dynamic form inputs |
| **Habit Tracker (Daily Checklist)** | Date-based state objects, `localStorage`, conditional styling |
| **Shopping Cart UI** | Nested state (items with quantity/price), `.reduce()` for totals, quantity increment/decrement logic |
| **Recipe / Book Favorites List** | CRUD operations on an array of objects, search/filter with `.filter()` |
| **Quiz App with Score Tracker** | State machine (current question index), conditional rendering, score calculation |
| **Weather Dashboard (with API)** | Async/await, `fetch()`, rendering API data into DOM, error handling |
| **Movie/Product Search with Live Filter** | `.filter()` + `.map()` combo, debounced input events |
| **Kanban Board (Drag & Drop To-Do)** | Drag-and-drop events, nested state arrays, `localStorage` |
| **Countdown/Pomodoro Timer** | `setInterval`/`clearInterval`, state persistence across pause/resume |

**Suggested order:** To-Do List → Shopping Cart → Habit Tracker → Quiz App → Weather Dashboard (introduces async/API calls) → Kanban Board (introduces drag-and-drop).
