function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span>Delete</span>';;

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    deleteBtn.addEventListener('click', function() {
      newLi.parentNode.removeChild(newLi);
    })

    console.log(title);
  });

};

window.onload = function() {
  onReady();
};
