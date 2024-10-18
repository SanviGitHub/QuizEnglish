const quizzes = [
    {
        title: "Where is John?",
        options: [
            { text: "He work at the office.", correct: false },
            { text: "He works at the office.", correct: true },
            { text: "He is working at the office.", correct: false },
        ],
    },
    {
        title: "What did he say?",
        options: [
            { text: "He said he is busy.", correct: true },
            { text: "He say he is busy.", correct: false },
            { text: "He said he busy.", correct: false },
        ],
    },
    {
        title: "Where did he go?",
        options: [
            { text: "He go to the store.", correct: false },
            { text: "He goes to the store.", correct: false },
            { text: "He went to the store.", correct: true },
        ],
    },
];

let currentQuiz = 0;

function loadQuiz() {
    const quizTitle = document.getElementById('quiz-title');
    const quizOptions = document.getElementById('quiz-options');
    const progressBar = document.getElementById('progress-bar');
    const quizContent = document.getElementById('quiz-content');

    // Efecto de desvanecimiento
    quizContent.classList.remove('opacity-100');
    quizContent.classList.add('opacity-0');

    setTimeout(() => {
        quizTitle.textContent = quizzes[currentQuiz].title;
        quizOptions.innerHTML = '';

        quizzes[currentQuiz].options.forEach((option, index) => {
            const label = document.createElement('label');
            label.className = "flex items-center gap-4 rounded-lg border border-solid border-[#314c68] p-[15px] flex-row-reverse option";
            label.innerHTML = `
                <input type="radio" class="h-5 w-5 border-2 border-[#314c68] bg-transparent text-transparent checked:border-[#0d7cf2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#0d7cf2]" name="options" value="${index}" />
                <div class="flex grow flex-col"><p class="text-white text-sm font-medium leading-normal">${option.text}</p></div>
            `;
            quizOptions.appendChild(label);
        });

        // Actualizar barra de progreso
        progressBar.style.width = `${((currentQuiz + 1) / quizzes.length) * 100}%`;

        // Volver a mostrar el contenido del cuestionario
        quizContent.classList.remove('opacity-0');
        quizContent.classList.add('opacity-100');
    }, 300);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.textContent = '';
    }, 3000);
}

document.getElementById('submit-button').addEventListener('click', () => {
    const options = document.querySelectorAll('input[name="options"]');
    let userAnswer = { correct: false };

    options.forEach((option) => {
        if (option.checked) {
            userAnswer = quizzes[currentQuiz].options[option.value];
        }
    });

    if (userAnswer.correct) {
        currentQuiz++;
        if (currentQuiz < quizzes.length) {
            loadQuiz();
            showNotification("Correct answer! Moving to the next question.");
        } else {
            showNotification("Congratulations! You've completed the quiz.");
            window.location.href = 'index.html'; 
        }
    } else {
        showNotification("Incorrect answer. Please try again.");
    }
});

// Cerrar el cuestionario
document.getElementById('close-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Cargar el primer cuestionario
loadQuiz();
