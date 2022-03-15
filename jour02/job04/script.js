document.addEventListener('DOMContentLoaded',(event) => {

let keylogger = document.getElementById("keylogger");
let b = document.body;

b.addEventListener("keydown", (event) =>{

    const key =event.key;
    console.log(key);
        if (keylogger.focus){
             keylogger.value = keylogger.value +key;
        }
        else{
            keylogger.value =key;
        }
})
})
// .focus pour mettre le focus sur cet element-là 