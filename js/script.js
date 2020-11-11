window.onload = mostrarLocalStorage();
// Array de objetos el cual se actualizará cada vez que toquemos las funciones
let producto = [];

// Creada por las dudas, no tiene importancia en el código
let botones = [];

// Contador de ID de productos creados
let contadorID = 0;

//FUNCIÓN AGREGAR PRODUCTOS: esta función crea el objeto-producto y lo pushea al array-de-bojetos producto. Dentro se encuentra la función mostrarProductos(); que imprime los productos en el html.
function agregarProducto() {
  let productosDom = JSON.parse(localStorage.getItem("productos"));
  console.log(productosDom);

  if (productosDom === null) {
    let nombreJS = document.querySelector("#nombre");
    let cantidadJS = document.querySelector("#cantidad");
    let precioJS = document.querySelector("#precio");
    console.log(nombreJS);
    console.log(cantidadJS);
    console.log(precioJS);

    let productoObjeto = {
      nombre: nombreJS.value,
      cantidad: cantidadJS.value,
      precio: precioJS.value,
      id: contadorID,
    };
    console.log(productoObjeto);

    producto.push(productoObjeto);

    localStorage.setItem("productos", JSON.stringify(producto));
    mostrarProductos();

  } else {
    let nombreJS = document.querySelector("#nombre");
    let cantidadJS = document.querySelector("#cantidad");
    let precioJS = document.querySelector("#precio");
    console.log(nombreJS);
    console.log(cantidadJS);
    console.log(precioJS);

    let ultimoID = productosDom[productosDom.length - 1].id; //lo busqué en una página
    console.log(ultimoID);

    let productoObjeto = {
      nombre: nombreJS.value,
      cantidad: cantidadJS.value,
      precio: precioJS.value,
      id: ultimoID+1,
    };
    console.log(productoObjeto);

    productosDom.push(productoObjeto);

    localStorage.setItem("productos", JSON.stringify(productosDom));
    mostrarProductos();
  }
}

//FUNCIÓN MOSTRAR DATOS: esta función imprime productos que se van a agregando. Está función se ejecuta dentro de agregarProductos();
function mostrarProductos() {
  let productosDom = JSON.parse(localStorage.getItem("productos"));

  if (productosDom === null) {

    //Tomo el cuerpo de toda la tabla (abuelo)
    let tbTabla = document.getElementById("cuerpo-tabla");
    console.log(tbTabla);
  
    //Crea TR (fila) donde se alberta el nuevo producto
    let trProducto = document.createElement("tr");
    console.log(trProducto);
  
    tbTabla.appendChild(trProducto);
  
    //Crea TD donde se alberta el nuevo producto
    let tdNombre = document.createElement("td");
    let tdCantidad = document.createElement("td");
    let tdPrecio = document.createElement("td");
    let tdBoton = document.createElement("td");
  
    let botonEliminar = document.createElement("button"); //Crea el button del producto de arriba (div)
  
    let nombreJS = document.querySelector("#nombre");
    let cantidadJS = document.querySelector("#cantidad");
    let precioJS = document.querySelector("#precio");
  
    //Seleccionamos a .tablaProducto que es el DIV contenedor padre de todos los div hijo creados arriba.
    let mostrarProductoJS = document.querySelector(".fondo-tabla");
  
    // div.innerHTML=`${nombreJS.value} ${cantidadJS.value} ${precioJS.value}`;
  
    tdNombre.innerHTML = `${nombreJS.value}`;
    tdCantidad.innerHTML = `${cantidadJS.value}`;
    tdPrecio.innerHTML = `${precioJS.value}`;
    botonEliminar.innerHTML = " - ";
    botonEliminar.classList.add("btn");
    botonEliminar.classList.add("btn-dark");
  
    trProducto.appendChild(tdNombre);
    trProducto.appendChild(tdCantidad);
    trProducto.appendChild(tdPrecio);
    trProducto.appendChild(botonEliminar);
  
    // div.classList.add("productoNuevo");
  
    trProducto.setAttribute("id", `${contadorID}`);
  
    // div.appendChild(botonEliminar);
    // botonEliminar.classList.add("botonEliminar");
  
    // Se le setea la función limpiarItem(); al botón del producto creado
    botonEliminar.setAttribute("onclick", `limpiarItem(${contadorID})`);
  
    // botonEliminar.setAttribute("id", `${contadorID}`);
    contadorID++;
  } else {

     //Tomo el cuerpo de toda la tabla (abuelo)
     let tbTabla = document.getElementById("cuerpo-tabla");
     console.log(tbTabla);
   
     //Crea TR (fila) donde se alberta el nuevo producto
     let trProducto = document.createElement("tr");
     console.log(trProducto);
   
     tbTabla.appendChild(trProducto);
   
     //Crea TD donde se alberta el nuevo producto
     let tdNombre = document.createElement("td");
     let tdCantidad = document.createElement("td");
     let tdPrecio = document.createElement("td");
     let tdBoton = document.createElement("td");
   
     let botonEliminar = document.createElement("button"); //Crea el button del producto de arriba (div)
   
     let nombreJS = document.querySelector("#nombre");
     let cantidadJS = document.querySelector("#cantidad");
     let precioJS = document.querySelector("#precio");
   
     //Seleccionamos a .tablaProducto que es el DIV contenedor padre de todos los div hijo creados arriba.
     let mostrarProductoJS = document.querySelector(".fondo-tabla");
   
     // div.innerHTML=`${nombreJS.value} ${cantidadJS.value} ${precioJS.value}`;
   
     tdNombre.innerHTML = `${nombreJS.value}`;
     tdCantidad.innerHTML = `${cantidadJS.value}`;
     tdPrecio.innerHTML = `${precioJS.value}`;
     botonEliminar.innerHTML = " - ";
     botonEliminar.classList.add("btn");
     botonEliminar.classList.add("btn-dark");
   
     trProducto.appendChild(tdNombre);
     trProducto.appendChild(tdCantidad);
     trProducto.appendChild(tdPrecio);
     trProducto.appendChild(botonEliminar);
   
     // div.classList.add("productoNuevo");

     let ultimoID = productosDom[productosDom.length - 1].id; //lo busqué en una página
    console.log(ultimoID);
   
     trProducto.setAttribute("id", `${ultimoID}`);
   
     // div.appendChild(botonEliminar);
     // botonEliminar.classList.add("botonEliminar");
   
     // Se le setea la función limpiarItem(); al botón del producto creado
     botonEliminar.setAttribute("onclick", `limpiarItem(${ultimoID})`);
   
     // botonEliminar.setAttribute("id", `${contadorID}`);
     ultimoID++;

  }

  // ESTO SIRVE PARA CUANDO SE CREE EL BOTÓN TAMBIÉN SE AGREGE LA FUNCIÓN
  // nombreJS.value = "";
  // cantidadJS.value = "";
  // precioJS.value = "";
}


function mostrarLocalStorage() {
  let productosDom = JSON.parse(localStorage.getItem("productos"));
  console.log(productosDom);

  if (productosDom !== null) {
    let tbTabla = document.getElementById("cuerpo-tabla");
    console.log(tbTabla);

    for (let i = 0; i < productosDom.length; i++) {
      console.log(productosDom[i].nombre);

      //Crea TR (fila) donde se alberta el nuevo producto
      let trProducto = document.createElement("tr");
      console.log(trProducto);

      tbTabla.appendChild(trProducto);

      //Crea TD donde se alberta el nuevo producto
      let tdNombre = document.createElement("td");
      let tdCantidad = document.createElement("td");
      let tdPrecio = document.createElement("td");
      let tdBoton = document.createElement("td");

      let botonEliminar = document.createElement("button"); //Crea el button del producto de arriba (div)

      tdNombre.innerHTML = `${productosDom[i].nombre}`;
      tdCantidad.innerHTML = `${productosDom[i].cantidad}`;
      tdPrecio.innerHTML = `${productosDom[i].precio}`;

      botonEliminar.innerHTML = " - ";

      // Para chequear que el ID es correcto
      // botonEliminar.innerHTML = `${productosDom[i].id}`;


      botonEliminar.classList.add("btn");
      botonEliminar.classList.add("btn-dark");

      trProducto.appendChild(tdNombre);
      trProducto.appendChild(tdCantidad);
      trProducto.appendChild(tdPrecio);
      trProducto.appendChild(botonEliminar);

      // let contadorID = i;
      // console.log(contadorID);

      trProducto.setAttribute("id", `${productosDom[i].id}`);

      // div.appendChild(botonEliminar);
      // botonEliminar.classList.add("botonEliminar");

      // Se le setea la función limpiarItem(); al botón del producto creado
      botonEliminar.setAttribute("onclick", `limpiarItem(${productosDom[i].id})`);

      // botonEliminar.setAttribute("id", `${contadorID}`);

      // FALTA DARLE ID Y ONCLICK
    }
  }

}


// FUNCION ELIMINAR ITEM
// El problema acá es como ejecutamos la función si el ejecutar esta función depende de un elemento QUE SE CREA en esta función (En este caso, boton -)
function limpiarItem(idDiv) {
  let tbTabla = document.getElementById("cuerpo-tabla");
  console.log(tbTabla);

  let productoEliminar = document.getElementById(idDiv);
  console.log(productoEliminar);

  // let productoAEliminar = document.querySelectorAll(".productoNuevo");
  // console.log(productoAEliminar);

  // let botonesArray = document.querySelectorAll(".botonEliminar");
  // console.log(botonesArray);

  tbTabla.removeChild(productoEliminar);

  let productosDom = JSON.parse(localStorage.getItem("productos"));
  console.log(productosDom);

  for (let i = 0; i < productosDom.length; i++) {
    if (productosDom[i].id == idDiv) {
      productosDom.splice(i, 1);
      console.log(productosDom);

      localStorage.setItem("productos", JSON.stringify(productosDom));
    }
  }
}

// FUNCION ELIMINAR TODO: Esta función limpiar el storage, el array de objetos y todos los hijos de .tablaProductos
function limpiarStorage() {
  let tbTabla = document.getElementById("cuerpo-tabla");

  // let eliminarProductosJS = document.querySelector(".tablaProducto");
  // console.log(eliminarProductosJS);

  let productosEliminados = document.querySelectorAll("tr");
  console.log(productosEliminados);

  for (i = 1; i < productosEliminados.length; i++) {
    // ACÁ ES i=1 porque cuando aplicamos el 117 toma 1 TR que no es hijo de tbTabla, entonces i i=0 ese TR suelto rompe ya que no es hijo de tbTabla
    tbTabla.removeChild(productosEliminados[i]);
  }

  localStorage.clear();
  // producto = [];
}
