"use strict";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const filteredInput = document.querySelector(".filter-input");
const taskList = document.querySelector(".collection");
const button = document.querySelector(".clear-tasks");

// "storage" functions
const STORAGE_KEY = "taskStorage";

// Завжди повертає масив
const getTasksFromStorage = () => {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return tasks;
};

const getTaskFromStorage = (index) => getTasksFromStorage()[index];

const setTaskToStorage = (task) => {
  const tasks = getTasksFromStorage();
  tasks.push(task);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const editTaskInStorage = (index, newTask) => {
  const tasks = getTasksFromStorage();
  tasks[index] = newTask;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const removeTaskFromLocalStorage = (index) => {
  const tasks = getTasksFromStorage();

  // Видалення елементу з масиву
  // 1 - filter
  // const filteredTasks = tasks.filter((task) => task !== deletedTask);
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTasks));

  // 2 - findIndex + splice
  tasks.splice(index, 1);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// "tasks" functions
const addTask = (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();

  // Пусте значення або пробіли - не додаємо LI
  if (value === "") {
    alert("Неккоректне значення");
    return;
  }

  // Додаємо у localStorage
  setTaskToStorage(value);

  // Очистка інпута
  taskInput.value = "";
  renderTasks();
};

const clearTasks = () => {
  taskList.innerHTML = "";
  clearStorage();
};

const removeTask = (event) => {
  const isDeleteIcon = event.target.classList.contains("fa-remove");

  if (isDeleteIcon) {
    const isApproved = confirm("Ви впевнені?");

    if (isApproved) {
      const deletedLi = event.target.closest("li");
      const index = deletedLi.dataset.index;

      removeTaskFromLocalStorage(index);
      renderTasks();
    }
  }
};

const editTask = (event) => {
  const isEditIcon = event.target.classList.contains("fa-edit");

  if (isEditIcon) {
    const editingLi = event.target.closest("li");
    const index = editingLi.dataset.index;
    const currentTask = getTaskFromStorage(index);

    const newTaskName = prompt("Please, edit your task", currentTask);

    if (newTaskName) {
      editTaskInStorage(index, newTaskName);
      renderTasks();
    }
  }
};

const filterTasks = (event) => {
  const searchText = event.target.value.toLowerCase();
  const list = taskList.querySelectorAll(".collection-item");

  list.forEach((li) => {
    const liText = li.firstChild.textContent.toLowerCase();

    // if (liText.includes(searchText)) {
    //   li.hidden = false;
    // } else {
    //   li.hidden = true;
    // }

    li.hidden = !liText.includes(searchText);
  });
};

const renderTasks = () => {
  const tasks = getTasksFromStorage();
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }
  tasks.forEach((task, index) => {
    // Create LI
    const li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = task; // значення зі storage
    li.dataset.index = index;

    const edit = document.createElement("span");
    edit.className = "edit-item";
    edit.innerHTML = '<i class="fa fa-edit"></i>';
    li.append(edit);

    const span = document.createElement("span");
    span.className = "delete-item";
    span.innerHTML = '<i class="fa fa-remove"></i>';
    li.append(span);

    taskList.append(li);
  });
};

// Ініціалізація
renderTasks();
// document.addEventListener("DOMContentLoaded", renderTasks);

// Event listeners
form.addEventListener("submit", addTask);

button.addEventListener("click", clearTasks);

taskList.addEventListener("click", removeTask);

taskList.addEventListener("click", editTask);

filteredInput.addEventListener("input", filterTasks);
