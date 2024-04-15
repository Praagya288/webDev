function generatePassword(length){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?";

    let password = "" 

    for(let i = 0 ; i < length ; i++){

        var randomIndex = Math.floor(Math.random()*charset.length)
        password += charset.charAt(randomIndex)
    }
    return password 
}


function displayPassword(){
    let passInput = document.querySelector('.inputField') 
    const password = generatePassword(12);
    passInput.value = password ;
}

document.querySelector('.button').
addEventListener('click' , displayPassword)