
var NombreDispositivo = "";
// Función para obtener información sobre el dispositivo
function detectarDispositivo() {
    const userAgent = navigator.userAgent.toLowerCase();  // Obtenemos el userAgent en minúsculas
    let dispositivo = "Desconocido";  // Valor por defecto

    // Verificamos si el dispositivo es un teléfono móvil o una tableta
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        dispositivo = "Móvil";
        NombreDispositivo = dispositivo
    }
    // Verificamos si es un dispositivo de escritorio
    else if (/windows|macintosh|linux/i.test(userAgent)) {
        dispositivo = "Escritorio";
        NombreDispositivo = dispositivo
    }

    // Mostramos el dispositivo detectado
    console.log(`Dispositivo detectado: ${dispositivo}`);
    return dispositivo;
}

// Llamamos a la función para detectar el dispositivo
detectarDispositivo();

function redirect(){

    if (NombreDispositivo=="Escritorio") {
        console.log('Dispositivo de escritorio')
        window.location.href="index.html"
    } 
    if (NombreDispositivo=="Móvil") {
        window.location.href="index_movil.html"
    }
}

function Hidden(){
    if (NombreDispositivo=="Escritorio") {
        console.log('Dispositivo de escritorio')
        document.getElementById("hiddenbtn").hidden = true;
    }else{
        console.log('Dispositivo movil')
        document.getElementById("hiddenbtn").hidden = false;
    }
}

Hidden();




function Alerta(){
    Swal.fire({
    icon: "success",
    title: "¡El archivo ha sido descargado!",
    showConfirmButton: false,
    timer: 3000
    });
}

