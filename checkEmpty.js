document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const content = body.textContent || body.innerText;

    console.log('Verificando contenido de la página...');

    if (content.trim().length === 0) {
        console.log('Página vacía, redirigiendo a 404.html');
        window.location.href = '404.html';
    } else {
        console.log('Contenido encontrado en la página.');
    }
});