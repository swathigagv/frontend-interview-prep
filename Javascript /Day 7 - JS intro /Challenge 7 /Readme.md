# 🔐 The Cyber-Lockbox Challenge 7 

Welcome to the **Cyber-Lockbox Challenge**! Your task is to build a interactive security panel. Users must toggle a series of virtual switches to find the secret combination, which is validated using core JavaScript logic.

---

## 🎨 The Objective

Build a single-page web app where:
1. **HTML** provides 4 togglable security switches and a status screen.
2. **CSS** styles it like a sleek, dark-themed cyber terminal.
3. **JS** tracks the switch states, runs validation logic using operators and loops, and updates the screen.

---

## 🛠️ Step 1: The Structure (HTML)

Save this as `index.html`. It sets up the security console, the switches, and a terminal screen to display the status.

## 🎨 Step 2: The Styling (CSS)

Save this as `style.css` to give the console a retro-futuristic terminal look.

## 🧠 Step 3: The JS Challenge (app.js)

Your challenge is to write the `app.js` file. To solve it, you must use all 7 key concepts:

**Variables & Data Types:** Store the switch states in an array of Booleans (e.g., [false, false, false, false]).

**Operators:** Use logical operators (&&, ||, !) to define the secret lock combination.

**Loops:** Use a loop to scan the HTML buttons and apply the .active class dynamically whenever a switch changes.

**Functions:** Write a main checkCombination() function and an event-handling toggleSwitch(index) function.

**Scope:** Keep the winning formula isolated within your checking function so users can't easily modify it from the browser console.

**Hoisting:** Call your setup/initialization function at the very top of your file, but declare it at the bottom.

## 🧩 The Decryption Rule

The system unlocks only if:

Switch A AND Switch C are turned ON.

Switch B OR Switch D is turned ON (but not both at the same time!).

## 🔓 Solution Blueprint (How to write your app.js)
If you get stuck, here is how you should structure your script:

Happy Learning !! 
