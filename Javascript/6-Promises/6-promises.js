const promiseOne = new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    } , 1000)

})

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise (function(resolve , reject){
    
        setTimeout(function(){
            console.log("async task 2")
            resolve()
        }  , 1000)
}).then(function(){
    console.log('async 2 resolved')
})



const promiseThree = new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve({
                username : "chai" ,
                email : "chai@example" 
            })
        } , 1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour =  new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve
    } , 1000)
})