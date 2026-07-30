# 🍽️ React Recipe Book Challenge

## 📖 Overview

Build a modern **Recipe Book** application using **React** while practicing the core concepts of React **without using Hooks**. The goal is to strengthen your understanding of JSX, components, props, event handling, list rendering, and basic forms by creating a clean, static user interface.

---

## 🎯 Challenge Objective

Create a responsive Recipe Book application that displays a collection of recipes. Each recipe should be presented as a reusable card component, and all recipe data should be passed through props.

---

## 📚 Concepts Covered

* JSX
* Functional Components
* Props
* Event Handling
* Rendering Lists with `.map()`
* Forms (without Hooks)

> **Note:** Do **not** use `useState`, `useEffect`, or any other React Hooks for this challenge.

---

## 🧩 Component Structure

```text
App
│
├── Navbar
├── Hero
├── RecipeList
│     ├── RecipeCard
│     ├── RecipeCard
│     └── RecipeCard
├── RecipeForm
└── Footer
```

---

## 📋 Requirements

### Navbar

Include:

* Logo or App Name
* Navigation Links (Home, Recipes, About)

---

### Hero Section

Display:

* Welcome Heading
* Short Description
* Featured Recipe Image

---

### Recipe List

Store recipe information inside an array and render the cards using `.map()`.

Each recipe should include:

* 🍕 Recipe Image
* 🍽️ Recipe Name
* ⏱️ Cooking Time
* ⭐ Difficulty Level
* 👨‍🍳 Chef Name
* 🥗 Ingredients
* 📝 Short Description

---

### Recipe Card

Create a reusable `RecipeCard` component that receives all recipe details through **props**.

Example:

```jsx
<RecipeCard
  image=""
  title="Veg Pasta"
  chef="John Doe"
  time="30 mins"
  difficulty="Easy"
  ingredients={["Pasta", "Tomato", "Cheese"]}
  description="Creamy and delicious pasta."
/>
```

---

## 🖱️ Event Handling

Each recipe card should include a button:

```text
View Recipe
```

When clicked:

```javascript
alert("Opening Recipe...");
```

---

## 📝 Static Form

Create a simple recipe submission form containing:

* Recipe Name
* Chef Name
* Cooking Time
* Difficulty
* Ingredients
* Description
* Submit Button

On form submission:

```javascript
e.preventDefault();
alert("Recipe Submitted!");
```

> No state management is required. This form is only for practicing JSX and event handling.

---

## 💡 Suggested Folder Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── RecipeList.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeForm.jsx
│   └── Footer.jsx
│
├── data
│   └── recipes.js
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Bonus Challenges

Try adding one or more of these after completing the main challenge:

* Responsive layout using CSS Grid or Flexbox
* Hover effects on recipe cards
* Category badges (Breakfast, Lunch, Dinner, Dessert)
* Rating stars
* Beautiful gradients and shadows
* Smooth button hover animations

---

## 🎓 Learning Outcome

After completing this challenge, you will be able to:

* Write clean JSX
* Build reusable React components
* Pass data using props
* Render dynamic content with `.map()`
* Handle user interactions with events
* Create basic forms in React without Hooks
* Organize a React project using a component-based structure

---

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 🔄 Practice More Challenges

Once you've completed this project, try building similar applications by following the **same component-based approach**. Keep the focus on practicing **JSX, Components, Props, Event Handling, List Rendering, and Forms**—without using React Hooks.

You can reuse the same project structure and replace the recipe data with a different dataset.

### 💡 Challenge Ideas

* 🌍 Travel Vlog
* 🎬 Movie Explorer
* 🐶 Pet Adoption Center
* 🍔 Restaurant Menu
* 📚 Book Library
* 🎵 Music Playlist
* 💻 Online Course Catalog
* 🛍️ Product Showcase
* 📰 News Portal
* 📸 Photography Gallery
* 🏋️ Fitness Dashboard
* 🎉 Event Booking
* 👨‍💼 Employee Directory
* 🎓 Student Directory

### 🎯 For Every Challenge, Practice

* Create reusable React components.
* Pass data through **props**.
* Render multiple items using **`.map()`**.
* Handle button clicks using **event handlers**.
* Build a simple **static form** with `onSubmit` and `preventDefault()`.
* Organize your project into a clean and reusable folder structure.

> **Rule:** Avoid using `useState`, `useEffect`, or any other React Hooks. The goal is to build confidence with React fundamentals before moving on to state management.

### 📈 Learning Progression

* ✅ JSX
* ✅ Components
* ✅ Props
* ✅ Events
* ✅ Lists (`.map()`)
* ✅ Forms (without Hooks)

Master these fundamentals first, and you'll have a strong foundation for learning React Hooks, React Router, API integration, Context API, and state management libraries in future projects.

### Happy Coding! 🚀

