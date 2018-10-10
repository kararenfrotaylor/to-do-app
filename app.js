function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDos){
    const newLi = document.createElement ('li');
    const checkbox = document.createElement ('input');
    checkbox.type = "checkbox";
  })
  renderTheUI();
});

    newLi.textContent = toDos.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
  })
}

function createNewToDo () {
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value) { return; }

  toDos.push({
    title: newToDoText.value,
    complete: false
  });

  newToDoText.value = '';
  renderTheUI();
}

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
  console.log(toDos);
});

renderTheUI();
}

window.onload = function() {
   onReady();
 };
