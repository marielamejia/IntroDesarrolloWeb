/******************************************/
/*Script para funcionamiento del formulario*/
/******************************************/

/*esperamos a que la página esté cargada --> no se ejecuta el código hasta que se cargue el html*/
document.addEventListener("DOMContentLoaded", () => {
    /*obtenemos el elemento donde se desplegará el mensaje (en este caso lo pusimos con id = mensaje en nuestro html*/
    const mensaje = document.getElementById("mensaje");
    /*buscamos si ya tenemos datos guardados, si si hay entonces muestra el mensaje*/
    const datosGuardados = localStorage.getItem("datosUsuario");
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        mensaje.textContent = `Hola ${datos.nombre}, tienes ${datos.edad} años, tu día de la semana favorito es ${datos.diaFavorito}.`;
    } 
    /*agregamos un listener al formulario para que cuando se envie se ejecute la función*/
    document.getElementById("infoForms").addEventListener("submit", (e) => {
    e.preventDefault();

    /*obtenemos los valores de los inputs por medio de sus ids declarados en el html*/
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const diaFavorito = document.getElementById("dia").value;

    /*creamos un objeto con los datos del usuario*/
    const datosUsuario = {
      nombre,
      edad,
      diaFavorito
    };

    /*guardamos los datos en localStorage como un string*/
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
    
    /*mostramos el mensaje con los datos ingresados*/
    mensaje.textContent = `Hola ${nombre}, tienes ${edad} años, tu día de la semana favorito es ${diaFavorito}.`;
  });
});