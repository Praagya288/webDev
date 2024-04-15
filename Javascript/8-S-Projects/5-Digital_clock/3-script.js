let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let seconds = document.getElementById('seconds');


setInterval( ()=>{
    let currentTime = new Date() ;
hrs.innerHTML = (currentTime.getHours()<10? "0" : "") + currentTime.getHours();
mins.innerHTML = (currentTime.getMinutes()<10? "0" : "") + currentTime.getMinutes() ;
seconds.innerHTML = (currentTime.getSeconds()<10? "0" : "") + currentTime.getSeconds();
} , 1000)