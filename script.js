function goToPage(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = page;
    }, 500); // Ajusta este tiempo según la duración de tu animación
}

const toggleButton = document.getElementById('toggle-button');
const title = document.querySelector('#main-title');
const languageButton = document.getElementById('language-button');
const buttons = document.querySelectorAll('.button-item .title');
const descriptions = document.querySelectorAll('.button-item .description');
let isLightMode = false;
let isEnglish = true;

// Add event listener to the "Play Past Simple" button
document.querySelector('.button-item:first-child .play-button').addEventListener('click', function(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del botón
    goToPage('mant.html');
});

toggleButton.addEventListener('click', () => {
    if (isLightMode) {
        document.body.style.backgroundColor = '#1a1a2e';
        document.body.style.color = '#e0e0e0';
        toggleButton.style.color = '#e0e0e0';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
        toggleButton.style.color = '#333';
    }
    isLightMode = !isLightMode;
});

languageButton.addEventListener('click', () => {
    languageButton.classList.add('fade-out');

    setTimeout(() => {
        if (isEnglish) {
            title.textContent = "Aprende gramática inglesa con Viana";
            buttons[0].textContent = "Jugar Pasado Simple";
            buttons[1].textContent = "Jugar Pasado Continuo";
            descriptions[0].textContent = "¡Domina el tiempo pasado simple!";
            descriptions[1].textContent = "¡Practica el tiempo pasado continuo!";
            languageButton.textContent = "English";
        } else {
            title.textContent = "Learn English grammar with Viana";
            buttons[0].textContent = "Play Past Simple";
            buttons[1].textContent = "Play Past Continuous";
            descriptions[0].textContent = "Master the simple past tense!";
            descriptions[1].textContent = "Practice the past continuous tense!";
            languageButton.textContent = "Español";
        }
        languageButton.classList.remove('fade-out');
        isEnglish = !isEnglish;
    }, 300);
});