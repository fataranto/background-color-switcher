// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(addButtonListener);

function addButtonListener(button) {
    button.addEventListener('click', (e) => {
        let cssObj = window.getComputedStyle(button, null);
        //console.log(cssObj);
        let bgColor = cssObj.getPropertyValue("background-color");
       // console.log(bgColor);
        body.style.backgroundColor = bgColor;
    })
}