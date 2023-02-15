'use strict';
import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard, addStudent, modalAlert} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

btnAgregar.onclick = function (){
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = document.getElementById('promedio').value;
    const op = document.getElementById('opcion').value;

    if(validateString(name) && validateString(lastName) && op != 0){
        if (!isNaN(avg) && (vAvg(avg))){
            addStudent(name,lastName,avg,checkAvg)
        }else{
            document.querySelector('#promedio').value = "";
            modalAlert("Promedio Invalido");
        }
    }else{
        modalAlert("Datos Invalidos, revisar los datos");
    }
    formulario.reset();

}
btnMostrar.addEventListener("click", function(){
    paintCard("Estudiante");
})