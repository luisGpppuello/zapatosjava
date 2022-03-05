const numero40 = document.querySelector('.numero40');
const menu = document.querySelector('.menu-preferencias');

/*console.log(menu)
console.log(hamburguer)

/*hamburguer.addEventListener('click', ()=>{
    alert("click")
})*/
numero40.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

/*window.addEventListener('click',e=>{
    console.log(e.target)
})esto muestra por console todas las secciones que uno va ejecutando en la pagina web*/

window.addEventListener('click',e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != numero40){
       
         menu.classList.toggle("spread")
    
    }
})

