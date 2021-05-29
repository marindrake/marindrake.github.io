import ToDos from './ToDos.js';

const myTask = new ToDos('todo');
window.addEventListener('load', () => {
  myTask.showToDoList();
  myTask.addTabListeners();
});

const inputField = document.getElementById('new_task');
const addNew = document.getElementById('add');

addNew.addEventListener('click', () => {
  myTask.addToDo();
});

inputField.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    addNew.click();
  }
});