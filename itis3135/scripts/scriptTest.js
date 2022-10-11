let btnShow = document.querySelector('button');
let output = document.querySelector('h1');

btnShow.addEventListener('click', () => {
    let today = new Date();

    let month =today.getMonth() + 1;
    let year = today.getFullYear();
    let data = today.getDate();

    let current_date = `${month}/${date}/${year}`;
    output.innerText = current_date;

});