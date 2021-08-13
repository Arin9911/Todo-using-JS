//selector//

var todoInput = document.getElementById("todoinput");
var todoButton = document.getElementById("todoButton");
var todolist = document.getElementById("todolist");

//Event Listeners

todoButton.addEventListener('click', addTodo);


//Funtions

function addTodo(event) {
     event.preventDefault();

     var todoDiv = document.createElement('div'); //creating Div
     todoDiv.classList.add('todo');  // giving above div a class

     var newTodo = document.createElement('li'); //creating a list for items/tasks

     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');  // giving that list a class 

     todoDiv.appendChild(newTodo);

     todolist.appendChild(todoDiv);  //appending this div to the main list

     todoInput.value = '';

     var trashbtn = document.createElement('button');  //creating a delete button
     trashbtn.classList.add('trashbtn'); //giving class to the button
     trashbtn.innerHTML = '<i class="fas fa-trash"></i>';
     todoDiv.appendChild(trashbtn);

     trashbtn.addEventListener('click', function () {      //funtionality for delete button
          todoDiv.remove();

          //creating a delete all button

          var deleteAll = document.getElementById('allDelete');
          deleteAll.addEventListener('click', function () {
               todoDiv = '';
          })

     })

}


