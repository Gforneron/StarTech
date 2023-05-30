window.onload = function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const nombreError = document.querySelector(".error-nombre");
    let errores = [];
    if (nombre.value.length < 4) {
      nombre.style.borderBottom = "solid 2px crimson";
      errores.push('Tiene que tener mas de 4 caracteres')
      nombreError.classList.add("error");
      nombreError.innerHTML = "Tiene que tener mas de 4 caracteres";
    } else if (nombre.value == Number(nombre.value)) {
      nombreError.classList.contains('error');
      nombre.style.borderBottom = "solid 2px crimson";
      nombreError.innerHTML = 'No puede tener numeros como nombre'
    } 
    else {
      nombre.style.borderBottom = "solid 2px whitesmoke";
      nombreError.classList.remove("error");
      nombreError.innerHTML = ''
    }
    // if (nombre.value.length < 4) {
    //   nombreError.classList.add("error");
    //   nombreError.innerHTML = "El nombre debe tener por lo menos 5 digitos";
    // } else if (nombre.value.length === 0) {
    //   nombreError.innerHTML = "Debe tener un nombre";
    //   nombre.style.borderBottom = "solid 2px crimson";
    // } else {
    //   nombre.style.borderBottom = "solid 2px white";
    //   nombreError.innerHTML = "";
    //   nombreError.classList.remove("error");
    // }
    const descuento = document.getElementById("descuento");
    const descuentoError = document.querySelector(".error-descuento");
    if (descuento.value.length < 1) {
      descuento.style.borderBottom = "solid 2px crimson";
      descuentoError.classList.add("error");
      errores.push("Tiene que tener algun descuento");
      descuentoError.innerHTML = "Tiene que tener algun descuento";
    } else if (descuento.value.length > 3) {
      descuentoError.classList.add("error");
      descuentoError.innerHTML = "El descuento tiene que ser menor a 3 digitos";
    } else {
      descuento.style.borderBottom = "solid 2px whitesmoke";
      descuentoError.classList.remove("error");
      descuentoError.innerHTML = "";
    }
    const imagen = document.getElementById("imagen");
    const extenciones = [".jpeg", "jpg", "png"];
    const imagenError = document.querySelector("#error-imagen-text");
    if (imagen.value === "") {
      imagen.style.border = "dashed 2px crimson";
      imagenError.classList.add("error");
      imagenError.innerHTML += "Ingrese una imagen del producto";
    } else if (imagen.value !== extenciones.values) {
      imagen.style.borderBottom = "dashed 2px crimson";
      imagenError.classList.add("error");
      imagenError.innerHTML += "Solo acepta JPG PNG y JPEG";
    } else {
      imagen.style.borderBottom = "dashed 2px whitesmoke";
      imagenError.classList.remove("error");
      imagenError.innerHTML += "";
    }
    const precioError = document.querySelector('.error-precio')
    const precio = document.getElementById('precio')
    if (precio.value === '') {
      precio.style.borderBottom = 'solid 2px crimson';
      precioError.classList.add('error')
      precioError.innerHTML = 'Ingrese un precio'
    } else if (precio.value.length < 0) {
      precio.style.borderBottom = 'solid 2px crimson';
      precioError.classList.add('error')
      precioError.innerHTML = 'El numero no tiene que ser negativo'      
    } else {
      precio.style.borderBottom = 'solid 2px whitesmoke';
      precioError.classList.remove('error')
      precioError.innerHTML = ''
    }
    if (errores.length > 0) {
      let ul = document.querySelector("ul.errores");
      ul.innerHTML = "";
      errores.forEach((err) => {
        ul.innerHTML = `<li> ${err} </li>`;
      });
    } else {
      form.submit();
    }
  }); 
};
