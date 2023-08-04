import { cervezas } from "../productos.js";

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


// carrito
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carrito);


//productos
export const cervezas = [
  {
    id: 1,
    nombre: "ChachaCherry",
    tipo: "Sour",
    descripcion: "Frutal",
    porcentajeAlcohol: 8.5,
    precio: 18,
    imgUrl:
      "https://www.rockyridgebrewing.com.au/wp-content/uploads/2023/01/Can_3D_Full-Size-500-labels_2022-Cha-Cha-Cherry.png",
  },
  {
    id: 2,
    nombre: "Hazy Jungle",
    tipo: "IPA",
    descripcion: "Indian Pale Ale",
    porcentajeAlcohol: 7.2,
    precio: 19.5,
    imgUrl:
      "https://www.libertybrewing.co.nz/cdn/shop/files/Jungle-Juice-Hazy-IPA_1060x.png?v=1683789150",
  },
  {
    id: 3,
    nombre: "The Read Head",
    tipo: "Red Ale",
    descripcion: "Irish Red",
    porcentajeAlcohol: 6.5,
    precio: 17.95,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9AJS46pNQ4r9iQZ19qE9FPUDBbHS0t-D1w&usqp=CAU",
  },
  {
    id: 4,
    nombre: "Blacky",
    tipo: "Stout",
    descripcion: "Strong",
    porcentajeAlcohol: 9.5,
    precio: 22.5,
    imgUrl:
      "https://file.bungki.com/eyJidWNrZXQiOiJidW5na2kiLCJrZXkiOiJwdWJsaWMvc3RhdGljcy9pbWFnZXMvcHJvZHVjdHMvMjA5MzQvYi8yMDIyMDgwMzExMDg0NV8xNjU5NDk5NzI1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjEwMjQsImhlaWdodCI6MTAyNCwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
  },
  {
    id: 5,
    nombre: "Big Dank Resin",
    tipo: "IPA",
    descripcion: "Bitter Indian Pale Ale",
    porcentajeAlcohol: 5.8,
    precio: 20,
    imgUrl:
      "https://www.rockyridgebrewing.com.au/wp-content/uploads/2023/03/500mL-Can-Label-Mockup-Big-Dank-Resin.png",
  },
];





const getCervezas = async () => {
  const res= await fetch('/assets/data/data.json')
  return await res.json()
}

const listadoCervezas = document.querySelector('#listadoCervezas')
listadoCervezas.classList.add('row', 'w-100')

const cervezas = await getCervezas()

const renderCervezas = ( ) => {
  cervezas.forEach(cerveza => {

    const card = document.createElement('div')
    card.classList.add('card','col-4')

    card.innerHTML = `
    <div class='card-body'> 
       <img src="${cerveza.imgUrl}" class='w-100'>
    </div>
    `
    listadoCervezas.appendChild(card)
  });
}
