
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import {getFirebaseConfig} from "./firebase-config";
import {tarjeta} from "./tarjeta";

//funcion  que registra al usuario en la base de datos
function registrarUsuario(usuario){

   
    const db = getDatabase();
    const referenciaUsuario = ref(db,"Usuario/"+usuario.NOMBRE);
    set(referenciaUsuario,usuario);

}

const nombreEstudiante= document.getElementById("estudiante");
const codigoEstudiante= document.getElementById("codigo");
const cursoEstudiante= document.getElementById("curso");

const matricularBoton = document.getElementById("matricularBtn");

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const nobono = document.getElementById("nonbono");

const bonoPlata = document.getElementById("bonoplata");

const bonoOro = document.getElementById("bonoro");

//funcion que obtiene la info de los usuarios desde la base de datos
function obtenerUsuarios(){
    const db = getDatabase();
    const referencia = ref(db,"Usuario");


    onValue(referencia,(snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        cargarInfo(data);
    });
}


//para que la info aparezca en firebase
const subirDatos = (e,ev)=>{
    let usuario = {
        NOMBRE: nombreEstudiante.value,
        CODIGO: codigoEstudiante.value,
        CURSO: cursoEstudiante.value,
        PARTICIPACIONES: 0

    };

    registrarUsuario(usuario);
};

//poner info de las tarjetas y que cambie de lugar 
function cargarInfo(info){
    nobono.innerHTML="";
    bonoPlata.innerHTML="";
    bonoOro.innerHTML="";

    if (info){
        Object.keys(info).forEach((k,index)=>{

            let carta = new tarjeta (info[k]);
           
         
            if (info[k].PARTICIPACIONES <= 5){
                nobono.appendChild(carta.crearTarjeta());
            }

            if(info[k].PARTICIPACIONES >5 && info[k].PARTICIPACIONES  <= 10 ){
                
                bonoPlata.appendChild(carta.crearTarjeta());

            }

            if(info[k].PARTICIPACIONES>10){

                bonoOro.appendChild(carta.crearTarjeta());
            }

        });
    }

    
}
obtenerUsuarios();
//llamar metodo en el boton 
matricularBoton.addEventListener("click",subirDatos);
