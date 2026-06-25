
# HTML Interview Questions and Answers

## 1. What are HTML tags?

HTML tags are the building blocks of web pages. They define the structure and content of an HTML document, such as headings, paragraphs, links, images, and more. Most HTML tags consist of an opening tag and a closing tag.

**Example:**

```html
<p>This is a paragraph.</p>
```

---

## 2. What is the difference between `<head>` and `<body>`?

The `<head>` element contains metadata about the document, such as the page title, stylesheets, scripts, and character encoding. This content is not displayed on the webpage.

The `<body>` element contains all the visible content displayed to users, including text, images, videos, forms, and other interactive elements.

---

## 3. How can you use CSS in HTML?

CSS can be added to HTML in three ways:

### Inline CSS

```html
<p style="color: blue;">Hello World</p>
```

### Internal CSS

```html
<style>
  p {
    color: blue;
  }
</style>
```

### External CSS

```html
<link rel="stylesheet" href="styles.css">
```

External CSS is the preferred approach because it improves maintainability and reusability.

---

## 4. How do you use comments in HTML and why?

HTML comments are used to add notes or explanations within the code. Browsers ignore comments when rendering the page.

**Syntax:**

```html
<!-- This is a comment -->
```

Comments are useful for documentation and debugging purposes.

---

## 5. What are the ways to add links in HTML?

The `<a>` element is used to create hyperlinks.

**Example:**

```html
<a href="https://example.com">Visit Website</a>
```

### Types of URLs

* Absolute URL: Full web address.
* Relative URL: Path within the same website.

### Common Target Values

* `_self` – Opens in the same tab.
* `_blank` – Opens in a new tab.
* `_parent` – Opens in the parent frame.
* `_top` – Opens in the full browser window.

---

## 6. How do you set the document title and metadata?

The page title is defined using the `<title>` tag inside the `<head>` section.

```html
<title>My Website</title>
```

Metadata is added using `<meta>` tags.

```html
<meta charset="UTF-8">
<meta name="description" content="HTML Interview Questions">
```

---

## 7. How do you add a dropdown list to a form?

A dropdown list is created using the `<select>` element along with `<option>` elements.

```html
<select name="colors">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
```

---

## 8. What is Semantic HTML?

Semantic HTML uses meaningful tags that describe the purpose of the content.

### Common Semantic Elements

* `<header>`
* `<footer>`
* `<article>`
* `<section>`
* `<nav>`

Benefits include improved accessibility, readability, and SEO.

---

## 9. What is an iframe?

An `<iframe>` is used to embed another webpage within the current webpage.

```html
<iframe src="https://example.com" width="400" height="300"></iframe>
```

Common uses include embedding videos, maps, and external content.

---

## 10. What is the purpose of the `<noscript>` tag?

The `<noscript>` tag provides alternative content when JavaScript is disabled or unsupported.

```html
<noscript>
  Please enable JavaScript to use this website.
</noscript>
```

---

## 11. What are some common input types introduced in HTML5?

HTML5 introduced several new input types:

* email
* date
* url
* color
* range
* number
* tel

These improve user experience and provide built-in validation.

---

## 12. What is the purpose of `<section>`, `<article>`, `<nav>`, and `<aside>`?

* `<section>` – Groups related content.
* `<article>` – Represents self-contained content.
* `<nav>` – Contains navigation links.
* `<aside>` – Contains supplementary content such as sidebars.

---

## 13. What is the History API in HTML5?

The History API allows developers to manipulate browser history without reloading the page.

Common methods:

```javascript
history.pushState();
history.replaceState();
```

It is widely used in Single Page Applications (SPAs).

---

## 14. How do you serve high-resolution images for Retina displays?

Use the `srcset` attribute to provide multiple image resolutions.

```html
<img
  src="image.jpg"
  srcset="image.jpg 1x, image@2x.jpg 2x"
  alt="Example">
```

The browser automatically selects the most appropriate image.

---

## 15. What are some SEO best practices in HTML?

* Use semantic HTML elements.
* Add unique title tags.
* Write meaningful meta descriptions.
* Use proper heading hierarchy (H1–H6).
* Add descriptive alt text for images.
* Use clean and readable URLs.

---

## 16. What is the difference between `contenteditable`, `spellcheck`, and `draggable`?

| Attribute       | Purpose                                |
| --------------- | -------------------------------------- |
| contenteditable | Allows users to edit content directly. |
| spellcheck      | Enables or disables spell checking.    |
| draggable       | Enables drag-and-drop functionality.   |

---

## 17. What is Geolocation in HTML5?

The Geolocation API allows websites to access a user's location with permission.

### Common Use Cases

* Maps
* Navigation
* Weather Apps
* Delivery Tracking

The browser always requests user permission before sharing location data.

---

## 18. How do you use `localStorage` and `sessionStorage`?

Both are part of the Web Storage API.

| Feature            | localStorage | sessionStorage   |
| ------------------ | ------------ | ---------------- |
| Persistence        | Permanent    | Until tab closes |
| Shared Across Tabs | Yes          | No               |

### Example

```javascript
localStorage.setItem("user", "John");
localStorage.getItem("user");

sessionStorage.setItem("theme", "dark");
```

---

## 19. What is the `<figure>` tag and how is it used with `<figcaption>`?

The `<figure>` element groups self-contained content such as images, charts, or diagrams.

The `<figcaption>` element provides a caption.

```html
<figure>
  <img src="mountain.jpg" alt="Mountain">
  <figcaption>Beautiful Mountain View</figcaption>
</figure>
```

Benefits include better semantics, accessibility, and SEO.

---

## 20. What are Web Workers and when would you use them?

Web Workers allow JavaScript to run in background threads without blocking the main UI thread.

### Common Use Cases

* Data processing
* Large calculations
* Image processing
* Real-time analytics

**Note:** Web Workers cannot directly access the DOM.

---

## 21. How do you use the `<progress>` and `<meter>` elements?

### `<progress>`

Represents the completion status of a task.

```html
<progress value="70" max="100"></progress>
```

### `<meter>`

Represents a value within a known range.

```html
<meter value="65" min="0" max="100"></meter>
```

### Difference

| `<progress>`                  | `<meter>`                    |
| ----------------------------- | ---------------------------- |
| Shows task completion         | Shows a value within a range |
| Example: File upload progress | Example: Battery level       |

### Key Takeaway

* Use `<progress>` for ongoing tasks.
* Use `<meter>` for measurements such as battery level, scores, and disk usage.
