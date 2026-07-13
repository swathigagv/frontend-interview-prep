
# Component Challenge: Animated Responsive Welcome Page

Build a responsive, playful, and polished landing/welcome page using only semantic HTML, custom CSS, and optional vanilla JavaScript.

This challenge focuses on orchestrating a multi-step CSS keyframe animation sequence, mastering staggered timing with bounce easing, layering and stacking overlapping elements, and designing a page-load "hero moment" that feels alive — all without a single framework or animation library.

## 🍔 What This Project Does

On load, a burger falls into place piece by piece — bun, lettuce, tomato, cheese, patty, bun — each layer dropping in with its own delay and a springy bounce landing. Once the burger settles, a warm flash pulses beneath it and the headline **"World, welcome to my page"** scales and fades into view. A small "Replay" button lets visitors watch the whole sequence again on demand.

## 💡 How to Approach This Challenge

Try to design and code the animation sequence entirely on your own first! Experiment with your own timing curves, stagger delays, color palette, and typography pairing. Use the source code in this repository strictly as a reference point if you get stuck or want to compare your architectural choices.

## 🧠 Core Concepts This Project Strengthens

Completing this project will heavily reinforce foundational frontend animation and layout techniques that frequently surface in technical developer interviews:

* **CSS Keyframe Animations & Staggering:** Chaining `animation-delay` across multiple sibling elements to create a sequential, physics-like drop, and using `cubic-bezier()` easing to fake a natural bounce-and-settle landing.
* **Layering & Stacking Order:** Using `z-index` alongside negative margins and `transform` to overlap independently animated elements into one cohesive, realistic burger stack.
* **Responsive Sizing with Fluid Units:** Scaling typography, layer heights, and container width fluidly across mobile, tablet, laptop, and large desktop screens using `clamp()` instead of rigid breakpoints.
* **Semantic HTML Foundations:** Structuring the page with a meaningful heading (`<h1>`), descriptive supporting text (`<p>`), and an accessible, keyboard-focusable `<button>` for the replay interaction.
* **Motion & Accessibility:** Respecting `prefers-reduced-motion` with a static fallback state, and keeping visible focus styles on all interactive elements.
* **Progressive Enhancement with Optional JS:** Using a small vanilla JavaScript snippet only to reset animation classes for the replay button — the entire core experience runs on CSS alone.

## 🛠️ Tech Stack

* HTML5 (semantic structure)
* CSS3 (keyframes, `clamp()`, `clip-path`, custom properties)
* Vanilla JavaScript (optional — replay interaction only)
