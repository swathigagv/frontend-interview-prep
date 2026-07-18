# 🚀 Top 20 JavaScript Interview Questions (2026)

These are the most commonly asked JavaScript interview questions for Frontend, React, and Full Stack Developer interviews in 2026.

---

## 1. What is the difference between `var`, `let`, and `const`?

**Answer:**

| var | let | const |
|-----|-----|------|
| Function scoped | Block scoped | Block scoped |
| Can be redeclared | Cannot be redeclared | Cannot be redeclared |
| Can be reassigned | Can be reassigned | Cannot be reassigned |
| Hoisted with `undefined` | Hoisted but in TDZ | Hoisted but in TDZ |

---

## 2. What is the difference between `==` and `===`?

**Answer:**

- `==` compares values after type conversion.
- `===` compares both value and type.

```javascript
5 == "5"   // true
5 === "5"  // false
```

---

## 3. What are primitive data types in JavaScript?

**Answer:**

There are **7 primitive data types**:

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Everything else is an Object.

---

## 4. What is Hoisting?

**Answer:**

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

```javascript
console.log(a);

var a = 10;
```

Output:

```
undefined
```

---

## 5. What is the Temporal Dead Zone (TDZ)?

**Answer:**

The TDZ is the period between entering a block and declaring a `let` or `const` variable. Accessing it before declaration throws a `ReferenceError`.

---

## 6. What is a Closure?

**Answer:**

A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

```javascript
function outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
```

---

## 7. What is the difference between `null` and `undefined`?

**Answer:**

- `undefined` → Variable declared but not assigned.
- `null` → Intentional absence of value.

---

## 8. What is the difference between `map()` and `forEach()`?

**Answer:**

| map() | forEach() |
|--------|-----------|
| Returns a new array | Returns undefined |
| Used for transformation | Used for iteration |

---

## 9. What is the difference between `slice()` and `splice()`?

**Answer:**

- `slice()` returns a new array without changing the original.
- `splice()` modifies the original array.

---

## 10. Explain the `this` keyword.

**Answer:**

`this` refers to the object that is currently executing the function.

Its value depends on **how the function is called**, not where it is written.

---

## 11. What is Event Bubbling?

**Answer:**

Event Bubbling means an event starts from the target element and propagates upward through its parent elements.

---

## 12. What is Event Delegation?

**Answer:**

Event Delegation is attaching one event listener to a parent element to handle events for multiple child elements using event bubbling.

Benefits:

- Better performance
- Less memory usage
- Useful for dynamically added elements

---

## 13. What is the difference between `call()`, `apply()`, and `bind()`?

**Answer:**

- `call()` invokes immediately with individual arguments.
- `apply()` invokes immediately with an array of arguments.
- `bind()` returns a new function without invoking it.

---

## 14. What are Promises?

**Answer:**

A Promise represents the eventual completion or failure of an asynchronous operation.

States:

- Pending
- Fulfilled
- Rejected

---

## 15. What is Async/Await?

**Answer:**

`async/await` is syntax built on top of Promises that makes asynchronous code easier to read and write.

```javascript
async function getData() {
  const res = await fetch(url);
}
```

---

## 16. Explain the JavaScript Event Loop.

**Answer:**

The Event Loop allows JavaScript to perform asynchronous operations even though it is single-threaded.

It continuously checks:

- Call Stack
- Microtask Queue
- Callback Queue

---

## 17. What is the difference between `localStorage` and `sessionStorage`?

| localStorage | sessionStorage |
|--------------|---------------|
| Permanent | Cleared when tab closes |
| Shared across tabs | Limited to current tab |

---

## 18. What is the Spread Operator (`...`)?

**Answer:**

The spread operator expands arrays or objects.

```javascript
const arr = [1,2,3];

const copy = [...arr];
```

Uses:

- Copy arrays
- Merge arrays
- Merge objects

---

## 19. What is Destructuring?

**Answer:**

Destructuring extracts values from arrays or objects into variables.

```javascript
const person = {
  name: "John",
  age: 25
};

const { name, age } = person;
```

---

## 20. What is the difference between `let` and `const`?

**Answer:**

| let | const |
|------|-------|
| Can be reassigned | Cannot be reassigned |
| Block scoped | Block scoped |
| Value can change | Reference cannot change |

For objects and arrays declared with `const`, their contents can still be modified.

```javascript
const user = {
  name: "John"
};

user.name = "David"; // Allowed
```

---

# 🎯 Interview Tips

- Understand concepts instead of memorizing answers.
- Practice writing code for every topic.
- Be ready to explain with real-world examples.
- Learn the Event Loop, Closures, Promises, and `this` thoroughly—they are asked in almost every JavaScript interview.

⭐ If this repository helps you, consider giving it a Star!
