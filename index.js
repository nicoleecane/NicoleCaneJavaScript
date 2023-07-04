/*let edad = Number(
  prompt("Para navegar este sitio usted debe ser mayor de 18. Ingrese su edad:")
);
console.log(18);

function validarEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

if (validarEdad(edad)) {
  alert("Sos mayor de edad. Bienvenido!!");

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
      alert(
        "Credenciales incorrectas. Intentos restantes: " +
          (intentosMaximos - intentos)
      );
    }
  }

  if (intentos === intentosMaximos) {
    alert(
      "Has excedido el número máximo de intentos. Tu cuenta ha sido bloqueada."
    );
  }
} else {
  alert("Sos Menor de edad. No podes navegar este sitio.");
  window.close();
}*/

// Segunda Pre entrega

class Cerveza {
  constructor(nombre, tipo, descripcion, porcentajeAlcohol, precio) {
    this.nombre            = nombre;
    this.tipo              = tipo;
    this.descripcion       = descripcion;
    this.porcentajeAlcohol = parseFloat(porcentajeAlcohol);
    this.precio            = parseFloat(precio);
  }
  masIva(){
    return this.precio * 1.26;
  }
}


const cerveza1 = new Cerveza("ChachaCherry","Sour", "frutal", 8.5, 18 );
const cerveza2 = new Cerveza("Hazy Jungle", "IPA", "Indian Pale Ale", 7.2, 19.50);
const cerveza3 = new Cerveza("The Read Head","Red Ale","Irish Red", 6.5, 17.95 );
const cerveza4 = new Cerveza("blacky", "Stout","Strong", 9.2, 22.50);
const cerveza5 = new Cerveza("Big Dank Resin", "IPA", "Bitter Indian Pale Ale", 5.8, 20);

//console.log(cerveza1)

// array de cervezas
const cervezas = [cerveza1, cerveza2, cerveza3,cerveza4, cerveza5];

//acceder a las propiedades de las cervezas
 /*console.log( cervezas[0].nombre);
 console.log( cervezas[1].tipo);
 console.log( cervezas[2].descripcion);
 console.log( cervezas[3].porcentajeAlcohol);
 console.log( cervezas[4].precio);*/

 const busqueda = prompt("Ingrese el nombre de la cerveza que desea buscar:");

 for (let i =0; i < cervezas.length; i++) {
  if (cervezas[i].nombre.toLowerCase().includes(busqueda.toLowerCase)) {
  console.log("===========================");
  console.log("Nombre: " + cervezas [i].nombre);
  console.log("Tipo: " + cervezas [i].tipo);
  console.log("Descripcion: " + cervezas [i].descripcion);
  console.log("ABV: " + cervezas [i].porcentajeAlcohol);
  //console.log("Precio: " + cervezas[i].precio)
  console.log("Precio mas Iva: " + cervezas [i].masIva());
  }  //else {
    //alert("Disculpas! No tenemos esa Cerveza en stock.");
  //}
  
  
 }

 
/* cerveza1.masIva();
 cerveza2.masIva();
 cerveza3.masIva();
 cerveza4.masIva();
 cerveza5.masIva();*/
