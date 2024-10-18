const quizzes = [
    {
        title: "What was John doing when you arrived?",
        options: [
            { text: "He was working in the office.", correct: true },
            { text: "He worked in the office.", correct: false },
            { text: "He is working in the office.", correct: false },
        ],
        image: "continuos.png"
    },
    {
        title: "What were they doing last night at 8 PM?",
        options: [
            { text: "They watched a movie.", correct: false },
            { text: "They were watching a movie.", correct: true },
            { text: "They are watching a movie.", correct: false },
        ],
        image: "2asd.png"
    },
    {
        title: "What was Sarah doing when the phone rang?",
        options: [
            { text: "She cooked dinner.", correct: false },
            { text: "She cooks dinner.", correct: false },
            { text: "She was cooking dinner.", correct: true },
        ],
        image: "3asd.png"
    },
    {
        title: "What were the children doing in the park yesterday?",
        options: [
            { text: "They were playing football.", correct: true },
            { text: "They played football.", correct: false },
            { text: "They are playing football.", correct: false },
        ],
        image: "4asd.png"
    },
    {
        title: "What was Tom doing when you called him?",
        options: [
            { text: "He sleeps.", correct: false },
            { text: "He was sleeping.", correct: true },
            { text: "He slept.", correct: false },
        ],
        image: "5asd.png"
    },
    {
        title: "What were you doing at this time yesterday?",
        options: [
            { text: "I studied English.", correct: false },
            { text: "I was studying English.", correct: true },
            { text: "I am studying English.", correct: false },
        ],
        image: "6asd.png"
    }
];

let currentQuiz = 0;

function loadQuiz() {
    const quizTitle = document.getElementById('quiz-title');
    const quizOptions = document.getElementById('quiz-options');
    const progressBar = document.getElementById('progress-bar');
    const quizContent = document.getElementById('quiz-content');
    const quizImage = document.getElementById('quiz-image');

    // Efecto de desvanecimiento
    quizContent.classList.remove('opacity-100');
    quizContent.classList.add('opacity-0');

    setTimeout(() => {
        quizTitle.textContent = quizzes[currentQuiz].title;
        quizOptions.innerHTML = '';
        quizImage.src = quizzes[currentQuiz].image;

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
        notification.classList.remove('show');
    }, 3000);
}

document.getElementById('submit-button').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (!selectedOption) {
        showNotification("Please select an answer.");
        return;
    }

    const userAnswer = quizzes[currentQuiz].options[selectedOption.value];

    if (userAnswer.correct) {
        currentQuiz++;
        if (currentQuiz < quizzes.length) {
            loadQuiz();
            showNotification("Correct! Moving to the next question.");
        } else {
            showNotification("Congratulations! You've completed the quiz.");
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    } else {
        showNotification("Incorrect. Please try again.");
    }
});

// Cerrar el cuestionario
document.getElementById('close-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Cargar el primer cuestionario
loadQuiz();