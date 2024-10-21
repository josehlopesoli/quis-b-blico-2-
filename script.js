const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result');
const retryBtn = document.getElementById('retry-btn');
const shareBtn = document.getElementById('share-btn');
const questionElement = document.getElementById('question');
const resultMessage = document.getElementById('result-message');

let currentQuestionIndex, correct;

const questions = [
    {
        question: "Quem foi lançado na cova dos leões?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "Davi", correct: false },
            { text: "Elias", correct: false },
            { text: "Moisés", correct: false }
        ]
    },
    {
        question: "Qual é o primeiro livro da Bíblia?",
        answers: [
            { text: "Gênesis", correct: true },
            { text: "Êxodo", correct: false },
            { text: "Levítico", correct: false },
            { text: "Números", correct: false }
        ]
    },
    {
        question: "Quantos dias Deus levou para criar o mundo?",
        answers: [
            { text: "6 dias", correct: true },
            { text: "7 dias", correct: false },
            { text: "5 dias", correct: false },
            { text: "8 dias", correct: false }
        ]
    },
    {
        question: "Quem construiu a arca para salvar sua família e os animais do dilúvio?",
        answers: [
            { text: "Noé", correct: true },
            { text: "Abraão", correct: false },
            { text: "Moisés", correct: false },
            { text: "José", correct: false }
        ]
    },
    {
        question: "Qual era o nome do gigante que Davi derrotou?",
        answers: [
            { text: "Golias", correct: true },
            { text: "Sansão", correct: false },
            { text: "Herodes", correct: false },
            { text: "Caim", correct: false }
        ]
    },
    {
        question: "Qual discípulo negou Jesus três vezes?",
        answers: [
            { text: "Pedro", correct: true },
            { text: "João", correct: false },
            { text: "Judas", correct: false },
            { text: "Tiago", correct: false }
        ]
    },
    {
        question: "Quantos livros tem a Bíblia?",
        answers: [
            { text: "66", correct: true },
            { text: "72", correct: false },
            { text: "60", correct: false },
            { text: "70", correct: false }
        ]
    },
    {
        question: "Quem foi o primeiro homem criado por Deus?",
        answers: [
            { text: "Adão", correct: true },
            { text: "Noé", correct: false },
            { text: "Abraão", correct: false },
            { text: "Isaac", correct: false }
        ]
    },
    {
        question: "Quem recebeu as tábuas dos Dez Mandamentos?",
        answers: [
            { text: "Moisés", correct: true },
            { text: "Abraão", correct: false },
            { text: "Davi", correct: false },
            { text: "Josué", correct: false }
        ]
    },
    {
        question: "Quem foi engolido por um grande peixe?",
        answers: [
            { text: "Jonas", correct: true },
            { text: "Pedro", correct: false },
            { text: "Elias", correct: false },
            { text: "Isaías", correct: false }
        ]
    }
];

startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', startQuiz);
shareBtn.addEventListener('click', shareOnWhatsApp);

function startQuiz() {
    startBtn.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    correct = answer.correct;
    if (correct) {
        resultMessage.innerText = "Você acertou!";
    } else {
        resultMessage.innerText = "Você errou! Tente novamente.";
    }
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
}

function shareOnWhatsApp() {
    const message = correct ? "Eu acertei no Quiz Bíblico!" : "Tentei o Quiz Bíblico e errei. Você consegue fazer melhor?";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}