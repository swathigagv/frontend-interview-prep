# 🚀 CSS Interview Questions & Answers (2026 Edition)

A curated collection of **20 essential CSS interview questions** ranging from core fundamentals to modern layout techniques.

---

## 📌 Table of Contents

- Core Fundamentals & Box Model
- Positioning & Stacking Context
- Layouts: Flexbox & Grid
- Modern CSS & Performance (2026)

---

# 1. Core Fundamentals & Box Model

## Q1. What is the CSS Box Model, and how do `content-box` and `border-box` differ?

Every HTML element is rendered as a rectangular box. The box model consists of four layers:

- Content
- Padding
- Border
- Margin

### `box-sizing: content-box` (Default)

The defined width and height apply **only to the content**. Adding padding or borders increases the total element size.

### `box-sizing: border-box` (Recommended)

The defined width and height include **content, padding, and border**, making layouts more predictable.

```css
/* Recommended Global Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

## Q2. Explain CSS Specificity and how it is calculated.

Specificity determines which CSS rule is applied when multiple rules target the same element.

| Selector Type | Specificity |
|--------------|------------|
| Inline styles | 1,0,0,0 |
| ID Selector | 0,1,0,0 |
| Class, Attribute, Pseudo-class | 0,0,1,0 |
| Element & Pseudo-element | 0,0,0,1 |

> **Note:** `*`, `>`, `+`, `~` have zero specificity.

Avoid using `!important` unless absolutely necessary.

---

## Q3. What is Margin Collapsing?

Margin collapsing occurs when vertical margins combine into a single margin instead of adding together.

It happens between:

- Adjacent block elements
- Empty block elements
- Parent and first/last child (without border, padding, or content)

---

## Q4. Difference between `display: none` and `visibility: hidden`

| Property | Occupies Space | Layout Reflow | Visible |
|----------|---------------|--------------|---------|
| `display: none` | ❌ No | ✅ Yes | ❌ No |
| `visibility: hidden` | ✅ Yes | ❌ No | ❌ No |

---

## Q5. Difference between `block`, `inline`, and `inline-block`

### Block

- Starts on a new line
- Takes full width
- Supports width & height

Examples:

```html
<div></div>
<p></p>
```

### Inline

- Flows with text
- Ignores width & height

Examples:

```html
<span></span>
<a></a>
```

### Inline-block

- Flows inline
- Supports width & height

---

# 2. Positioning & Stacking Context

## Q6. Explain different values of the `position` property.

### `static`

Default positioning.

### `relative`

Moves relative to its original position.

### `absolute`

Removed from normal flow and positioned relative to the nearest positioned ancestor.

### `fixed`

Positioned relative to the viewport.

### `sticky`

Acts as relative until a threshold, then sticks like fixed.

---

## Q7. What creates a Stacking Context?

`z-index` controls stacking order but works only on positioned elements or flex/grid children.

New stacking contexts are created by:

- Positioned element with z-index
- `opacity < 1`
- `transform`
- `filter`
- `perspective`
- Container isolation

---

## Q8. What is `pointer-events`?

Controls whether an element responds to mouse events.

```css
pointer-events: auto;
pointer-events: none;
```

Common uses:

- Decorative overlays
- Disabled buttons
- Watermarks

---

# 3. Layouts: Flexbox & Grid

## Q9. Difference between Flexbox and Grid

### Flexbox

- One-dimensional
- Row OR Column
- Great for components

### Grid

- Two-dimensional
- Rows AND Columns
- Great for page layouts

---

## Q10. Center a div horizontally and vertically

### Flexbox

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Grid

```css
.parent {
  display: grid;
  place-items: center;
}
```

---

## Q11. Explain the `flex` shorthand property.

```css
.item {
  flex: 0 1 auto;
}
```

Represents:

- `flex-grow`
- `flex-shrink`
- `flex-basis`

---

# 4. Modern CSS & Performance (2026)

## Q12. What is the `:has()` pseudo-class?

Acts as a parent selector.

```css
.card:has(.card-image) {
  padding: 0;
}

label:has(+ input:focus) {
  color: blue;
}
```

---

## Q13. CSS Variables vs Sass Variables

```css
:root {
  --main-color: #3498db;
}

.button {
  color: var(--main-color);
}
```

| CSS Variables | Sass Variables |
|--------------|---------------|
| Runtime | Compile Time |
| JS Accessible | No |
| Supports Cascade | No |

---

## Q14. Difference between `rem` and `em`

### em

Relative to the parent/current element font size.

### rem

Relative to the root (`html`) font size.

---

## Q15. Container Queries vs Media Queries

### Media Query

Responsive based on viewport.

### Container Query

Responsive based on parent container size.

```css
.sidebar,
.main-content {
  container-type: inline-size;
}

@container (max-width: 400px) {
  .responsive-card {
    flex-direction: column;
  }
}
```

---

## Q16. Text Overflow with Ellipsis

```css
.single-line-truncate {
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

---

## Q17. What is Critical CSS?

Critical CSS is the minimum CSS needed to render above-the-fold content quickly.

Benefits:

- Faster First Contentful Paint (FCP)
- Better performance
- Improved Core Web Vitals

---

## Q18. CSS Reset vs Normalize

### CSS Reset

Removes all browser default styles.

### Normalize.css

Keeps useful defaults while making rendering consistent across browsers.

---

## Q19. CSS Transitions vs CSS Animations

### Transition

- Two states
- Needs a trigger (`:hover`, class change)

### Animation

- Multiple steps
- Uses `@keyframes`
- Can run automatically

---

## Q20. Why avoid `!important`?

Using `!important` overrides normal CSS specificity and makes maintenance difficult.

Avoid it because it:

- Breaks the cascade
- Makes debugging harder
- Increases technical debt

---

# ⭐ If this repository helped you

Give it a **Star ⭐** and feel free to contribute by adding more interview questions or improving the explanations.

Happy Learning! 🚀
