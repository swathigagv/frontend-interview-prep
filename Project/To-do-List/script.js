// State
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const clearCompletedBtn = document.getElementById('clear-completed');

// Initialize
render();

// Event Listeners
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
  }
});

clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  saveAndRender();
});

// Core Functions
function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  todos.push(newTodo);
  saveAndRender();
}

function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  saveAndRender();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

function render() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    if (todo.completed) li.classList.add('completed');

    li.innerHTML = `
      <div class="todo-content">
        <input 
          type="checkbox" 
          ${todo.completed ? 'checked' : ''} 
          data-id="${todo.id}"
          class="toggle-checkbox"
        />
        <span class="todo-text">${escapeHtml(todo.text)}</span>
      </div>
      <button class="delete-btn" data-id="${todo.id}">Delete</button>
    `;

    // Attach listeners dynamically to dynamic element triggers
    li.querySelector('.toggle-checkbox').addEventListener('change', () => {
      toggleTodo(todo.id);
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      deleteTodo(todo.id);
    });

    todoList.appendChild(li);
  });

  // Update Footer Info
  const activeCount = todos.filter(todo => !todo.completed).length;
  taskCount.textContent = `${activeCount} task${activeCount === 1 ? '' : 's'} left`;
}

// Basic XSS Prevention helper
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}