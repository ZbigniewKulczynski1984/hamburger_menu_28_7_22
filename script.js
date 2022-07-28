// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// btn1.addEventListener('click', function() {
//     console.log('kliknięto mnie');
// })

// btn2.addEventListener('mouseover',() => console.log('najechano na mnie'))

// const test = () => {
//     console.log('double click');
// }

// btn3.addEventListener('dblclick', test)

const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')

const handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barsIco.classList.toggle('hide')
    xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)