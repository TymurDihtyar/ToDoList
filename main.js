const input = document.querySelector('.text');
const addBut = document.querySelector('.add');
const ul = document.querySelector('.tasks')

addBut.addEventListener('click', () => {
    if (input.value) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = input.value;
        let butt = document.createElement('button');
        butt.classList.add('currentButt');
        butt.innerHTML = 'DELETE';
        div.append(butt);
        ul.appendChild(div);
        input.value = '';

        butt.addEventListener('click', () => {
            ul.removeChild(div);
        })
    }
})