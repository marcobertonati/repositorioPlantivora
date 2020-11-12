// Se ejecuta la función mostrarLocalStorga(), la cual imprimirá productos en el DOM si existen en el LocalStorage previamente
window.onload = mostrarLocalStorage();


// Array de objetos el cual se utilizará solo si en el LocalStorage no hay nada
let producto = [];


// Contador de ID de productos creados: Esta variable solo se usará si en el LocalStorage todavía no hay nada
let contadorID = 0;


/////////////////////
///// FUNCIONES /////
/////////////////////


//FUNCIÓN AGREGAR PRODUCTOS: esta función crea el objeto-producto. Dentro se encuentra la función mostrarProductos(); que imprime los productos en el html.
function agregarProducto() {
  let productosDom = JSON.parse(localStorage.getItem("productos"));
  console.log(productosDom);

  // Entra al if si dentro del LocalStorage (productosDom) no hay nada
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

    // Entra al if si dentro del LocalStorage (productosDom) hay algo
  } else { // Entra al if si dentro del LocalStorage (productosDom) hay algo
    let nombreJS = document.querySelector("#nombre");
    let cantidadJS = document.querySelector("#cantidad");
    let precioJS = document.querySelector("#precio");
    console.log(nombreJS);
    console.log(cantidadJS);
    console.log(precioJS);

    // Tomo el valor del ID del último elemento del localStorage (productosDom), de esta manera solucionamos el hecho de que a la hora de resfrescar la página la variable let contador = 0; se seteara nuevamente en 0 y comenzara a pisar ID's de los primeros productos.
    let ultimoID = productosDom[productosDom.length - 1].id;
    console.log(ultimoID);

    let productoObjeto = {
      nombre: nombreJS.value,
      cantidad: cantidadJS.value,
      precio: precioJS.value,
      id: ultimoID+1, // sumamos siempre un +1 al último ID para que nunca se pise con el anterior
    };
    console.log(productoObjeto);

    productosDom.push(productoObjeto);
    localStorage.setItem("productos", JSON.stringify(productosDom));
    mostrarProductos(); // se ejecuta la función mostrar que imprime los elementos en el dom
  }
}



//FUNCIÓN MOSTRAR DATOS
//Esta función imprime productos que se van a agregando. Está función se ejecuta dentro de agregarProductos();
function mostrarProductos() {
  let productosDom = JSON.parse(localStorage.getItem("productos"));

  if (productosDom === null) { // Entra al if si dentro del LocalStorage (productosDom) no hay nada

    //Tomo el cuerpo de toda la tabla (abuelo) tbody
    let tbTabla = document.getElementById("cuerpo-tabla");
    console.log(tbTabla);
  
    //Crea TR (fila) donde se alberta el nuevo producto
    let trProducto = document.createElement("tr");
    console.log(trProducto);
  
    //Al cuerpo de la tabla (tbody) le appenchaildeamos la fila (tr)
    tbTabla.appendChild(trProducto);
  
    //Crea los TDs (columna dentro de cada fila -tr-) donde se setearán los valores que se pusieron en los inputs
    let tdNombre = document.createElement("td");
    let tdCantidad = document.createElement("td");
    let tdPrecio = document.createElement("td");
    // let tdBoton = document.createElement("td"); esta linea no es realmente necesaria, pero queda modo gráfico de que se crearía columna dentro de la fila para el botón
    let botonEliminar = document.createElement("button"); //Crea el button del producto de arriba (div)
  
    let nombreJS = document.querySelector("#nombre");
    let cantidadJS = document.querySelector("#cantidad");
    let precioJS = document.querySelector("#precio");
  
  
    // A cada elemento TD le imprimo los valores de los inputos colocados por el usuario.
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
  

    // Se le setea a a la TF (que contiene el producto agregado) un ID que luego servírá de parámetro para la función eliminar
    trProducto.setAttribute("id", `${contadorID}`);
  
    // Se le setea la función limpiarItem(); al botón del producto creado
    botonEliminar.setAttribute("onclick", `limpiarItem(${contadorID})`);
  
    contadorID++;

    //Limpio los inputs
    nombreJS.value = "";
    cantidadJS.value = "";
    precioJS.value = "";

  } else { // Entra al if si dentro del LocalStorage (productosDom) hay algo

     //Tomo el cuerpo de toda la tabla (abuelo)
     let tbTabla = document.getElementById("cuerpo-tabla");
     console.log(tbTabla);
   
     //Crea TR (fila) donde se alberta el nuevo producto
     let trProducto = document.createElement("tr");
     console.log(trProducto);
   
     //Al cuerpo de la tabla (tbody) le appenchaildeamos la fila (tr)
     tbTabla.appendChild(trProducto);
   
     //Crea TD donde se alberta el nuevo producto
     let tdNombre = document.createElement("td");
     let tdCantidad = document.createElement("td");
     let tdPrecio = document.createElement("td");
    //  let tdBoton = document.createElement("td");
   
     let botonEliminar = document.createElement("button"); //Crea el button del producto de arriba (div)
   
     let nombreJS = document.querySelector("#nombre");
     let cantidadJS = document.querySelector("#cantidad");
     let precioJS = document.querySelector("#precio");
   
   
   // A cada elemento TD le imprimo los valores de los inputos colocados por el usuario.
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
   

    // Busco el ID del último valor del ARRAY así no se pisa con su anterior.
     let ultimoID = productosDom[productosDom.length - 1].id; 
    console.log(ultimoID);
   
    // Se le setea a a la TF (que contiene el producto agregado) un ID que luego servírá de parámetro para la función eliminar
     trProducto.setAttribute("id", `${ultimoID}`);
   
     // Se le setea la función limpiarItem(); al botón del producto creado
     botonEliminar.setAttribute("onclick", `limpiarItem(${ultimoID})`);
   
     ultimoID++;

     //Limpio los inputs
     nombreJS.value = "";
     cantidadJS.value = "";
     precioJS.value = "";

  }

}



//FUNCIÓN MOSTRAR LOCAL STORAGE
//Esta función se ejecuta al iniciar la página. Si hay elemento en el localStorage los imprime
function mostrarLocalStorage() {

  //Traigo el localStorage
  let productosDom = JSON.parse(localStorage.getItem("productos"));
  console.log(productosDom);

  //Compruebo si el localStorage tiene algo. Si lo tiene, entra al if, sino, no muestra nada.
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
      // let tdBoton = document.createElement("td");
      let botonEliminar = document.createElement("button"); //Crea el button del producto de arriba (div)

      // Se inprimen los valores de los objetos del array de objetos del localStorage
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

      //Se imprime a TR el ID que tiene el producto en el localStorage
      trProducto.setAttribute("id", `${productosDom[i].id}`);

      // Se le setea la función limpiarItem(); al botón del producto creado
      botonEliminar.setAttribute("onclick", `limpiarItem(${productosDom[i].id})`);
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

  // Se elimina del dom
  tbTabla.removeChild(productoEliminar);

  // Traigo el localStorage para eliminarlo del mismo
  let productosDom = JSON.parse(localStorage.getItem("productos"));
  console.log(productosDom);

  //Recorro el localStorage hasta que en el if el ID que tomó arriba (linea 258) coincida con algúno de los objetos del array.
  for (let i = 0; i < productosDom.length; i++) {
    if (productosDom[i].id == idDiv) {

      //Se borra ese elemento
      productosDom.splice(i, 1);
      console.log(productosDom);

      //Se setea nuevamente el localStorage
      localStorage.setItem("productos", JSON.stringify(productosDom));
    }
  }
}



// FUNCION ELIMINAR TODO: 
//Esta función limpiar el storage, el array de objetos y el DOM
function limpiarStorage() {

  // Traigo el cuerpo de la tabla (tbody)
  let tbTabla = document.getElementById("cuerpo-tabla");

  // Traigo todos los elementos tr (por lo cual se va a borrar todas las filas del tbody), generando así un array.
  let productosEliminados = document.querySelectorAll("tr");
  console.log(productosEliminados);

  // Recorro el ARRAY para ir eliminando
  for (i = 1; i < productosEliminados.length; i++) {
    // ACÁ ES i=1 porque cuando aplicamos el llamado de los TR toma 1 TR que no es hijo de tbTabla, entonces i i=0 ese TR suelto rompe ya que no es hijo de tbTabla.
    tbTabla.removeChild(productosEliminados[i]);
  }

  localStorage.clear();
}
