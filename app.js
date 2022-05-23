// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(element => {
    this.addEventListener("click", function(e){
        //e.target.style.backgroundColor = 'red'
        //myElement = document.querySelector("#"+e.target.id)   ;
        //console.log(myElement.style);
        //console.dir(e.target.outerHTML);
        body.style.backgroundColor = e.target.id;
        //body.style.backgroundColor = e.target.style.backgroundColor;
    })
});

