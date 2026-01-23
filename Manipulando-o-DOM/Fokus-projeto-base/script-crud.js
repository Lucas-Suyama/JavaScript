const addTaskBtn = document.querySelector('.app__button--add-task')
const formAddTask = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const ulTasks = document.querySelector('.app__section-task-list')
const pTaskDescription = document.querySelector('.app__section-active-task-description')
const removeFinisheTaskBtn = document.querySelector('#btn-remover-concluidas')
const removeAllTaskBtn = document.querySelector('#btn-remover-todas')

let tasksList = JSON.parse(localStorage.getItem('tasks')) || []
let activeTask = null
let liActiveTask = null

function updateTasksList() {
    localStorage.setItem('tasks', JSON.stringify(tasksList))
}

function renderTasks(task) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `

    const p = document.createElement('p')
    p.classList.add('app__section-task-list-item-description')
    p.textContent = task.description

    const button = document.createElement('button')
    button.classList.add('app_button-edit')
    button.onclick = () => {
      const novaDescricao = prompt("Qual nova descrição para a tarefa?")
      if(novaDescricao) {
        p.textContent = novaDescricao
        task.description = novaDescricao
        updateTasksList() 
      }
    }
    const imgBtn = document.createElement('img')
    imgBtn.setAttribute('src', "./imagens/edit.png")
    button.appendChild(imgBtn)

    li.appendChild(svg)
    li.appendChild(p)
    li.appendChild(button)
    if(task.completed) {
        li.classList.add('app__section-task-list-item-complete')
        button.setAttribute('disabled', true)
    }else{
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active').forEach(li => {
                li.classList.remove('app__section-task-list-item-active')
            })
            if(activeTask === task) {
                activeTask = null
                liActiveTask = null
                pTaskDescription.textContent = ''

                return
            }
            activeTask = task
            liActiveTask = li
            pTaskDescription.textContent = task.description
            
            li.classList.add('app__section-task-list-item-active')
        }
    }

    return li
}

addTaskBtn.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden')
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
      description: textArea.value,
    }

    tasksList.push(task)
    const li = renderTasks(task)
    ulTasks.appendChild(li)
    updateTasksList()

    textArea.value = ''
    formAddTask.classList.add('hidden')
})

tasksList.forEach(task => {
    const li = renderTasks(task)
    ulTasks.appendChild(li)
})

document.addEventListener('focoFinalizado', () => {
    if(activeTask && liActiveTask) {
        liActiveTask.classList.remove('app__section-task-list-item-active')
        liActiveTask.classList.add('app__section-task-list-item-complete')
        liActiveTask.querySelector('button').setAttribute('disabled', true)
        activeTask.completed = true
        updateTasksList()
    }
})

const removeTasks = (completed) => {
    let seletor = completed ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
    document.querySelectorAll(seletor).forEach(li => {
        li.remove()
    })
    tasksList = completed ? tasksList.filter(task => !task.completed) : []         
    updateTasksList()
}

removeFinisheTaskBtn.onclick = () => removeTasks(true)
removeAllTaskBtn.onclick = () => removeTasks(false)