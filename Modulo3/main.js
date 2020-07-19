// referenciar os elementos qu vao ser usados pelo usuario
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('List_Todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);


        var inputRadios = document.createElement('span')

        inputRadios.setAttribute('id', 'ok')

        todoElement.style.position = 'relative';
        todoElement.style.display = 'flex';
        todoElement.style.alignItems = 'center';

        todoElement.style.marginBottom = '17px';

        todoElement.style.fontSize = '18px';
        todoElement.style.fontWeight = 'bold';


        inputRadios.style.marginRight = '18px';

        inputRadios.style.width = '25px';
        inputRadios.style.height = '25px';
        inputRadios.style.background = '#fff';
        inputRadios.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
        inputRadios.style.borderRadius = '50%';
        inputRadios.style.cursor = 'pointer';

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');


        linkElement.style.position = 'absolute';
        linkElement.style.right = '5px';

        var linkText = document.createElement('img');
        linkText.setAttribute('src', './assets/img/lixo.svg');


        linkText.style.width = '30px'
        linkText.style.height = '30px'

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`);


        linkElement.appendChild(linkText);

        todoElement.appendChild(inputRadios);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement)

        $(document).ready(function() {
            $("span").on({
                mouseenter: function() {
                    $(this).css("background-color", "#3BB54A");
                },
                mouseleave: function() {
                    $(this).css("background-color", "#fff");
                },
                dblclick: function() {
                    var img = `url(./assets/img/ok.svg)`;
                    $(this).css("background", img);
                    $(this).css("backgroundSize", "cover");
                },
                click: function() {
                    $(this).css("background", "#fff");
                }

            });
        });
    }
}
renderTodos();


function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos()
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}



function saveToStorage() {
    localStorage.setItem('List_Todos', JSON.stringify(todos));
}