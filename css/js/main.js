const items = [
  {
      id: 1,
      name: 'Hoodie',
      price: "24.00",
      image: './images/featured1.png',
      category: 'hoodies',
      quantity: 10
  },
  {
      id: 2,
      name: 'Shirt',
      price: "14.00",
      image: './images/featured2.png',
      category: 'Shirts',
      quantity: 15
  },
  {
      id: 3,
      name: 'Sweatshirt',
      price: "14.00",
      image: './images/featured3.png',
      category: 'sweatshirts',
      quantity: 15
  }
]

let containermenu = document.querySelector('.menu')
let  men = document.querySelector('.unactive')
let iconmen = document.querySelector('.namv')
let closer = document.querySelector('.closer')
let cart = document.querySelector('.shopping')
let containershop = document.querySelector('.shoppingcontainer')
let closeshop = document.querySelector('.closeshop')
let listProducts = document.querySelector(".portafolioproduts")     
let compras = []
let contenedorcompras = document.querySelector(".compras-list")
let cerrarlistshopp = document.querySelector(".cerrarshop")
let itemshopp = document.querySelector(".item")
let circulo = document.querySelector("#circulo")



document.addEventListener("DOMContentLoaded",() =>{ 
  visualizarProducto()
  cargue()
  
})



containermenu.addEventListener("click",() => {
    men.classList.toggle("unactive");  
  })

closer.addEventListener("click",() => {
      men.classList.toggle("unactive")
    })

cart.addEventListener("click",()=>{
     containershop.classList.toggle('activeshopping')
  })
    
closeshop.addEventListener("click",()=>{
      containershop.classList.toggle('activeshopping')

  })

  cerrarlistshopp.addEventListener( "click", () =>{
    itemshopp.classList.remove(".item")
})




function visualizarProducto(){
  let fragmentHTML = ""

  items.forEach(producto => {
    fragmentHTML +=
    `
    <div class="cardHoodies">
      <img src=${producto.image} class="productcard">
      <div id="details">
          <p class="price">${producto.price }</p>
          <p class="stock">${producto.quantity}</p>
          <p class= "type">${producto.name}</p>

      </div>
      <button data-id="${producto.id}" class="add">+</button>

    </div>`

  })
  listProducts.innerHTML = fragmentHTML


  let productsButton = document.querySelectorAll(".add")

  productsButton.forEach((botones)=>{

    botones.addEventListener("click",()=>{
      let id = parseInt(botones.getAttribute("data-id"))
      let product = items.find(item => {
        return item.id === id
     
      
    })
    agregarArticulos(product)
  })
})
}


function agregarArticulos(producto){
  let buscararticulo = compras.find(item => item.id === producto.id)

  if(buscararticulo){
    let stock = compras[buscararticulo.index].quantity
    let nCantidades = compras[buscararticulo.index].nCantidades

    if(stock > nCantidades){
    compras[buscararticulo.index].nCantidades += 1
  }else{
    alert( "No hay suuficiente inventario")
  }

  }else{
    producto.nCantidades = 1
    producto.index= compras.length
    compras.push(producto)
  }
console.log(compras)
mostrarProductoscompras()
}

function mostrarProductoscompras (){
  let fragmentoHTML =``
  let  suma =0
  let cantprod = 0

  compras.forEach( item =>{
    fragmentoHTML+=
    `
    <div class="cardshop">
        <div class="item">
        <img src=${item.image} alt="" class="imagesproductos">
        <p>${item.name}</p>
        <div class="containerprice">
          <small class="textproducshop">#${item.nCantidades}</small> 
          <small class="priceshopp">$${item.price}</small> 
        </div>
      </div>
    
    </div>
    `

    let total= item.nCantidades*item.price
    suma += total 
    cantprod += item.nCantidades
  })
  fragmentoHTML += `
  
  <div class=totals>
  <p>Productos: ${cantprod}</p>
    <p>TOTAL: $${suma}</p>
  </div>`
  
  contenedorcompras.innerHTML = fragmentoHTML
  circulo.textContent=cantprod
  localStorage.setItem("productosl", JSON.stringify(compras));

 
}


function cargue(){
  
    compras = JSON.parse(localStorage.getItem("productosl"))
  }










