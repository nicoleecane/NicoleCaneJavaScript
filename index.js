import { cervezas } from "./productos.js";

const listadoCervezas = document.getElementById("listadoCervezas");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")

const carrito = [];

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
    carrito.push({
      id:cerveza.id,
      img:cerveza.imgUrl,
      nombre:cerveza.nombre,
      precio:cerveza.precio,
    })

    console.log(carrito);
  });
}

verCarrito.addEventListener("click", ()=>{
  modalContainer.innerHTML = "";
 
  modalContainer.style.display="block";
  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class="modal-header-title"> Carrito </h1>
  `;
  modalContainer.appendChild(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button"

  modalButton.addEventListener("click", () => {
    modalContainer.style.display="none";
  });

  modalHeader.appendChild(modalButton);



  
   carrito.forEach((cerveza) => {

    let carritoContent = document.createElement("div")
   carritoContent.className="modal-content"
   carritoContent.innerHTML = `
    <img src="${cerveza.img}">
    <h3>${cerveza.nombre}</h3>
    <p>${cerveza.precio} $ </p>
      `;

      modalContainer.appendChild(carritoContent)
   });
 

  const total = carrito.reduce((acc,el) => acc + el.precio, 0);

  const totalBuying =document.createElement("div")
  totalBuying.className= "total-content"
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.appendChild(totalBuying);

});














/*const agregarAlCarrito = (id) => {
  const producto = cervezas.find((producto) => producto.id == id);
  cervezasGuardadas.push(producto);
  console.log(cervezasGuardadas);
  guardarLocal("carrito", cervezasGuardadas);
};

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};
*/
