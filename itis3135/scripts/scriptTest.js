let firstInput = document.querySelector('#firstInput');
let secondInput = document.querySelector('#secondInput');
let btnAdd = document.querySelector('button');
let result = document.querySelector('h4');

btnAdd.addEventListener('click', () =>{
    let total = parseInt(firstInput.value) + parseInt(secondInput.value);
    result.innerText = total;
})

