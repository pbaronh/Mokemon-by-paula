let ataquejugador 
let ataqueenemigo
let nombremascotaenemigo 
let nombremascotajugador
let resultado
let vidasjugador = 3
let vidasenemigo = 3

function iniciarJuego() {
        let seccionataque = document.getElementById ("seccion-ataque")
        seccionataque.style.display = "none"

        let seccionreiniciar = document.getElementById ("reiniciar")
        seccionreiniciar.style.display = "none"
        
        let botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota")
        botonSeleccionarMascota.addEventListener("click" , seleccionarMascotaJugador)
       
        let botonataquefuego = document.getElementById("boton-fuego")
        botonataquefuego.addEventListener("click", ataquefuego)
        let botonataqueagua = document.getElementById("boton-agua")
        botonataqueagua.addEventListener("click", ataqueagua)
        let botonataquetierra = document.getElementById("boton-tierra")
        botonataquetierra.addEventListener ("click", ataquetierra)
        let botonataqueaire = document.getElementById("boton-aire")
        botonataqueaire.addEventListener ("click", ataqueaire)

        let botonreiniciar = document.getElementById ("boton-reinciar")
        botonreiniciar.addEventListener ("click" , reiniciar)
    
}
function seleccionarMascotaJugador () {
    let inputfuria = document.getElementById ("furia")
    let inputaqua = document.getElementById ("aqua")
    let inputterror = document.getElementById ("terror")
    let inputair = document.getElementById ("air")
    let inputferoz = document.getElementById ("feroz")
    let inputtilone = document.getElementById ("tilone")
    let inputayu = document.getElementById ("ayu")
    let inputarmonia = document.getElementById ("armonia")
    let spanmascotajugador = document.getElementById ("span-mascota-jugador")

    let seccionelegir = document.getElementById ("seleccionar-mokemon")
        seccionelegir.style.display = "none"

    let seccionataque = document.getElementById ("seccion-ataque")
        seccionataque.style.display = "block"
      
    if (inputfuria.checked){
        spanmascotajugador.innerHTML = "Furia"
        nombremascotajugador = "FURIA"
    }   else if (inputaqua.checked){
            spanmascotajugador.innerHTML = "Aqua"
            nombremascotajugador = "AQUA"
    }   else if (inputterror.checked){
            spanmascotajugador.innerHTML = "Terror" 
            nombremascotajugador = "TERROR" 
    }   else if (inputair.checked){
            spanmascotajugador.innerHTML = "Air"   
            nombremascotajugador = "AIR"
    }   else if (inputferoz.checked){
            spanmascotajugador.innerHTML = "Feroz" 
            nombremascotajugador = "FEROZ"
    }   else if  (inputtilone.checked){
            spanmascotajugador.innerHTML = "Tilone"  
            nombremascotajugador = "TILONE"
    }   else if (inputayu.checked){
            spanmascotajugador.innerHTML = "Ayu"  
            nombremascotajugador = "AYU" 
    }   else if (inputarmonia.checked){
            spanmascotajugador.innerHTML = "Armonia" 
            nombremascotajugador = "ARMONIA" 
    }   else {
            alert("No Seleccionaste")
            reiniciar()
        }
        
        mascotaenemigo()

        
     }

function mascotaenemigo () {
    let enemigo = Math.floor(Math.random() * (8 - 1 + 1) + 1)
    let spanmascotaenemigo = document.getElementById ("span-mascota-enemigo")
  
    if ( enemigo == 1) { spanmascotaenemigo.innerHTML = "Furia"
        mascotaenemigo = "FURIA"}
    else if(enemigo == 2) { spanmascotaenemigo.innerHTML = "Aqua"
    mascotaenemigo = "AQUA"} 
    else if(enemigo == 3) { spanmascotaenemigo.innerHTML = "Terror"
    mascotaenemigo = "TERROR"}
    else if(enemigo == 4) { spanmascotaenemigo.innerHTML = "Air"
    mascotaenemigo = "AIR"}
    else if(enemigo == 5) { spanmascotaenemigo.innerHTML = "Feroz"
    mascotaenemigo = "FEROZ"}
    else if(enemigo == 6) { spanmascotaenemigo.innerHTML = "Tilone"
    mascotaenemigo = "TILONE"}
    else if(enemigo == 7) { spanmascotaenemigo.innerHTML = "Ayu"
    mascotaenemigo = "AYU"}
    else if(enemigo == 8) { spanmascotaenemigo.innerHTML = "Armonia"
    mascotaenemigo = "ARMONIA"}
    else { alert("error")}

}
    
function ataquefuego (){
        ataquejugador = 'FUEGO'
        ataquealeatorioenemigo()    
}

function ataqueagua(){
        ataquejugador = 'AGUA'
        ataquealeatorioenemigo() 
}

function ataquetierra(){
        ataquejugador = 'TIERRA'
        ataquealeatorioenemigo() 
} 

function ataqueaire () {
        ataquejugador = 'AIRE'
        ataquealeatorioenemigo() 
}
 
function ataquealeatorioenemigo () {
        let ataquealeatorio = Math.floor(Math.random() * (4 - 1 + 1) + 1)
       
        if (ataquealeatorio == 1) {
                ataqueenemigo = "FUEGO"
                }
        else if (ataquealeatorio == 2) {
                ataqueenemigo = "AGUA"
               }
        else if (ataquealeatorio == 3) {
                ataqueenemigo = "TIERRA" 
                }    
        else if (ataquealeatorio == 4) {
                ataqueenemigo = "AIRE"
               }
        else {alert("hay un error")}
        
        juego()
}

function juego () {
        let spanvidasjugador = document.getElementById ("span-vidas-jugador")
        let spanvidasenemigo = document.getElementById ("span-vidas-enemigo")

        if (ataquejugador == ataqueenemigo){
                resultado = "EMPATE 🤦‍♀️"}
        else if (ataquejugador == 'AGUA' && ataqueenemigo == "FUEGO"){
                resultado = "GANASTE ❗"
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else if (ataquejugador == 'AIRE' && ataqueenemigo == "FUEGO"){
                resultado = "GANASTE ❗" 
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else if (ataquejugador == 'FUEGO' && ataqueenemigo == "TIERRA"){
                resultado = "GANASTE ❗"
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else if (ataquejugador == 'TIERRA' && ataqueenemigo == "AGUA"){
                resultado = "GANASTE ❗" 
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else if (ataquejugador == 'AGUA' && ataqueenemigo == "AIRE"){
                resultado = "GANASTE ❗"
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else if (ataquejugador == 'TIERRA' && ataqueenemigo == "AIRE"){
                resultado = "GANASTE ❗"       
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else {
                resultado = "PERDISTE 💔"
                vidasjugador --
                spanvidasjugador.innerHTML = vidasjugador
                
        }
       mensajes () 
       }
 function conteovidas (){
        if (vidasenemigo == 0) {
                mensajefinal ("FELICIDADES GANASTE!")
        }
        else if (vidasjugador == 0){
                mensajefinal ( "LO SENTIMOS HAZ PERDIDO, SIGUE INTENTANDO")
        }
        else {
        
        }
}
function mensajes (){
        let setionmensajes = document.getElementById ("mensajes")
        let parrafo = document.createElement ("p")
        
        parrafo.innerHTML = "Tu Mokemon " + nombremascotajugador + " ataco con " + ataquejugador  + ", " + mascotaenemigo + " ataco con " + ataqueenemigo + " = Resultado: " + resultado

        setionmensajes.appendChild(parrafo)
        conteovidas ()     
}
function mensajefinal (resultadofinal) {
        let setionmensajes = document.getElementById ("mensajes")
        let parrafo = document.createElement ("p")
        let botonataquefuego = document.getElementById("boton-fuego")
        let botonataqueagua = document.getElementById("boton-agua")
        let botonataquetierra = document.getElementById("boton-tierra")
        let botonataqueaire = document.getElementById("boton-aire")
        
        let seccionreiniciar = document.getElementById ("reiniciar")
        seccionreiniciar.style.display = "block"
        
                
        parrafo.innerHTML = resultadofinal

        setionmensajes.appendChild(parrafo)

        botonataquefuego.disabled =true
        botonataqueagua.disabled = true
        botonataquetierra.disabled = true
        botonataqueaire.disabled = true

        
               
}

function reiniciar () {
        let seccionataque = document.getElementById ("seccion-ataque")
        seccionataque.style.display = "none"
        let seccionreiniciar = document.getElementById ("reiniciar")
        seccionreiniciar.style.display = "none"
        location.reload ()

}
    window.addEventListener("load" , iniciarJuego)