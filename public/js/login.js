window.onload = function () {
  console.clear();

  // Todos los campos obligatorios
  let form = document.querySelector("form#formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let errores = [];

    // errores del titulo
    let usuario = document.getElementById("username");
    let usuarioError = document.querySelector(".usuario-error");

    if (usuario.value == "") {
      usuarioError.classList.add("is-invalid");
      errores.push("El usuario no puede quedar vacio");
      usuarioError.innerHTML = "El Usuario no puede quedar vacío";
    } else {
      usuarioError.innerHTML = "";
      usuario.classList.remove("is-invalid");
    }

    // errores de la contraseña
    let contraseña = document.getElementById("password");
    let contraseñaError = document.querySelector(".contraseña-error");

    if (contraseña.value == "") {
      contraseñaError.classList.add("is-invalid");
      errores.push("La contraseña no puede quedar vacia");
      contraseñaError.innerHTML = "La contraseña no puede quedar vacía";
    } else {
      contraseñaError.innerHTML = "";
      contraseñaError.classList.remove("is-invalid");
    }

    console.log(errores);

    if (errores.length > 0) {
      let ul = document.querySelector("ul.errores");
      ul.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ul.innerHTML += "<li>" + errores[i] + "</li>";
      }
    } else {
      form.submit();
    }
  });
};
