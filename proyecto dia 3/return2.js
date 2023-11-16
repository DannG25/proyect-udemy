function mostrarFecha() {
    alert(obtenerFecha());
}
function obtenerFecha() {
    var fecha = new Date();
    alert(fecha.toLocaleDateString('es-ES'));
    return mostrarFecha;
}
