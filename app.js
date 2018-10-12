function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value){ return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    newToDoText.value = '';


  function renderTheUI(){
   const toDoList = document.getElementById('toDoList');
   toDoList.textContent = '';

    toDos.forEach(function(toDos){
       const newLI = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete!";


      deleteBtn.addEventListener('click', event => {
       toDos = toDos.filter(function(item){
         return item.id !== toDos.id;

        })

        renderTheUI();

     });

        newLI.textContent = toDos.title;
        newLI.appendChild(checkbox);
        toDoList.appendChild(newLI);
        newLI.appendChild(deleteBtn);
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
