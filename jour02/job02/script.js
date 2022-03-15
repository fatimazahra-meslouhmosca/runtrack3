

document.addEventListener('DOMContentLoaded',(event) => {

     let b = document.body;

     let article =document.createElement("article");

     article.textContent= "L'important n'est pas la chute, mais l'atterrissage.";

     b.prepend(article);


     article.style.display="none";

     let button = document.getElementById("button");

     button.addEventListener('click', function showhide(){

        if (article.style.display ==  "none"){

            article.style.display ="block";
        }
        else{
            article.style.display="none";
        }


     })

    })
    

// document.addEventListener('DOMContentLoaded',(event) => {
    

//     function showhide () {
//         let article = document.createElement("article");

//         let newContent = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");

//         article.appendChild(newContent);
    
    




//     button.addEventListener('click', function (){
        
  
//      article.removeChild(newContent);})


// }
// })


// showhide();