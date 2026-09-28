# 🚀 React & JavaScript Mastery Guide

A comprehensive, quick-reference guide covering React, Core JavaScript, State Management (Zustand), and Build Tooling (Vite). Designed for fast study, interview preparation, and day-to-day reference.

---

## 📌 Table of Contents
1. [React Fundamentals](#-react-fundamentals)
2. [React Hooks](#-react-hooks)
3. [Data Flow & Patterns](#-data-flow--patterns)
4. [JavaScript Core Mechanics](#-javascript-core-mechanics)
5. [Async JS & Event Loop](#-async-js--event-loop)
6. [JS Functions & Objects](#-js-functions--objects)
7. [Array Methods & Optimization](#-array-methods--optimization)
8. [Zustand State Management](#-zustand-state-management)
9. [Vite Build Tooling](#-vite-build-tooling)

---

## ⚛️ React Fundamentals

* **What is React?**  
  An open-source JavaScript library for building component-based, interactive user interfaces (primarily single-page applications).
* **Virtual DOM:**  
  A lightweight, in-memory representation of the real DOM. React compares the new Virtual DOM with a snapshot of the old one using a "diffing algorithm" and updates *only* the modified elements in the real DOM, optimizing performance.
* **JSX (JavaScript XML):**  
  A syntax extension for JavaScript that lets you write HTML-like elements directly inside JavaScript code. It gets compiled into standard `React.createElement()` function calls.
* **Components:**  
  The independent, reusable building blocks of a React application that manage their own rendering and logic (e.g., Header, Button, Sidebar).
* **Props vs. State:**
  * **Props (Properties):** Immutable read-only inputs passed from parent components down to child components.
  * **State:** Mutable local data managed directly *within* a component that triggers a re-render when changed.

---

## 🪝 React Hooks

* **Functional Components:**  
  JavaScript functions that accept props and return JSX. They use Hooks to manage state and side effects, replacing older class-based components.
* **`useState`:**  
  Adds local component state. Returns an array with the current state value and a function to update it.
* **`useEffect`:**  
  Handles side effects (data fetching, subscriptions, DOM manipulation). Accepts a function and a dependency array controlling when it runs (on mount, update, or unmount).
* **`useRef`:**  
  Returns a persistent, mutable reference object that doesn't trigger a re-render when changed. Typically used to directly access DOM nodes or store values across renders.
* **`useMemo`:**  
  Memoizes the *result of a calculation* to prevent expensive recalculations on every render unless specified dependencies change.
* **`useCallback`:**  
  Memoizes a *function definition* between renders to prevent unnecessary re-renders of child components that receive the function as a prop.
* **Custom Hooks:**  
  User-defined JavaScript functions prefixed with `use` that encapsulate and reuse stateful logic across multiple components.

---

## 🔄 Data Flow & Patterns

* **Controlled vs. Uncontrolled Components:**
  * **Controlled:** Form inputs whose values are managed directly by React state.
  * **Uncontrolled:** Form inputs whose values are handled natively by the DOM itself (accessed via `useRef`).
* **Conditional Rendering:**  
  Displaying different JSX or components based on specific conditions (e.g., using ternary operators `condition ? <A/> : <B/>` or `&&` short-circuiting).
* **Lists and Keys:**  
  Rendering arrays of elements using `.map()`. Unique `key` props are required on each item so React can track, add, update, or remove elements efficiently.
* **Component Lifecycle:**  
  1. **Mounting:** Inserting into the DOM (`useEffect` with `[]` dependency array).
  2. **Updating:** Re-rendering due to state/prop changes (`useEffect` with `[dep]`).
  3. **Unmounting:** Removing from the DOM (cleanup function returned inside `useEffect`).
* **Lifting State Up:**  
  Moving shared state to the closest common parent component so multiple sibling components can access and synchronize that state.
* **Prop Drilling:**  
  Passing props down through multiple layers of nested components that do not actually need the data, just to reach a deeply nested child component.
* **Context API:**  
  Built-in React feature to manage global state and bypass prop drilling by passing data directly through a component tree using a `Provider` and `useContext`.
* **React Router:**  
  The standard routing library for React applications that enables navigation between different components without full page reloads.

---

## 💛 JavaScript Core Mechanics

* **`var` vs. `let` vs. `const`:**
  * `var`: Function-scoped, re-declarable, hoisted and initialized as `undefined`.
  * `let`: Block-scoped, re-assignable, hoisted into Temporal Dead Zone (TDZ).
  * `const`: Block-scoped, non-reassignable, must be initialized on declaration.
* **Scope:**  
  * **Global:** Accessible everywhere.
  * **Function:** Accessible only inside the function.
  * **Block:** Accessible only inside `{ ... }` blocks (applies to `let` and `const`).
* **Hoisting:**  
  JavaScript moves function and variable declarations to the top of their scope before execution. Functions are hoisted with their body; `var` as `undefined`; `let`/`const` are hoisted into the TDZ until declared.
* **Closures:**  
  A function's ability to "remember" and access variables from its outer lexical scope, even after that outer function has returned.
* **Primitive vs. Reference Values:**
  * **Primitives** (number, string, boolean, null, undefined, symbol, bigint): Stored directly by value; copied by value.
  * **Reference Types** (objects, arrays, functions): Stored as heap memory addresses; copied by reference.
* **`==` vs. `===`:**
  * `==` (Loose equality): Performs implicit type coercion before comparison (`5 == "5"` is `true`).
  * `===` (Strict equality): Compares value *and* type without coercion (`5 === "5"` is `false`).
* **`null` vs. `undefined`:**
  * `undefined`: Variable declared but not assigned a value; or missing function parameters.
  * `null`: Explicit representation of "no value" or intentional emptiness.
* **Optional Chaining (`?.`):**  
  Safely reads nested object properties without throwing an error if an intermediate reference is `null` or `undefined` (e.g., `user?.address?.city`).
* **Error Handling (`try...catch...finally`):**
  * `try`: Code block to monitor for errors.
  * `catch`: Handles any thrown error.
  * `finally`: Executes regardless of outcome (used for cleanup).

---

## ⏱️ Async JS & Event Loop

* **Synchronous vs. Asynchronous:**
  * **Synchronous:** Code executes line-by-line, blocking execution until the current operation finishes.
  * **Asynchronous:** Non-blocking code execution that yields control while long-running tasks finish in the background.
* **Callbacks:**  
  Functions passed as arguments to other functions to be executed after an asynchronous action completes.
* **Promises:**  
  An object representing the eventual completion (or failure) of an asynchronous operation. States: `pending`, `fulfilled`, `rejected`.
* **`async` / `await`:**  
  Syntactic sugar built over Promises that allows asynchronous code to be written like synchronous code.
* **Event Loop:**  
  The single-threaded runtime mechanism processing tasks in sequence:
  1. Executing Call Stack code first.
  2. Processing the **Microtask Queue** (Promises, `queueMicrotask`).
  3. Processing the **Macrotask Queue** (`setTimeout`, `setInterval`, I/O).

---

## 🧩 JS Functions & Objects

* **`this` Keyword:**  
  Refers to the execution context of the function. In standard functions, `this` depends on *how* the function was called. In arrow functions, `this` is lexically bound to its enclosing parent scope.
* **Arrow Functions:**  
  Shortened syntax for writing functions (`() => {}`). Lacks its own `this`, `arguments`, or `super` bindings and cannot be used as a constructor.
* **Destructuring:**  
  Unpacking values from arrays or properties from objects into distinct variables in a single expression (`const { name } = user`).
* **Spread (`...`) vs. Rest (`...`):**
  * **Spread:** Expands elements of an array or properties of an object into individual components (`[...arr1, ...arr2]`).
  * **Rest:** Collects multiple remaining elements or arguments into a single array parameter (`function(...args)`).
* **Shallow vs. Deep Copy:**
  * **Shallow:** Copies top-level properties; nested objects remain referenced (`{ ...obj }`, `Object.assign()`).
  * **Deep:** Recursively copies all levels; creates an entirely independent clone (`structuredClone(obj)`, `JSON.parse(JSON.stringify(obj))`).

---

## 📊 Array Methods & Optimization

* **`map` / `filter` / `reduce`:**
  * `map()`: Transforms every array element and returns a **new array** of equal length.
  * `filter()`: Returns a **new array** containing elements that pass a boolean test.
  * `reduce()`: Accumulates array elements down to a **single output value**.
* **`find` vs. `findIndex`:**
  * `find()`: Returns the **first element** passing the condition (or `undefined`).
  * `findIndex()`: Returns the **index** of the first element passing the condition (or `-1`).
* **`some` vs. `every`:**
  * `some()`: Returns `true` if **at least one** element passes the condition.
  * `every()`: Returns `true` only if **all** elements pass the condition.
* **Debounce vs. Throttle:**
  * **Debounce:** Delays function execution until a specified delay period has elapsed *since the last call* (e.g., search autocomplete).
  * **Throttle:** Ensures a function executes at most *once per specified time interval* (e.g., scroll listeners).

---

## 🐻 Zustand State Management

* **No Provider Needed:** Does not require a Context `<Provider>` wrapping the app tree. State is accessed directly via hooks.
* **Minimal Boilerplate:** Define state and actions inside a single `create()` call.
* **Selective Re-renders:** Subscribes to specific state properties via selectors, preventing unnecessary re-renders:
  ```jsx
  const count = useStore((state) => state.count);
