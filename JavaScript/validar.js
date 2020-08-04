/*Apartados y paginas del menu de navegacion*/
var Navegar = function(){
	alert("¡Apartado en desarrollo!")
}
 
var validar1 = function(){
	alert("¡Pagina en desarrollo!");
}

/*Validaciones del formulario*/
var validar = function (){
	var codigo, sexo, tamaño, edad, peso, especie, expresion, expresion1, expresion2;
	codigo = document.getElementById("numero").value;
	sexo = document.getElementById("Sex").value;
	tamaño = document.getElementById("Altura").value;
	edad = document.getElementById("Edad").value;
	peso = document.getElementById("Peso").value;
	especie = document.getElementById("Especie").value;
	expresion = /[0-9]+\.+[0-9]+\s+[A-Za-z]/;
	expresion1 = /[0-9]+\s+[A-Za-z]/;
	expresion2 = /[A-Za-z]/;

	if(codigo === "" || sexo === "" || tamaño === "" || edad === "" || peso === "" || especie === ""){
       alert("Todos los campos son requeridos");
       return false;
	}

	else if(codigo.length>4){
	   alert("El CODIGO es muy largo.");
       return false;
	}

	else if(isNaN(codigo)){
	   alert("El campo CODIGO solo debe contener datos numericos.");
       return false;
	}

	else if(sexo === "..."){
	   alert("Seleccione una opcion en el campo SEXO.");
       return false;
	}

	else if(!expresion.test(tamaño)){
	   alert("El campo TAMAÑO debe contener numeros decimales y caracteres por separado.");
       return false;
	}

	else if(!expresion.test(peso)){
	   alert("El campo PESO debe contener numeros decimales y caracteres por separado.");
       return false;
	}

	else if(!expresion1.test(edad)){
	   alert("El campo EDAD debe contener datos numericos y caracteres por separado.");
       return false;
	}

	else if(!expresion2.test(especie)){
	   alert("El campo ESPECIE solo debe contener caracteres.");
       return false;
	}

	else{
		alert("PROCESO LOGRADO EXITOSAMENTE.");
	}
}