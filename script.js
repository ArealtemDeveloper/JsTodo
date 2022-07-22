const btn = document.querySelector(".add__btn")
const ul = document.querySelector(".todo__list")
const input = document.querySelector(".todo__input")
let del = document.querySelectorAll(".delete__btn")




const TodoItem = () => {
    //Создание новой задачи
    let item = document.createElement("div")
    item.classList.add("todo__item")
    item.innerHTML= `
                    <div class="todo__object">
                    <label>
                        <input class="todo__checkbox" type="checkbox">
                        <span class="custom__checkbox"></span>
                        <li class="todo__task">${input.value}</li>
                    </label>
                    </div>
                    <div class="todo__delete">
                        <img class="delete__btn" src="./assets/icons/deleteTodo.svg" alt="delete">
                    </div>
    `
    ul.appendChild(item) 
    

    //Удаление задач
    let imgs = document.querySelectorAll("img.delete__btn")
    del = imgs
    del.forEach(item => item.addEventListener("click", function () {
        this.closest("div.todo__item").remove()
    }))

    //Проверка состояния чекбокса и добавление класса
    let checkboxes = document.querySelectorAll(".todo__checkbox")

    checkboxes.forEach(chbx => chbx.addEventListener("click", function () {
        let li = chbx.nextElementSibling.nextElementSibling
        if(chbx.checked) {
            li.classList.add("crosslined")
        }else {
            li.classList.remove("crosslined")
        }
}))
}




window.addEventListener("load", TodoItem(input.value = "Введите новую заметку"))
btn.addEventListener("click", TodoItem)
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        TodoItem()
        e.target.value = ""
    }
})





