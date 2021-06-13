const menu = document.querySelector('.menu')
const elements = document.querySelectorAll('.target')


const clickHandler =()=>{
    elements.forEach((element)=>{
        element.classList.toggle('change')
    })
}



menu.addEventListener('click', clickHandler)