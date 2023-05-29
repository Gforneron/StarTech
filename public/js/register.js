window.onload = function () {
  const form = document.getElementById("register-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = [];
    const name = document.getElementById("name");
    const errorName = document.querySelector(".error-name");
    if (name.value === "") {
      name.style.borderBottom = "solid 2px crimson";
      errorName.classList.add("error");
      errores.push("Tiene que tener un nombre de usuario");
      errorName.innerHTML = "Tiene que tener un nombre de usuario";
    } else if (name.value.length < 2) {
      name.style.borderBottom = "solid 2px crimson";
      errorName.classList.add("error-name");
      errores.push("El nombre de usuario debe tener minimo 2 caracteres");
      errorName.innerHTML =
        "El nombre de usuario debe tener minimo 2 caracteres";
    } else if (name.value == Number(name.value)) {
      name.style.borderBottom = "solid 2px crimson";
      errorName.classList.add("error-name");
      errores.push("No puede poner numeros como nombre de usuario");
      errorName.innerHTML = "No puede poner numeros como nombre de usuario";
    } else {
      name.style.borderBottom = "solid 1px whitesmoke";
      errorName.classList.remove("error-name");
      errorName.innerHTML = "";
    }
    const emailExprecion = /^[^\s@]+@gmail\.com$/;
    const email = document.getElementById("email");
    const errorEmail = document.querySelector(".error-email");
    if (email.value === "") {
      email.style.borderBottom = "solid 2px crimson";
      errorEmail.classList.add("error");
      errores.push("Tiene que tener un correo ");
      errorEmail.innerHTML = "Tiene que tener un correo";
    } else {
      email.style.borderBottom = "solid 2px whitesmoke";
      errorEmail.classList.remove("error-email");
      errorEmail.innerHTML = "";
    }
    // validacion no terminada de correo
    // if (emailExprecion.test(email.value)) {
    //     email.style.borderBottom = 'solid 2px whitesmoke'
    //     errorEmail.classList.remove("error");
    //     errorEmail.innerHTML = "";
    // } else {
    //     email.style.borderBottom = "solid 2px crimson";
    //     errorEmail.classList.add("error");
    //     errores.push("Tiene que tener un correo valido");
    //     errorEmail.innerHTML = "Tiene que tener un correo valido";
    // }
    const imagen = document.getElementById("image-input");
    const imagenError = document.querySelector(".error-perfil");
    imagen.addEventListener("change", function (e) {
      e.preventDefault();
      if (!imagen || imagen === "undefined" || imagen === null) {
        imagenError.classList.add("error");
        imagenError.classList.add("error-img");
        imagenError.innerHTML = "Ingrese una imagen";
      } else {
        imagenError.classList.remove("error");
        imagenError.classList.remove("error-img");
      }
    });
    const password = document.getElementById("password");
    const passwordError = document.querySelector(".error-pass");
    if (password.value.length == 0) {
      password.style.borderBottom = "solid 2px crimson";
      errores.push("Ingrese una contraseña");
      passwordError.classList.add("error");
      passwordError.innerHTML = "Debe ingresar una contraseña";
    } else if (password.value.length < 8) {
      password.style.borderBottom = "solid 2px crimson";
      errores.push("Ingrese una contraseña mayor a 8 caracteres");
      passwordError.classList.add("error");
      passwordError.innerHTML = "La contraseña debe tener mas de 8 caracteres";
    } else {
      password.style.borderBottom = "solid 2px whitesmoke";
      passwordError.classList.remove("error");
      passwordError.innerHTML = "";
    }
    const confirmed = document.getElementById("confirmed-pass");
    const confirmedError = document.querySelector(".error-confirmed");
    if (confirmed.value !== password.value) {
      confirmed.style.borderBottom = "solid 2px crimson";
      confirmedError.classList.add("error");
      confirmedError.innerHTML = "Las contraseñas no son iguales";
    } else if (confirmed.value == 0) {
      confirmed.style.borderBottom = "solid 2px crimson";
      confirmedError.classList.add("error");
      confirmedError.innerHTML = "Ingrese una contraseña";
    } else if (confirmed.value < 1) {
      confirmed.style.borderBottom = "solid 2px crimson";
      confirmedError.classList.add("error");
      confirmedError.innerHTML =
        "La contraseña tiene que tener minimo 8 caracteres";
    } else {
      confirmed.style.borderBottom = "solid 2px whitesmoke";
      confirmedError.classList.remove("error");
      confirmedError.innerHTML = "";
    }
    if (errores.length > 0) {
      let ul = document.querySelector("ul.errores");
      ul.innerHTML = "";
      errores.forEach((err) => {
        ul.innerHTML = `<li> ${err} </li>` 
      })
    } else {
      form.submit();
    }
  });
};
