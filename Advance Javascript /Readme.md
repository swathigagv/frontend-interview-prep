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
