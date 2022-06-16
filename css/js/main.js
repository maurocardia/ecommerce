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


document.addEventListener("DOMContentLoaded",() =>{ 
  visualizarProducto()
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


function visualizarProducto(){
  let fragmentHTML = ""

  items.forEach(producto => {
    fragmentHTML +=
    `
    <div class="cardHoodies">
      <img src=${producto.image} class="productcard">
      <div id="details">
          <p class="price">${producto.price }</p>
          <p class="stock">${producto.quantity}: 10</p>
          <p class= "type">${producto.name}</p>

      </div>
      <button data-id="${producto.id}" class="add addhoodies">+</button>

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





//function contarArticulos(){//

function agregarArticulos(producto){
  let buscararticulo = compras.find(item => item.ide === producto.id)
  if(buscararticulo){
    compras[buscararticulo.index].nCantidades += 1

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

  compras.forEach( item =>{
    fragmentoHTML+=
    `
    <div class="item">
     <img src=${item.image} alt="">
     <p>${item.name}</p>
     <small>${item.nCantidades}</small>
    </div>
    `
  })
  contenedorcompras.innerHTML = fragmentoHTML
}










