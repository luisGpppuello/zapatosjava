const imagenes = document.querySelectorAll('.contenedor-galeria')
const imageneslight = document.querySelector('.galeria')
const contenedorlight = document.querySelector('.imagen-light')
const imagenes = document.querySelector('.numero40')

/*console.log(imagenes)
console.log(imageneslight)
console.log(contenedorlight)*/

/*imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {alert("auch, me dolio")
     })
}) */

/*imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
       console.log(imagen.getAttribute('src'))
     }) esto me muetra la ubicacion de cada imagen por consola
}) 

const aparecerImagen =(imagen)=>{

}*/

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))
       
     })
}) 

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !==imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImagen')
        numero40.style.opacity ='1'
   }
})

const aparecerImagen =(imagen)=>{
    imageneslight.src = imagen
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImagen')
    numero40.style.opacity ='0'

}

