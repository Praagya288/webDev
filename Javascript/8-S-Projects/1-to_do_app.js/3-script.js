const taskInput = document.querySelector('.inputTextBox')
const taskRowsArea = document.querySelector('.taskRowsArea')
const addBtn = document.querySelector('.addButton')


function addBtnClicked(){
    if(taskInput.value === ''){
        alert('No task found')
    }
    else{
        const li = document.createElement('li')
        li.innerHTML = `
        <div id="leftCircle">
            <i class="fa-solid fa-check"></i>
        </div>
        <span id="taskName">${taskInput.value}</span>
        <div id="rightCross">&#x00d7;</div>` ;
        taskRowsArea.appendChild(li)
        taskInput.value = ""    
    }
}   
