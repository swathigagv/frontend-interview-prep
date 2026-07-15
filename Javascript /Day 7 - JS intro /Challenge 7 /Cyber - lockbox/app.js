// 1. HOISTING: Call the initializer before declaring it
initializeSystem();

// 2. VARIABLES & DATA TYPES
let switchStates = [false, false, false, false]; // A, B, C, D

// 3. FUNCTIONS
function toggleSwitch(index) {
  // Toggle the boolean value at this index
  switchStates[index] = !switchStates[index];
  
  // 4. LOOPS: Update UI buttons
  const buttons = document.querySelectorAll('.switch');
  for (let i = 0; i < buttons.length; i++) {
    if (switchStates[i]) {
      buttons[i].classList.add('active');
    } else {
      buttons[i].classList.remove('active');
    }
  }

  checkCombination();
}

function checkCombination() {
  // 5. SCOPE: Keep checking logic local
  const [a, b, c, d] = switchStates;
  
  // 6. OPERATORS: The secret system rules
  const rule1 = a && c; 
  const rule2 = (b || d) && !(b && d); // Exclusive OR (one or the other, not both)
  
  const screen = document.getElementById('status-screen');
  
  if (rule1 && rule2) {
    screen.textContent = "🟢 ACCESS GRANTED";
    screen.className = "screen unlocked";
  } else {
    screen.textContent = "🔴 SYSTEM LOCKED";
    screen.className = "screen locked";
  }
}

// 7. HOISTED FUNCTION DECLARATION
function initializeSystem() {
  console.log("Lockbox initialized and waiting for inputs...");
}

function resetConsole() {
  switchStates = [false, false, false, false];
  const buttons = document.querySelectorAll('.switch');
  buttons.forEach(btn => btn.classList.remove('active'));
  checkCombination();
}