
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


       modalContainer.appendChild(carritoContent)
      

      let eliminar = document.createElement("span");
      eliminar.innerText = "❌";
      eliminar.className = "delete-cerveza";
      carritoContent.append(eliminar);

     
    });

    
  

 

   const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0);

   const totalBuying =document.createElement("div")
   totalBuying.className= "total-content"
   totalBuying.innerHTML = `total: ${total} $`;
   modalContainer.appendChild(totalBuying);

};

  verCarrito.addEventListener("click", pintarCarrito);
  
  const eliminarProducto= (id) =>{
    const foundId = cervezas.find((cerveza) => cerveza.id) ;

    cervezas = cervezas.filter((cervezaId) => {
       return cervezaId !== foundId;
    })
    
    carritoCounter();
    pintarCarrito();
  };

  const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
  }
