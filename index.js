import { cervezas } from "./productos.js";

const listadoCervezas = document.getElementById("listadoCervezas");

const cervezasGuardadas = [];

const divRow = document.createElement("div");
divRow.classList.add("row", "w-100");

for (const cerveza of cervezas) {
  const divCard = document.createElement("div");
  divCard.classList.add("card", "col-4");
  divCard.innerHTML = `
 <div class='card-body'>
    <img src='${cerveza.imgUrl}' class='card-img-top' alt=''
    <h3>Type: ${cerveza.tipo}</h3>
    <h3>Name: ${cerveza.nombre}</h3>
    <p>A%: ${cerveza.porcentajeAlcohol}</p>
    <p>Description:  ${cerveza.descripcion}</p>
    <p> Price: ${cerveza.precio * 1.26}</p>
    <div class='card-footer'>
      <button id='addToCart-${
        cerveza.id
      }' class='btn btn-outline-dark' w-100 > Add to Cart</button>
    </div>
 </div>
  `;
  divRow.appendChild(divCard);
  listadoCervezas.appendChild(divRow);

  const boton = document.getElementById(`addToCart-${cerveza.id}`);

  boton.addEventListener("click", () => {
    console.log(boton);
  });
}

const agregarAlCarrito = (id) => {
  const producto = cervezas.find((producto) => producto.id === id);
  cervezasGuardadas.push(producto);
  console.log(cervezasGuardadas);
  guardarLocal("carrito", cervezasGuardadas);
};

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};
