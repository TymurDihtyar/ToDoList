const input = document.querySelector('.text');
const addBut = document.querySelector('.add');
const ul = document.querySelector('.tasks');
let start = JSON.parse(localStorage.getItem('base')) || [];
let base = [];
start.forEach(item => {
    createItem(item)
})

function createItem(data) {
    let div = document.createElement('div');
    div.classList.add('item');

    let p = document.createElement('p');
    p.innerHTML = data;

    let butts = document.createElement('div');
    butts.classList.add('butts');

    let butt1 = document.createElement('button');
    butt1.classList.add('del');
    butt1.innerHTML = 'DELETE';

    let butt2 = document.createElement('button');
    butt2.classList.add('edit');
    butt2.innerHTML = 'EDIT';

    butts.append(butt2, butt1);
    div.append(p, butts);
    ul.appendChild(div);

    butt1.addEventListener('click', () => {
        ul.removeChild(div);
        let edit1 = JSON.parse(localStorage.getItem('base'));
        edit1.splice(edit1.indexOf(data), 1)
        localStorage.setItem('base', JSON.stringify(edit1))
    })

    butt2.addEventListener('click', () => {
        let newName = prompt('Введіть нові дані')
        butts.append(butt2, butt1)
        div.append(butts);
        let edit2 = JSON.parse(localStorage.getItem('base'));
        edit2[edit2.indexOf(data)] = newName
        p.innerHTML = newName
        localStorage.setItem('base', JSON.stringify(edit2))
    })

    base.push(data);
}

addBut.addEventListener('click', () => {

    if (input.value) {
        createItem(input.value)
        input.value = '';
    }

    localStorage.setItem('base', JSON.stringify(base))
})



