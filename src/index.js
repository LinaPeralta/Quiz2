
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import {getFirebaseConfig} from "./firebase-config";

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


const subirDatos = (e,ev)=>{
    let usuario = {
        NOMBRE: nombreEstudiante.value,
        CODIGO: codigoEstudiante.value,
        CURSO: cursoEstudiante.value
    };

    registrarUsuario(usuario);
};

matricularBoton.addEventListener("click",subirDatos);