# Day 1 – HTML Basics

Welcome to Day 1! This guide covers the essential building blocks of web development, from document structure to semantic layouts, media, and forms.

---

## 1. HTML Document Structure

### Definition
The basic skeleton of every HTML page that tells the browser how to interpret the document and organizes all webpage content.

### Why It's Used
Provides a standard structure so browsers can correctly render the webpage.

> **Real-Time Example:** Like the unopened box of a board game—the box (`<html>`) contains everything, the instruction manual (`<head>`) provides information about the game, and the board (`<body>`) is where the game is actually played.

### Important Tags
* `<!DOCTYPE html>` — Tells the browser the document is HTML5.
* `<html>` — The root element enclosing all page content.
* `<head>` — Contains metadata, titles, and links to stylesheets.
* `<body>` — Contains the visible content of the webpage.

---

## 2. Semantic Elements

### Definition
Semantic elements are HTML tags that clearly describe the purpose of the content they contain, making webpages easier for developers, browsers, and screen readers to understand.

### Why It's Used
* **Improves SEO:** Helps search engines understand your content layout.
* **Improves Accessibility:** Screen readers can navigate the page effortlessly.
* **Maintainability:** Makes your codebase much easier to read and update.

### Examples
`<header>` | `<nav>` | `<main>` | `<section>` | `<article>` | `<aside>` | `<footer>`

---

## 3. Headings

### Why It's Used
* Creates a logical content hierarchy (`<h1>` down to `<h6>`).
* Improves accessibility for screen readers.
* Helps search engines understand page structure and priority.

> 💡 **Interview Tip:** Only one `<h1>` is recommended per page in most standard SEO practices.

---

## 4. Paragraphs

### Real-Time Example
Like paragraphs in a newspaper article, where each paragraph (`<p>`) isolates and explains one specific idea before moving on to the next.

---

## 5. Lists

### Definition
Lists are used to organize related items in either a numbered order (`<ol>`) or an unordered bullet format (`<ul>`). Individual items are placed inside `<li>` elements.

### Important Tags
* `<ul>` — Unordered List (bullets)
* `<ol>` — Ordered List (numbers)
* `<li>` — List Item

> 💡 **Interview Tip:** Interviewers often ask about the semantic nesting rules of `<li>` (it must always be a direct child of `<ul>` or `<ol>`).

---

## 6. Links

### Definition
Links are created using the `<a>` (anchor) tag to navigate users to another webpage, a different section of the same page, an email address, or a downloadable resource.

### Important Attributes
* `href` — Specifies the URL of the page the link goes to.
* `target` — Controls where to open the link (e.g., `target="_blank"` opens in a new tab).
* `download` — Prompts the browser to download the linked file instead of navigating to it.

---

## 7. Images

### Definition
The `<img>` tag is used to display images on a webpage using the `src` attribute. 

### Important Attributes
* `src` — Path to the image file.
* `alt` — Alternative text for accessibility and fallback if the image fails to load.
* `width` & `height` — Sets the display dimensions.
* `loading` — Use `loading="lazy"` to optimize page performance by delaying off-screen image loading.

---

## 8. Tables

### Definition
Tables organize structured data into rows and columns using specialized table-related tags.

### Important Tags
| Tag | Description |
| :--- | :--- |
| `<table>` | The main container for the table data. |
| `<thead>` | Groups the header content. |
| `<tbody>` | Groups the main body content. |
| `<tfoot>` | Groups the summary or footer content. |
| `<tr>` | Defines a table row. |
| `<th>` | Defines a header cell (bold and centered by default). |
| `<td>` | Defines a standard data cell. |

> ⚠️ **Note:** Many beginners forget to use `<th>` for their header text, which hurts accessibility!

---

## 9. Forms

### Definition
Forms collect user input through various controls such as text fields, radio buttons, checkboxes, dropdowns, and buttons before submitting that data to a server.

### Common Use Cases
* User registration & logins
* Contact forms
* E-commerce checkout pages
* Surveys & feedback collectors

### Important Tags
`<form>` | `<input>` | `<label>` | `<select>` | `<option>` | `<textarea>` | `<button>`

---

## 📑 Frequently Asked Questions & Interview Prep

### HTML Document Structure
* **What is `<!DOCTYPE html>`?**  
  It is an instruction to the web browser about what version of HTML the page is written in. It ensures the browser renders the page in "standards mode" rather than "quirks mode".
* **What is the difference between `<head>` and `<body>`?**  
  The `<head>` contains machine-readable metadata (like titles, character sets, and scripts) that isn't directly visible to users. The `<body>` contains all the visual, interactive content users see.
* **Can an HTML page have multiple `<body>` tags?**  
  No. A valid HTML document must contain exactly one `<body>` element.

### Semantic Elements
* **What are semantic tags?**  
  Tags that explicitly communicate meaning to both the browser and the developer (e.g., `<article>` indicates a self-contained piece of writing).
* **Difference between `<div>` and `<section>`?**  
  A `<div>` is a generic, non-semantic container used purely for styling or layout. A `<section>` is a semantic element used to group thematically related content together.
* **Why are semantic elements important?**  
  They directly improve SEO rankings, make code significantly easier to maintain, and allow screen readers to parse layouts accurately for visually impaired users.

### Forms
* **Difference between GET and POST?**  
  `GET` appends form data directly into the URL parameters (visible and size-limited, ideal for searches). `POST` sends data inside the HTTP request body (hidden from URL, secure for passwords, and has no size limits).
* **What is the purpose of the `<label>` tag?**  
  It provides a text description for a form control. Clicking a label also focuses its associated input field, which drastically improves accessibility.
* **Difference between `id` and `name`?**  
  The `id` is a unique identifier used to target elements in CSS or JavaScript. The `name` attribute identifies the form data field when it is sent to the backend server.
* **Why is the `required` attribute used?**  
  It prevents form submission if the input field is left empty, serving as an immediate client-side validation check.
