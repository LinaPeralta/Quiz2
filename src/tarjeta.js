import {getDatabase, ref, set, onValue, push} from "firebase/database";

export class tarjeta{

constructor(usuario){
  
    this.usuario = usuario;
}

crearTarjeta(){
    let card = document.createElement("div");
    card.className = "tarjetaEstudiante";

    let nombreTarjeta = document.createElement("h3");
    let codigoTarjeta = document.createElement("h4");
    let cursoTarjeta = document.createElement("h4");

    let participacionesTarjeta = document.createElement("h2");

    let sumarBtn = document.createElement("button");
    let borrarBtn = document.createElement("button");

    nombreTarjeta.className = "tarjetaNombre";
    codigoTarjeta.className = "tarjetaCodigo";
    cursoTarjeta.className = "tarjetaCurso";
    participacionesTarjeta.className = "tarjetaParti";
    sumarBtn.className = "sumarBoton";
    borrarBtn.className = "borrarBoton";

    nombreTarjeta.innerHTML= this.usuario.NOMBRE;
    codigoTarjeta.innerHTML= this.usuario.CODIGO;
    cursoTarjeta.innerHTML= this.usuario.CURSO;
    participacionesTarjeta.innerHTML = this.usuario.PARTICIPACIONES;
    sumarBtn.innerHTML = "+";
    borrarBtn.innerHTML = "-";

    card.appendChild(nombreTarjeta);
    card.appendChild(codigoTarjeta);
    card.appendChild(cursoTarjeta);
    card.appendChild(participacionesTarjeta);
    card.appendChild(sumarBtn);
    card.appendChild(borrarBtn);

    sumarBtn.addEventListener("click",(e,event)=>{

        const db = getDatabase();
        const referenciaUsuario = ref(db,"Usuario/"+this.usuario.NOMBRE+"/"+"PARTICIPACIONES");

        const nuevoValor = this.usuario.PARTICIPACIONES+=1;
        set(referenciaUsuario,nuevoValor);


    });

    borrarBtn.addEventListener("click",(e,event)=>{

        const db = getDatabase();
        const referenciaUsuario = ref(db,"Usuario/"+this.usuario.NOMBRE);

        set(referenciaUsuario,null);


    });
    

    return card;

}

};