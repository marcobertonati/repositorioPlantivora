let funcionando = "JS funcionando";

// Array de objetos el cual se actualizará cada vez que toquemos las funciones
let producto = [];

// Creada por las dudas, no tiene importancia en el código
let botones = [];
// Creada por las dudas, no tiene importancia en el código
let botonElegido;

// Contador de ID de productos creados
let contadorID = 0;


//FUNCIÓN AGREGAR PRODUCTOS: esta función crea el objeto-producto y lo pushea al array-de-bojetos producto. Dentro se encuentra la función mostrarProductos(); que imprime los productos en el html.
function agregarProducto() {

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
        id: contadorID
    }
    console.log(productoObjeto);

    producto.push(productoObjeto);
    localStorage.setItem("productos", JSON.stringify(producto));
    mostrarProductos(); 

}

//FUNCIÓN MOSTRAR DATOS: esta función imprime productos que se van a agregando. Está función se ejecuta dentro de agregarProductos();
function mostrarProductos() {

    // DEBERÍA MOSTRAR PRODUCTOS A PARTIR DEL LOCALSTORAGE //

    //Tomo el cuerpo de toda la tabla (abuelo)
    let tbTabla = document.getElementById("cuerpo-tabla")
    console.log(tbTabla);

    //Crea TR (fila) donde se alberta el nuevo producto
    let trProducto = document.createElement("tr");
    console.log(trProducto);

    tbTabla.appendChild(trProducto);

    //Crea TD donde se alberta el nuevo producto
    let tdNombre= document.createElement ("td");
    let tdCantidad= document.createElement ("td");
    let tdPrecio= document.createElement ("td");
    let tdBoton= document.createElement ("td"); 
    
    let botonEliminar= document.createElement("button"); //Crea el button del producto de arriba (div)
    
    let nombreJS = document.querySelector("#nombre");
    let cantidadJS = document.querySelector("#cantidad");
    let precioJS = document.querySelector("#precio");

    //Seleccionamos a .tablaProducto que es el DIV contenedor padre de todos los div hijo creados arriba.
    let mostrarProductoJS = document.querySelector(".fondo-tabla");


    // div.innerHTML=`${nombreJS.value} ${cantidadJS.value} ${precioJS.value}`;

    tdNombre.innerHTML= `${nombreJS.value}`;
    tdCantidad.innerHTML= `${cantidadJS.value}`;
    tdPrecio.innerHTML= `${precioJS.value}`;
    botonEliminar.innerHTML=" - ";
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
    trProducto.setAttribute("onclick", `limpiarItem(${contadorID})`); 

    // botonEliminar.setAttribute("id", `${contadorID}`);
    contadorID++;

    botones.push(botonEliminar);

    // ESTO SIRVE PARA CUANDO SE CREE EL BOTÓN TAMBIÉN SE AGREGE LA FUNCIÓN
    nombreJS.value="";
    cantidadJS.value="";
    precioJS.value="";
}


// FUNCION ELIMINAR TODO: Esta función limpiar el storage, el array de objetos y todos los hijos de .tablaProductos
function limpiarStorage(){

    let tbTabla = document.getElementById("cuerpo-tabla");

    // let eliminarProductosJS = document.querySelector(".tablaProducto");
    // console.log(eliminarProductosJS);

    let productosEliminados= document.querySelectorAll("tr");
    console.log(productosEliminados);

    for (i=1;i<productosEliminados.length;i++) { // ACÁ ES i=1 porque cuando aplicamos el 117 toma 1 TR que no es hijo de tbTabla, entonces i i=0 ese TR suelto rompe ya que no es hijo de tbTabla
        tbTabla.removeChild(productosEliminados[i]);
    }

    localStorage.clear();
    producto = [];

}
// Hacer un if para qeu si no hay productos en el localStorage lo imprima en un H2 o H3 etc.


// FUNCION ELIMINAR ITEM
// El problema acá es como ejecutamos la función si el ejecutar esta función depende de un elemento QUE SE CREA en esta función (En este caso, boton -)
function limpiarItem(idDiv){

    let tbTabla = document.getElementById("cuerpo-tabla")
    console.log(tbTabla);

    let productoEliminar = document.getElementById(idDiv);

    // let productoAEliminar = document.querySelectorAll(".productoNuevo");
    // console.log(productoAEliminar);

    // let botonesArray = document.querySelectorAll(".botonEliminar");
    // console.log(botonesArray);
    
    tbTabla.removeChild(productoEliminar);

    for (let i = 0; i<producto.length; i++) {

        if (producto[i].id == idDiv) {
            producto.splice(i,1);

            localStorage.setItem("productos",JSON.stringify(producto));
         
        } 
    }

    console.log(producto);

    // if (producto.length>=1) {
    //     producto.splice(id,1);
    //     console.log(producto);
    // } else {
    //     producto = [];
    // }


    // for (let i = 0; i < productoAEliminar.length;i++) {

    //     botonesArray[i].addEventListener("click", function () {

    //         localStorage.setItem("productos",JSON.stringify(producto.filter(productosNuevoArray => productosNuevoArray != producto[i])));

    //         tablaJS.removeChild(productoAEliminar[i]);

    //         producto.splice(i,1);

    //         console.log(producto);
    //         return producto;
    //     })

    // }

}
