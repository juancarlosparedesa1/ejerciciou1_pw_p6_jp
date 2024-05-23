let intentos=0;
let puntaje=0;
function opcionCorrecta(){
    intentos++;
    if (intentos===1) {
        document.getElementById("idintentos").innerText=intentos;
        document.getElementById("idpuntaje").innerText="5";
        document.getElementById("idimageninicial").innerHTML='<img src="../images/pcolor.jpg" id="imageninicial" alt="No se puede cargar la imagen"></img>';
        document.getElementById("idopcorrecta").innerText="Felicitaciones, has seleccionado la opción correcta";
        document.getElementById("idopincorrecta").innerText="";

    }else{
        if (intentos===2) {
            document.getElementById("idintentos").innerText=intentos;
            document.getElementById("idpuntaje").innerText="3";
            document.getElementById("idimageninicial").innerHTML='<img src="../images/pcolor.jpg" id="imageninicial" alt="No se puede cargar la imagen"></img>';
            document.getElementById("idopcorrecta").innerText="Felicitaciones, has seleccionado la opción correcta";
            document.getElementById("idopincorrecta").innerText="";


        }else{
            if (intentos===3) {
                document.getElementById("idintentos").innerText=intentos;
                document.getElementById("idpuntaje").innerText="1";
                document.getElementById("idimageninicial").innerHTML='<img src="../images/pcolor.jpg" id="imageninicial" alt="No se puede cargar la imagen"></img>';
                document.getElementById("idopcorrecta").innerText="Felicitaciones, has seleccionado la opción correcta";
                document.getElementById("idopincorrecta").innerText="";
            }
        }
    }
    
}

function opcionIncorrecta() {
    intentos++;
        document.getElementById("idintentos").innerText=intentos;
        document.getElementById("idopincorrecta").innerText="Pokémon incorrecto, intentalo nuevamente";
    if (intentos===3) {
        reiniciar()
        
    }
}

function reiniciar(){
    document.getElementById("idintentos").innerText="0";
    document.getElementById("idpuntaje").innerText="0";
    document.getElementById("idimageninicial").innerHTML='<img src="../images/pnegro.jpg" id="imageninicial" alt="No se puede cargar la imagen"></img>';
    document.getElementById("idopcorrecta").innerText="";
    document.getElementById("idopincorrecta").innerText="";
    intentos=0;
    puntaje=0;

}