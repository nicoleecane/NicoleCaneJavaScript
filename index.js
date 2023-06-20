let edad = Number(prompt('Para navegar este sitio usted debe ser mayor de 18. Ingrese su edad:'))
console.log(18)

function validarEdad(edad) {
  if (edad >= 16) {
    return true;
  } else{
    return false;
  }
}

if(validarEdad(edad)) {
  alert("Sos mayor de edad. Bienvenido!!")


  let intentosMaximos = 3;
  let intentos = 0;
  let usuarioValido = "nicoleec";
  let contraseñaValida = "123456";
  
  while (intentos < intentosMaximos) {
    let usuario = prompt("Ingrese su usuario:");
    let contraseña = prompt("Ingrese su contraseña:");
  
    if (usuario === usuarioValido && contraseña === contraseñaValida) {
      alert("Inicio de sesión exitoso. ¡Bienvenido!");
      break;
    } else {
      intentos++;
      alert("Credenciales incorrectas. Intentos restantes: " + (intentosMaximos - intentos));
    }
  }
  
  if (intentos === intentosMaximos) {
    alert("Has excedido el número máximo de intentos. Tu cuenta ha sido bloqueada.");
  }
  
  
   
  
  
} else {
  alert("Sos Menor de edad. No podes navegar este sitio.")


  
} 



