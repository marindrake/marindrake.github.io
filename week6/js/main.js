import ToDos from './toDos.js';

const myToDoList = new ToDos('todo');
window.addEventListener('load', () => {
  myToDoList.showToDoList();
  myToDoList.addTabListeners();
});

const inputField = document.getElementById('new_task');
const addNew = document.getElementById('add');


inputField.addEventListener('keyup', function(event) {
  if(event.keyIdentifier !== undefined) {
    event.preventDefault();
    addNew.click();
  }
});