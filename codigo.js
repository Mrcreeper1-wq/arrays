function registrar() {
    let usuario = document.getElementById("nuevoUsuario").value.trim();
    let contrasena = document.getElementById("nuevaContrasena").value.trim();
    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioExiste = usuarios.some(u => u.usuario === usuario);

    if (usuarioExiste) {
        mensaje.textContent = "El nombre de usuario ya está registrado";
        mensaje.style.color = "red";
        return;
    }

    usuarios.push({
        usuario: usuario,
        contrasena: contrasena
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    localStorage.setItem("usuarioSesion", usuario);

    mensaje.textContent = "Usuario creado correctamente";
    mensaje.style.color = "green";

    setTimeout(function() {
        location.href = "login.html";
    }, 1000);
}

function iniciarSesion() {
    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();
    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || contrasena === "") {
        mensaje.textContent = "Ingresa tu usuario y contraseña";
        mensaje.style.color = "red";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

    if (usuarioEncontrado) {
        mensaje.textContent = "Inicio de sesión correcto";
        mensaje.style.color = "green";

        
        localStorage.setItem("usuarioSesion", usuarioEncontrado.usuario);

        setTimeout(function() {
           
            location.href = "mantenimiento.html";
        }, 1000);
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
}