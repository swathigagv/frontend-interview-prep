# JavaScript Deep Dive: Asynchronous Engine & OOP

A beginner-friendly cheat sheet for mastering JavaScript's asynchronous engine, execution model, and Object-Oriented Programming (OOP) principles.

---

## 📚 Topics

### 1. Promises
* **Definition:** An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
* **Real-Time Example:** Like a **buzzer at a restaurant counter**—it promises that your food will be ready soon, staying silent until the meal is either prepared (fulfilled) or canceled (rejected).

### 2. Event Loop
* **Definition:** The underlying mechanism that constantly checks if the call stack is empty so it can process waiting asynchronous tasks from the queue without freezing the page.
* **Real-Time Example:** Like an **attentive waiter at a busy diner** who constantly loops between checking if the chef has a cooked dish ready and delivering it to a table when your hands are free.

### 3. Callbacks
* **Definition:** A function passed as an argument into another function, intended to be executed after a specific task or event has finished.
* **Real-Time Example:** Like leaving your **phone number with a store manager** so they can call you back the exact moment a sold-out item arrives in stock.

### 4. `this` Keyword
* **Definition:** A dynamic reference that points to the execution context or object currently calling or executing the surrounding code.
* **Real-Time Example:** Like the **word "here" in a conversation**—what "here" means depends entirely on where you are standing when you say it.

### 5. Prototype
* **Definition:** An internal mechanism in JavaScript where objects inherit properties and methods directly from other parent objects via a prototype chain.
* **Real-Time Example:** Like **inheriting physical traits from your parents**—if you don't know how to do a specific task, you automatically check if your family tree passed down that skill.

### 6. Classes
* **Definition:** Synthetic blueprints (introduced in ES6 over prototypes) used to create multiple objects with shared properties and methods.
* **Real-Time Example:** Like an **architectural blueprint for a house**—the blueprint itself isn't a physical home, but you can use it to build hundreds of identical houses.

# JavaScript Performance, Architecture, & Web Storage

A beginner-friendly cheat sheet for mastering code organization, event optimization, and client-side browser storage.


## 📚 Topics

### 1. Modules
* **Definition:** A way to split large JavaScript codebases into smaller, reusable files using `import` and `export` statements to keep code organized and maintainable.
* **Real-Time Example:** Like organizing a **toolbox into separate drawers**—screwdrivers go in one drawer, wrenches in another, and you pull out only what you need when working.

### 2. Debouncing
* **Definition:** A performance technique that delays executing a function until a specified amount of time has passed since the user last triggered the event.
* **Real-Time Example:** Like an **elevator door**—it waits for the last person to walk in and resets its timer before finally closing and moving.

<Image src="image_agent_tag_6713988252461281902" alt="Diagram showing debouncing delay execution" caption="Debouncing timing mechanism" />

### 3. Throttling
* **Definition:** A performance technique that ensures a function is executed at most once within a fixed, specified time interval, regardless of how often the user triggers it.
* **Real-Time Example:** Like a **speed camera on a highway** that only snaps one photo every 10 seconds, no matter how many cars zip past in between.

### 4. Local Storage
* **Definition:** A persistent key-value storage mechanism in the web browser that holds up to ~5–10 MB of data with no expiration date.
* **Real-Time Example:** Like **writing a note in a permanent desk notebook**—the notes stay right there on the page even if you close your office door and leave for the weekend.

### 5. Session Storage
* **Definition:** A temporary key-value storage mechanism in the browser that saves data only for the duration of the current browser tab session.
* **Real-Time Example:** Like **writing on a temporary classroom whiteboard**—everything is kept neatly while class is in session, but it gets completely erased the moment you close the door (tab).
