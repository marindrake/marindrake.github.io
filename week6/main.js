// Code to keep in Main JS
import ToDos from './ToDos.js';
const myToDoList = new ToDos('todo');
window.addEventListener('load', () => {
  myToDoList.showToDoList();
  myToDoList.addTabListeners();
});
const inputField = document.getElementById('new_task');
const addNew = document.getElementById('addnew');
addNew.addEventListener('click', () => {
  myToDoList.addToDo();
});
inputField.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    addNew.click();
  }
});