//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    let mostrar = document.getElementById("mostrarPaises");
    mostrar.addEventListener("click", mostrarPaises);

    let agregar = document.getElementById("agregarPais");
    agregar.addEventListener("click", agregarPais);
    //TODO
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    let valores = "";
    for(let i = 0; i < paises.length; i++){
        valores += `<table class="table table-success table-striped">
                    <tr class="table-active">
                    <th scope="col">Nombre</th>
                    <th scope="col">Capital</th>
                    <th scope="col">Idioma Oficial</th>
                    <th scope="col">Moneda</th>
                    </tr>
                    <tr>
                        <td>${paises[i].nombre}</td>
                        <td>${paises[i].capital}</td>
                        <td>${paises[i].idioma_oficial}</td>
                        <td>${paises[i].moneda}</td>
                    </tr>
                    <tr class="bandera">
                    <td colspan="4"><img src="${paises[i].bandera}"></td>
                    </tr>
                    </table>`;
    }
    document.getElementById("paises").innerHTML = valores;
  //TODO
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let nuevopais = prompt("Ingrese el nombre del pais");
    let nuevaciudad = prompt("Ingrese el nombre de la capital");
    let nuevoidioma = prompt("Ingrese el idioma del país");
    let nuevamoneda = prompt("Ingrese la moneda del país");
    let nuevabandera = prompt("Ingrese el link de la bandera");
    

    if (nuevopais === null || nuevopais == '' 
    || nuevaciudad=== null || nuevaciudad == ''
    || nuevoidioma=== null || nuevoidioma == ''
    || nuevamoneda=== null || nuevamoneda == ''
    || nuevabandera=== null || nuevabandera == '') {
        alert("¡ERROR! Cancelando el ingreso, recuerde que no puede ingresar campos vacios");
        return false;
    }else{
    let pais = {nombre: nuevopais,
                capital: nuevaciudad,
                idioma_oficial: nuevoidioma,
                moneda: nuevamoneda,
                bandera: nuevabandera};
    paises.unshift(pais);
    }   

    let valores = "";
    for(let i = 0; i < paises.length; i++){
        valores += `<table class="table table-success table-striped">
                    <tr class="table-active">
                    <th scope="col">Nombre</th>
                    <th scope="col">Capital</th>
                    <th scope="col">Idioma Oficial</th>
                    <th scope="col">Moneda</th>
                    </tr>
                    <tr>
                        <td>${paises[i].nombre}</td>
                        <td>${paises[i].capital}</td>
                        <td>${paises[i].idioma_oficial}</td>
                        <td>${paises[i].moneda}</td>
                    </tr>
                    <tr class="bandera">
                    <td colspan="4"><img src="${paises[i].bandera}"></td>
                    </tr>
                    </table>`;
    }
    document.getElementById("paises").innerHTML = valores;
}