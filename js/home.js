const usuarioLogin = {
    nombre: 'admin',
    password: 'admin'
}
alert('Usuario: admin \ncontraseña: admin')

function iniciarSesion() {
    const usuario = document.getElementsByName('usrname')[0].value;
    const password = document.getElementsByName('password')[0].value;
    if (usuario !== "" && password !== "") {
        if (usuarioLogin.nombre == usuario && usuarioLogin.password == password) {
            sessionStorage.setItem("usuario", usuario);
            window.location.href = "./home.html";
        } else {
            swal("Upss", "El usuario o la contraseña no coinciden", "error");
        }
    } else {
        swal("Upss", "Falto diligenciar algún campo", "error");
    }
}