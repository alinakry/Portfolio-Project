const form = document.getElementById('form');
const content = document.getElementById('content-container');

const elmntWidth = document.getElementById('elm-width');
const elmntHeight = document.getElementById('elm-height');
const textarea = document.getElementById('textarea');
const elementColor = document.getElementById('el-color');
const fontSize = document.getElementById('font-size');

const clearBtn = document.getElementById('clr-btn');



elmntWidth.max = 100;
elmntHeight.max = 100;


form.addEventListener('submit', (e) => {
    e.preventDefault();


    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';


    let element = document.createElement("div");

    element.style.width = elmntWidth.value + document.getElementById('select-width').value;
    element.style.height = elmntHeight.value + document.getElementById('select-height').value;
    element.style.backgroundColor = elementColor.value;
    element.innerText = textarea.value;
    element.style.fontSize = fontSize.value + document.getElementById('select-font').value;

    content.appendChild(element);
});


clearBtn.addEventListener('click', () => {
    window.location.reload();
})