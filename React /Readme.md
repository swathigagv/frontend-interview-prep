# React Interview Questions & Answers (2026 Edition)

A beginner-to-advanced cheat sheet covering core fundamentals, hooks, state management, and modern React 19 features.

---

## 🟢 Level 1: Core Fundamentals

### 1. What is React and why do we use it?
* **Definition:** A JavaScript library used for building fast, interactive user interfaces by breaking the UI into independent, reusable components.
* **Real-Time Example:** Like assembling a **LEGO set**—instead of gluing one giant piece of plastic, you build small blocks (buttons, headers) and snap them together.

### 2. What is JSX?
* **Definition:** A syntax extension for JavaScript that lets you write HTML-like structures directly inside JavaScript files.
* **Real-Time Example:** Like drawing on a **transparent glass overlay**—you write your markup right over your logic instead of context-switching between separate `.html` and `.js` files.

### 3. What is the Virtual DOM and how does reconciliation work?
* **Definition:** A lightweight in-memory copy of the real DOM. React uses a diffing algorithm (Reconciliation) to compare the new Virtual DOM with the old one and updates **only** the changed nodes in the real DOM.
* **Real-Time Example:** Like a **digital photo editor**—if you change the color of a person's shirt in a picture, the app re-renders only the pixels of the shirt instead of redrawing the entire photograph from scratch.

### 4. What is the difference between State and Props?
* **Definition:** Props are read-only parameters passed down from a parent component; State is local, mutable data managed internally by the component itself.
* **Real-Time Example:** Props are like a **gift box passed from your parents** (you cannot alter what was sent); State is like your **wallet** (you control how much money goes in or out).

### 5. What are Keys in React lists and why are they necessary?
* **Definition:** Unique string/number identifiers assigned to list items that help React track additions, deletions, or reorders across renders.
* **Real-Time Example:** Like **coat check claim tickets**—giving each jacket a unique ticket number lets the attendant retrieve or swap the correct coat instantly without searching the whole rack.

### 6. Controlled vs. Uncontrolled Components?
* **Definition:** Controlled components have their form inputs driven entirely by React State (`value` + `onChange`); Uncontrolled components rely on the native DOM tree (using `useRef`).
* **Real-Time Example:** A controlled component is a **live digital speedometer** updating in real time on your screen; an uncontrolled component is a **paper notepad** where you write down the value only when requested.

---

## 🟡 Level 2: Hooks & Lifecycle

### 7. What are the Rules of Hooks?
* **Definition:** 1. Call Hooks **only at the top level** (never inside loops, conditions, or nested functions). 2. Call Hooks **only from React functional components** or custom hooks.
* **Real-Time Example:** Like **boarding rules at an airport**—you must pass through the security check at the designated entry point before reaching any gate, otherwise the system breaks down.

### 8. What is `useEffect` and how does its dependency array work?
* **Definition:** A hook for executing side effects (data fetching, DOM listeners). An empty array `[]` runs once on mount; passing values `[a, b]` re-runs the effect whenever `a` or `b` changes.
* **Real-Time Example:** Like a **smart thermostat**—if you set it to monitor room temperature `[temp]`, it turns on the AC only when that specific number changes.

### 9. What is `useRef` and how does it differ from `useState`?
* **Definition:** `useRef` holds a persistent reference (`.current`) that survives re-renders **without triggering a new render** when mutated. `useState` always triggers a UI re-render when updated.
* **Real-Time Example:** `useState` is a **scoreboard** (updating the score forces the stadium screen to refresh); `useRef` is a **referee's pocket notebook** (writing a note changes data silently).

### 10. `useMemo` vs. `useCallback`?
* **Definition:** `useMemo` caches the **calculated result** of an expensive computation; `useCallback` caches the **function definition** itself between renders to prevent unnecessary child re-renders.
* **Real-Time Example:** `useMemo` is like **saving the total on a complex tax return** so you do not recalculate it; `useCallback` is like **giving out a photocopied instruction sheet** so you do not rewrite the instructions every time.

### 11. What is Prop Drilling and how do you prevent it?
* **Definition:** The tedious process of passing props through multiple levels of intermediate components that do not need the data themselves. Prevented using Context API, Zustand, or Redux.
* **Real-Time Example:** Passing a message through a **bucket brigade line of 10 people** when you could have just used a **loudspeaker** (Context/Global Store) to broadcast it directly.

### 12. What are Custom Hooks?
* **Definition:** JavaScript functions whose names start with `use` that encapsulate and reuse stateful logic across multiple components.
* **Real-Time Example:** Like creating a **custom power tool adapter**—instead of rebuilding the wiring every time, you plug in your custom adapter wherever you need that specific functionality.

---

## 🔴 Level 3: Advanced, Architecture, & React 19

### 13. What is React Concurrent Rendering and Batching?
* **Definition:** A feature allowing React to pause, resume, or prioritize urgent rendering tasks (like typing in an input) over background tasks (like loading a heavy list).
* **Real-Time Example:** An **emergency room triage team**—treating a patient with an urgent heart issue immediately while asking non-critical patients to wait briefly in the lobby.

### 14. What are `useTransition` and `useDeferredValue`?
* **Definition:** `useTransition` marks state updates as non-urgent transitions; `useDeferredValue` defers updating a secondary piece of UI until primary interactions finish.
* **Real-Time Example:** While searching a store catalog, typing in the search box updates **instantly** (`high priority`), while the 10,000 search results below take a split-second to update (`deferred value`).

### 15. What are React Error Boundaries?
* **Definition:** Class components that implement `componentDidCatch` or `getDerivedStateFromError` to catch JavaScript errors in their child component tree and render a fallback UI without crashing the entire app.
* **Real-Time Example:** A **circuit breaker** in your house—if the kitchen blender short-circuits, the kitchen breaker trips, but the lights in the rest of your house stay completely on.

### 16. What is Code Splitting and `React.lazy` with `Suspense`?
* **Definition:** Dynamically importing heavy component bundles only when they are needed, using `<Suspense>` to display a fallback loader while fetching.
* **Real-Time Example:** Streaming a movie on **Netflix**—you do not download all 10 episodes of a show before playing episode 1; you stream episode 1 while the rest remains on the server.

### 17. How does `ref` as a prop work in React 19?
* **Definition:** In React 19+, `ref` can be passed directly as a standard prop to functional components without needing the higher-order wrapper `forwardRef`.
* **Real-Time Example:** Handing a **room key directly to a guest** at check-in instead of routing it through a special third-party concierge agency.

### 18. What is the `use` Hook in React 19?
* **Definition:** A new API that allows reading promises or React context directly inside rendering logic—and unlike standard hooks, `use` can be called conditionally inside `if` statements or loops.
* **Real-Time Example:** A **fast-pass express line** at an amusement park that lets you retrieve your item directly at the counter on demand without following the rigid main line procedures.
