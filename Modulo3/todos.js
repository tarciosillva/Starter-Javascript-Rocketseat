var listElemet = document.querySelector('#app ul');
var inputElemet = document.querySelector('#app input');
var buttonElemet = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {

    listElemet.innerHTML = ''

    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElemet.appendChild(todoElement)
    }
}

renderTodos()

function addTodo() {
    var todoText = inputElemet.value

    todos.push(todoText)
    inputElemet.value = ''
    renderTodos()
    saveToStorage()
}

buttonElemet.onclick = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}