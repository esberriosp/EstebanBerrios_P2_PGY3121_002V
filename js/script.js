
function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=" + service;
}

function getBasePathindex(service) {
    return "https://chilealerta.com/api/query/?user=andr3iss&select=" + service +"&limit={1}";
}

function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}

function createRowAlert(post_title, magnitude, latitude, longitude, alert_date) {
    return '<tr><td>' + post_title + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td><td>' + alert_date + '</td></tr>';
}

function enviarformulariovalidado() {
    var nombre = document.getElementById('nombreUsuario');
    var correo = document.getElementById('correoElectronico');
    var telefono = document.getElementById('numeroTelefono');
    var comuna = document.getElementById('id_comuna')
    var error = document.getElementById('error');
    error.style.color = 'red';

    var mensajesError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Debes Ingresar tu nombre');
    }

    if(correo.value === null || correo.value ===''){
        mensajesError.push('Debe ingresar al menos un correo');
    }

    if (!correo.value.includes('@gmail.com') || !correo.value.includes('@duocuc.cl') || !correo.value.includes('@profesor.duoc.cl')) {
        mensajesError.push('Dominio de correo electronico no permitido');
    }

    if (comuna.value === null || comuna.value === ''|| comuna.value === 'Seleccione una comuna..') {
        mensajesError.push('Debes seleccionar una comuna');
    }

    error.innerHTML = mensajesError.join(',');


    return false;
}

