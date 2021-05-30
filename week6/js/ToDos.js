let toDoList = null;

export default class ToDos {
    constructor(elementID) {
        this.parentElement = document.getElementById(elementID);
        this.LSkey = this.parentElement.id;
    }

    addEventListeners() {
        const listItems = Array.from(this.parentElement.children);

        if (listItems.length > 0 && listItems[0].children[0]) {
            listItems.forEach(item => {
                item.children[0].addEventListener('click', event => {
                    this.completeToDo(event.currentTarget.id);
                })
                item.children[2].addEventListener('click', event => {
                    this.removeItem(event.currentTarget.parentElement.children[0].id);
                })
            })
        }
    }

    addTabListeners() {
        const listTabs = Array.from(document.querySelectorAll('.tasks'));
        listTabs.forEach(tab => {
            tab.addEventListener('click', event => {
                for (let item in listTabs) {
                    listTabs[item].classList.remove('selected');
                }
                event.currentTarget.classList.add('selected');
                this.filterToDos(event.currentTarget.id);
            })
        })
    }

    addToDo() {
        const taskContent = document.getElementById('new_task');
        saveToDo(this.LSkey, taskContent);
        this.showToDoList();
    }

    showToDoList() {
        getToDos(this.LSkey);
        renderToDoList(this.parentElement, toDoList);
        if (toDoList != null) {
            this.addEventListeners();
        }
    }

    completeToDo(itemID) {
        let oneTask = toDoList.findIndex(task => task.id == itemID);
        toDoList[oneTask].completed = !toDoList[oneTask].completed;
        lsHelpers.writeToLS(this.LSkey, toDoList);
        markDone(itemID);
    }

    removeItem(itemID) {
        let oneTask = toDoList.findIndex(task => task.id == itemID);
        toDoList.splice(oneTask, 1);
        lsHelpers.writeToLS(this.LSkey, toDoList);
        this.showToDoList();
    }

    filterToDos(category) {
        category = filterBy(category);
        const arrFilter = toDoList.filter(task => {
            if (category != null) {
                return task.completed == category;
            } else {
                return task;
            }
        })
        renderToDoList(this.parentElement, arrFilter);
        this.addEventListeners();
    }
}

function getToDos(key) {
    console.log(`getToDos invoked with ${key}`);
    if (toDoList == null) {
        toDoList = [];
        let arrLocal = lsHelpers.readFromLS(key);
        if (arrLocal != null) {
            arrLocal.forEach(task => toDoList.push(task));
        }
    }
    return toDoList;
}

function saveToDo(key, taskContent) {
    let taskArr = getToDos(key);
    let taskID = Date.now();

    if (taskContent && taskContent.value) {
        const newTask = {
            id: taskID,
            content: taskContent.value,
            completed: false
        };
        taskArr.push(newTask);
        lsHelpers.writeToLS(key, taskArr);
        taskContent.classList.remove("error-input");
        taskContent.value = '';
    } else {
        taskContent.classList.add("error-input");
    } taskContent.focus();
}

function renderToDoList(parent, thisList) {
    parent.innerHTML = '';
    if (thisList != null && thisList.length > 0) {
        thisList.forEach(taskObject => {
            parent.appendChild(renderOneToDo(taskObject));
        })
    } else {
        const emptyList = document.createElement('li');
        emptyList.innerHTML = `No Tasks Found`
        parent.appendChild(emptyList);
    } updateCount(thisList);
}

function renderOneToDo(task) {
    const oneTask = document.createElement('li');
    task.completed ? oneTask.classList.toggle('completed') : '';
    oneTask.innerHTML = `<input id="${task.id
        }" name="${task.content
        }" type="checkbox" value="none" ${task.completed ? 'checked' : ''
        }>
        <label for="${task.id
        }">${task.content
        }</label>
        <div class="remove">X</div>`;
    return oneTask;
}

function updateCount(list) {
    const counter = document.getElementById('counter');
    if (list != null) {
        counter.innerHTML = `${list.length
            } Tasks`;
    } else {
        counter.innerHTML = ` 0 Tasks -`;
    }
}

function markDone(itemID) {
    let taskContainer = document.getElementById(itemID).parentElement;
    taskContainer.classList.toggle('completed');
}

function filterBy(category) {
    switch (category) {
        case 'active': category = false;
            break;
        case 'completed': category = true;
            break;
        case 'all': category = null;
            break;
    }
    return category;
}

import * as lsHelpers from './ls.js';
import * as utilHelpers from './utilities.js';
