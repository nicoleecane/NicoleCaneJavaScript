
const pintarCarrito = () =>{

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

       let carritoContent = document.createElement("div");
       carritoContent.className="modal-content";
       carritoContent.innerHTML = `
       <img src="${cerveza.img}">
       <h3>${cerveza.nombre}</h3>
       <p>${cerveza.precio} $ </p>
       <p>Cantidad: ${cerveza.cantidad}</p>
       `;


       
      

      let eliminar = document.createElement("span");
      eliminar.innerText = "❌";
      eliminar.className = "delete-cerveza";
      eliminar.id = `eliminar-${cerveza.id}`;
      carritoContent.append(eliminar);

      modalContainer.appendChild(carritoContent)

      const botonEliminar = document.getElementById(`eliminar-${cerveza.id}`);


      botonEliminar.addEventListener("click", () => {
  
        eliminarProducto(cerveza.id);
     });


      
    });

    
  

 

   const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0);

   const totalBuying =document.createElement("div")
   totalBuying.className= "total-content"
   totalBuying.innerHTML = `total: ${total} $`;
   modalContainer.appendChild(totalBuying);

};

  verCarrito.addEventListener("click", pintarCarrito);




  const eliminarProducto = (id) => {

    const cervezaEncontrada = carrito.find((cerveza) => cerveza.id === id);
    carrito.splice(carrito.indexOf(cervezaEncontrada), 1);
    
    
    carritoCounter();
    pintarCarrito();
  };

  const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
  }
