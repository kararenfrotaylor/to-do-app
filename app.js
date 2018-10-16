function onReady(){
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo(){
    if(!newToDoText.value){ return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    newToDoText.value = '';
  }

    renderTheUI();
  }

    function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDos) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";

        deleteBtn.addEventListener('click', () => {
        return toDos.filter(toDos => toDos.id !== id);

        newLi.textContent = toDos.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteBtn);
      });

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    console.log(toDos);
  });

  renderTheUI();
})

window.onload = function() {
  onReady();
};
}
