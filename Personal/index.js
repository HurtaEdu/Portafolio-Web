function validarForm(){
    verificar = true;
    var nombre = document.getElementById("Name");
    var email = document.getElementById("email");
    var comentario = document.getElementById("comentario");

    if(!nombre.value){
        alert("Este campo es requerido");
        nombre.focus();
        verificar = false;
    }
    else if(!email.value){
        alert("Este campo es requerido");
        email.focus();
        verificar = false;
    }
    else if(!comentario.value){
        alert("Este campo es requerido");
        comentario.focus();
        verificar = false;
    }
    else if(comentario.value.length > 255){
        alert("No se pueden usar más de 255 caracteres");
        comentario.focus();
        verificar = false;
    }
    if(verificar){
        alert("Formulario enviado exitosamente <3");
        document.getElementById("contacto-frm").submit();
    }
}



window.onload = function(){
     var botonEnviar = document.getElementById("enviar");
     botonEnviar.onclick = validarForm;
}