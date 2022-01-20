


const formulario = document.getElementById('formulario');   // declaro antes de mis expresiones una constante para acceder a mi formulario mediante su id = formulario

const inputs = document.querySelectorAll('#formulario input');  // declaro constante para almcacenar todos los inputs de nuestro formulario y 
                                                                // con queryselectorall me los va a trasnformar en un arreglo de todos los input que esten dentro del formulario




//--------------------- EXPRESIONES REGULARES-------------------------- 

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const campos = {

	usuario: false,
	
	nombre: false,

	password: false,

	

	correo: false,
	
	telefono: false


}
const validarFormulario = (e) => {    // declaro mi constante validarFormulario , con su parámetro e

			
	switch (e.target.name)   {    //esta función lo q va a ser es usar un switch para cada input, y validando con el name
								   // de cada input vamos a tener cada caso distinto
	
								   
				case "usuario":          // entonces acá vamos a validar que lo el usuario ingrese en el input
				                         // coincida con nuestra expresión regular que declaramos arriba
				
					validarCampo(expresiones.usuario, e.target,'usuario');		 // ejecutamos esta función y le pasamos los 3 parámetros


				break;


				case "nombre":
				
					validarCampo(expresiones.nombre, e.target, 'nombre');


				break;

				case "password":
				
					validarCampo(expresiones.password, e.target, 'password');

					validarPassword2();

				break;

				case "password2":
				
                     validarPassword2();

				break;


				case "correo":
					
				
					validarCampo(expresiones.correo, e.target, 'correo');


				break;


				case "telefono":
				
                    validarCampo(expresiones.telefono, e.target,'telefono');

				break;

	}


}

const validarCampo = (expresion, input, campo) => {

if(expresion.test(input.value)){   //  si el usuario colocó todo correctamente 
																		 
	// va  acceder a cada id del grupo usuario y a su icono i y lo va a cambiar de color y cambiar la forma
document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');   
document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

campos[campo] = true;

}	else {            // si los datos no son correctos 

document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
document.querySelector(`#grupo__${campo}`).classList.add('fa-times-circle');
document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');


campos[campo]=false;
  }	

}

 const validarPassword2 = () =>{
 

	
	 const inputPassword1 = document.getElementById('password');
	 
	 const inputPassword2 = document.getElementById('password2');


	 if(inputPassword1.value !== inputPassword2.value){


		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');   
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');

		campos['password'] = false;

	 } else{


		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');   
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos['password'] = true;

	 }

 }


inputs.forEach((input) => {

		input.addEventListener('keyup', validarFormulario); // apenas ingresa una letra y levanta el dedo se va a ejecutar un código, el cual va  llamar a la función valirdarFormulario

		input.addEventListener('blur', validarFormulario);

	});

formulario.addEventListener('submit', (e) => {             // cuando el usuario presion el botón del tipo submit va a ejecutar una función del tipo flecha 

  e.preventDefault();


const terminos = document.getElementById('terminos');

if (campos.usuario && campos.nombre && campos.password && campos.correo &&campos.telefono && terminos.checked ){

 formulario.reset();

	document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

	setTimeout(() => {

	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
	}, 5000);


 document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {

	  icono.classList.remove('formulario__grupo-correcto');

 });

} else{

       document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');


}


});   
