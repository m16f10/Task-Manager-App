/* CREATE DIV CONTAINER */
const body = document.getElementById('bodyD')
let container = document.createElement('div') /* div HOWA container */
container.className = 'container border border-light p-3 my-3 rounded shadow-sm'
body.append(container)

/* Append: Ajout d'un élément à la fin 
   AppendChild: Ajout Enfant à la fin 
   prepend: Ajout d'un élément au début */

/* CREATE TITLE */
let mainTitle = document.createElement('h2')
mainTitle.innerText = 'Gestion des Taches'
mainTitle.className = 'h2 text-center'
mainTitle.id = 'mainTitle'
container.append(mainTitle)

/* innertext: renvoie le text avec mise en forme 
   textContent: renvoie le text sans mise en forme 
   innerHtml: renvoie le text avec sa balise */

/* CREATE LIGNE1 */
let ligne1 = document.createElement('div')
ligne1.className = 'row'
ligne1.id = 'ligne1'
container.append(ligne1)

/* SOUS ELEMENT LIGNE1 */
//div group
let group = document.createElement('div')
group.className = 'btn-group my-2'
ligne1.append(group)

//input 
let input = document.createElement('input')
input.className = 'form-control'
input.id = 'entry1'
input.placeholder = 'Entrez votre tache'
group.append(input)

//button Ajouter
let add = document.createElement('button')
add.className = 'btn btn-success'
add.textContent = 'Ajouter'
add.id = 'addBtn'
add.onclick = () =>{
    if(inputVal.value != ''){
        ajouter()
    }
}
group.append(add)


/* CREATE LIGNE2 */
let ligne2 = document.createElement('div')
ligne2.className = 'row'
ligne2.id = 'ligne2'
container.append(ligne2)

/* SOUS ELEMENT LIGNE 2 */
//div group
let group2 = document.createElement('div')
group2.className = 'btn-group my-2 d-inline'
ligne2.append(group2)

//BUTTON All
let all = document.createElement('button')
all.className = 'btn btn-light shadow-sm'
all.textContent = 'All'
all.onclick = () => {
    tous()
}

group2.append(all)

//BUTTON En cours
let cours = document.createElement('button')
cours.className = 'btn btn-secondary shadow-sm'
cours.textContent = 'En cours'
cours.onclick = () => {
    encours()
}
group2.append(cours)

//BUTTON Finish
let finishB = document.createElement('button')
finishB.className = 'btn btn-success shadow-sm'
finishB.textContent = 'Terminé'
finishB.onclick = () =>{ 
    finish()
}
group2.append(finishB)

/* CREATE LIGNE3 */
let ligne3 = document.createElement('div')
ligne3.className = 'row m-1'
ligne3.id = 'ligne3'
container.append(ligne3)

/* SOUS ELEMENT LIGNE3 */
const inputVal = document.getElementById('entry1')
function ajouter(){
    /* CREATE DIV - task */
    let task = document.createElement('div')
    task.className = 'bg-light shadow-sm p-2 rounded mt-2 d-flex justify-content-between  align-items-center taski'
    task.id = 'task'
    ligne3.append(task)

    /* CREATE SPAN */
    let text = document.createElement('span')
    text.innerText = inputVal.value
    text.id = 'textTask'
    text.className = 'spanText'
    task.append(text)
    
    /* DIV GROUP */
    let group3 = document.createElement('div')
    group3.className = 'my-2 d-inline'
    task.append(group3)

    /* BUTTON DELETE */
    let del = document.createElement('button')
    del.className = 'btn btn-danger me-2'
    del.textContent = 'X'
    del.onclick = () => {
        remove(task)
    }
    group3.append(del)

    /* BUTTON DONE */
    let done = document.createElement('button')
    done.className = 'btn btn-success'
    done.textContent = 'Done'
    done.onclick = () =>{
        fini(text)
    }
    group3.append(done)

    inputVal.value = ''
}


function remove(task){
    let confirmation = confirm("do you want to delete your task?")
        if(confirmation){
            task.remove()
        }
}

function fini(text){
    text.style.textDecoration = 'line-through'
}

function encours(){
    let taskss = document.getElementsByClassName('taski')
    Array.from(taskss).forEach(tasks => {
        let subText = tasks.firstElementChild
        tasks.classList.remove('d-none', 'd-block')
        if(subText.style.textDecoration === 'line-through'){
            tasks.classList.add('d-none')
        } else {
            tasks.classList.add('d-block')
        }
      
    })
}

function finish(){
    let taskss = document.getElementsByClassName('taski')
    Array.from(taskss).forEach(tasks => {
        let subText = tasks.firstElementChild
        tasks.classList.remove('d-none', 'd-block')
        /* console.log(subText) */
        if(subText.style.textDecoration !== 'line-through'){
            tasks.classList.add('d-none')
        }else{
            tasks.classList.add('d-block')
        }
      
    })
}

function tous(){
    let taskss = document.getElementsByClassName('taski')
    Array.from(taskss).forEach(tasks => {
        tasks.classList.remove('d-none', 'd-block') }) /* RENITIALISATION */ 
}