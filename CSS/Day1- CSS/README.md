# Day4 – Day1 CSS Basics

Welcome to Day 1! This guide introduces the core fundamentals of styling web pages with CSS, covering how elements are targeted, how styles conflict, and how elements are structured visually on the screen.

---

## 1. Selectors

### Definition
Patterns used to target and choose specific HTML elements so you can style them.

> **Real-Time Example:** Like pointing to a crowd and saying, "Everyone wearing a blue shirt, step forward."

---

## 2. Specificity

### Definition
The rule engine browsers use to decide which CSS style wins when an element matches multiple conflicting rules.

> **Real-Time Example:** A local town rumor tells you the store closes at 5:00 PM, but the official store sign on the door says it closes at 6:00 PM—the specific sign on the door wins.

---

## 3. Colors

### Definition
Properties used to apply hues to text, backgrounds, and borders using color names, Hex codes, RGB, or HSL values.

> **Real-Time Example:** Like picking out a specific shade of paint swatch at a hardware store to repaint your bedroom walls.

---

## 4. Units

### Definition
Measurement scales used to define sizes, spacing, margins, and widths. These are divided into **fixed units** (like `px`) and **relative units** (like `rem`, `em`, and `%`).

> **Real-Time Example:** Fixed units are like a metal ruler (the length never changes); relative units are like saying "make this shirt two sizes larger than my current one."

---

## 5. Fonts

### Definition
Properties that control the typeface design, sizing, thickness (`font-weight`), and style of your webpage text.

> **Real-Time Example:** Like choosing between a formal cursive font on a wedding invitation versus a clean, readable block font on a highway traffic sign.

---

## 6. Backgrounds

### Definition
Properties used to set solid colors, linear/radial gradients, or full images behind the text and content of an HTML element.

> **Real-Time Example:** Like choosing whether to paint your living room wall a solid matte gray or cover it in a patterned wallpaper.

---

## 📑 Frequently Asked Questions & Interview Prep

### Specificity (The Hierarchy)
* **How does the browser calculate CSS Specificity?**  
  Browsers calculate specificity using a weight/scoring system based on the type of selector used. If rules conflict, the highest score wins.
  
  ```text
  Inline Styles  >  IDs (#id)  >  Classes/Attributes (.class)  >  Elements/Tags (div)
