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
    }

    function deleteToDo(){
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete!";
    }
    /*});*/
    newToDoText.value = '';


  function renderTheUI(){
   const toDoList = document.getElementById('toDoList');
   toDoList.textContent = '';

    toDo.forEach(function(toDos){
       const newLi = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";


    deleteBtn.addEventListener('click', () => {
      toDo = toDos.filter(deleteToDo(item){
      return item.id !== toDos.id;

        })

        renderTheUI();

     });

        newLi.textContent = toDos.title;
        newLi.appendChild(checkbox);
        toDoList.appendChild(newLI);
        newLi.appendChild(deleteBtn);
      })
}

id++;

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
