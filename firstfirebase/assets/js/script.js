import { registrarPersona } from "./promesas.js";
window.addEventListener("load", ()=>{
    document.getElementById("btnregistrar").addEventListener("click",registrar);
})

const registrar = ()=>{
    //Recuperoo elemento
    let eNombre = document.getElementById("nombre");
    //Recupero valor del elemento
    let vNombre = eNombre.value;
    //Creo un objeto con los datos recuperados
    let objeto = {nombre:vNombre};
    //Envio a una funcion dque registre
    //console.log(objeto);
    //cargar un icono de loadig..
    registrarPersona(objeto).then(()=>{
        alert("se registra con exito")
        //quitar el icono de loading
    }).catch((error)=>{
        console.log(error);
    });
    };

//conectarse a firestore para poder crear la base de datos, luego a agragar datos y usar addDoc
//importar addDoc para promesas
//importar firestore a firebase 
//export const db = getFirestore(app); para exportar la base de datos creada
