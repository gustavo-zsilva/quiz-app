const startBtn = document.querySelector('#start-section button')
const nextButton = document.querySelector('.next')
const questionHeader = document.querySelector('.question')
const optionsContainer = document.querySelector('.options')

let shuffledQuestions, currentQuestionIndex; // Iniciou as variáveis 

startBtn.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// CARREGA TODOS ELEMENTOS INICIAIS EM TELA
function startGame() {
    console.log('Jogo começou');

    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5) // Seleciona uma resposta certa
    currentQuestionIndex = 0;
    
    questionHeader.classList.remove('hide')
    optionsContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionHeader.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        optionsContainer.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(optionsContainer.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startBtn.innerHTML = 'Restart'
        startBtn.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ],
    },
    {
        question: 'Is Web Development cool?',
        answers: [
            { text: 'Yes', correct: false },
            { text: 'Nope', correct: false },
            { text: '+-', correct: false },
            { text: 'Very much', correct: true }
        ]
    },
    {
        question: 'Best game',
        answers: [
            { text: 'Fortnite', correct: false },
            { text: 'Minecraft', correct: true },
            { text: 'PUBG', correct: false },
            { text: 'Fifa', correct: false }
        ]
    },
    {
        question: 'Best Youtuber',
        answers: [
            { text: 'MrBeast', correct: true },
            { text: 'Dream', correct: true },
            { text: 'DudePerfect', correct: true },
            { text: 'Markiplier', correct: true }
        ]
    }
]