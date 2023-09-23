const input = document.querySelector('.text');
const addBut = document.querySelector('.add');
const ul = document.querySelector('.tasks');
let start = JSON.parse(localStorage.getItem('base')) || [];
let base = [];
start.forEach(item => {
    createItem(item);
})

function createItem(data) {
    let div = document.createElement('div');
    div.classList.add('item');

    let p = document.createElement('p');
    p.innerHTML = data;

    let butts = document.createElement('div');
    butts.classList.add('butts');

    let butDelete = document.createElement('button');
    butDelete.classList.add('del');
    butDelete.innerHTML = 'DELETE';

    let butEdit = document.createElement('button');
    butEdit.classList.add('edit');
    butEdit.innerHTML = 'EDIT';

    butts.append(butEdit, butDelete);
    div.append(p, butts);
    ul.appendChild(div);

    butDelete.addEventListener('click', () => {
        ul.removeChild(div);
        start = JSON.parse(localStorage.getItem('base'));
        start.splice(start.indexOf(data), 1);
        localStorage.setItem('base', JSON.stringify(start));
    })

    butEdit.addEventListener('click', () => {
        let newName = prompt('Введіть нові дані')
        start = JSON.parse(localStorage.getItem('base'));
        start[start.indexOf(data)] = newName;
        p.innerHTML = newName;
        localStorage.setItem('base', JSON.stringify(start));
    })
    base.push(data);
}

addBut.addEventListener('click', () => {

    if (input.value) {
        createItem(input.value);
        input.value = '';
    }

    localStorage.setItem('base', JSON.stringify(base));
})



