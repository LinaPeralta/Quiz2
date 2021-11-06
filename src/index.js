
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import {getFirebaseConfig} from "./firebase-config";
import {tarjeta} from "./tarjeta";

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

function obtenerUsuarios(){
    const db = getDatabase();
    const referencia = ref(db,"Usuario");


    onValue(referencia,(snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        cargarInfo(data);
    });
}



const subirDatos = (e,ev)=>{
    let usuario = {
        NOMBRE: nombreEstudiante.value,
        CODIGO: codigoEstudiante.value,
        CURSO: cursoEstudiante.value,
        PARTICIPACIONES: 0

    };

    registrarUsuario(usuario);
};

function cargarInfo(info){
    nobono.innerHTML="";

    if (info){
        Object.keys(info).forEach((k,index)=>{

            let carta = new tarjeta (info[k]);
            nobono.appendChild(carta.crearTarjeta());
        });
    }
}

obtenerUsuarios();
matricularBoton.addEventListener("click",subirDatos);
