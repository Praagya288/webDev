const inputField = document.querySelector('.display input')
const validChar = '0123456789/*-+.'

inputField.addEventListener('input' , function(event){
    const enteredChar = event.data
        if(!validChar.includes(event.target.value)){
            event.target.value = event.target.value.replace(enteredChar, '');
        }
})  