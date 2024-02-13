const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")


function mostraForm(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
    

}
function escondeForm (){
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    

}
    