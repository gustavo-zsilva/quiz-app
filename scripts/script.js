const ul = document.querySelector('.options ul') // Pegar a lista onde os botões vão ser inseridos 
var nextBtn = document.querySelector('.next')
var correctAnswer = 2;
var wins = 0, loses = 0;

function load() {
    console.log('Body loaded');
    
    const button = document.createElement('button')
    button.classList.add('start-btn')
    button.innerHTML = 'Start Quiz'
    ul.appendChild(button)
    
    button.addEventListener('click', () => {
        button.style.display = 'none'
        return start()
    })
}

function start() {
    console.log('Quiz Started');

    loadItems()

    // FUNÇÃO RESPONSÁVEL POR CARREGAR OS ELEMENTOS NECESSÁRIOS
    function loadItems() {
        const question = document.querySelector('.question h1') // Questão
        const numberOfButtons = 4; // Define quantos botões selecionáveis existem em tela
        var fillNumbers = numberOfButtons === 2 ? fill(2) : fill(4); // Preenche os botões

    }

    // FUNÇÃO RESPONSÁVEL POR PREENCHER O CONTENT
    function fill(n) {
        const buttons = [] // Array onde ficam armazenados todos botões
        var li;

        for(var i = 1; i <= n; i++) {
            buttons[i] = document.createElement('button')
            li = document.createElement('li')
            li.appendChild(buttons[i])
            ul.appendChild(li)
        }
        
        return getClickedButton(buttons)

    }

    // FUNÇÃO RESPONSÁVEL POR PEGAR O INDEX DO BOTÃO CLICADO
    function getClickedButton(buttons) {
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                checkAnswer(buttons, button)
            })
        });

    }

    // FUNÇÃO RESPONSÁVEL POR CHECAR A RESPOSTA CERTA
    function checkAnswer(buttons, button) {
        var checkedByUser = buttons.indexOf(button)
        // console.log(answer)
        // var answer = checkedByUser == correctAnswer ? buttons[checkedByUser].style.backgroundColor = 'green' : buttons[checkedByUser].style.backgroundColor = 'red';
        if (checkedByUser == correctAnswer) {
            buttons[checkedByUser].style.backgroundColor = 'green'
            showAnswers(buttons, checkedByUser, true)

        } else {
            buttons[checkedByUser].style.backgroundColor = 'red'
            showAnswers(buttons, checkedByUser, false)
        }
    }

    // FUNÇÃO RESPONSÁVEL POR MOSTRAR AS RESPOSTAS CERTAS
    function showAnswers(buttons, checkedByUser, res) {
        
        if(res) {

            // Muda a cor de todos botões
            for(var i = 1; i <= buttons.length -1; i++) {
                buttons[i].style.backgroundColor = 'red'   
            }
            buttons[correctAnswer].style.backgroundColor = 'green'
            buttons[checkedByUser].style.border = '4px solid rgb(3, 70, 3)'
            wins += 1;

        } else {

            // Muda a cor de todos botões
            for(var i = 1; i <= buttons.length -1; i++) {
                buttons[i].style.backgroundColor = 'red'
            }
            buttons[correctAnswer].style.backgroundColor = 'green'
            buttons[checkedByUser].style.border = '4px solid rgb(100, 4, 4)'
            loses += 1;
        }

        nextBtn.classList.remove('hide')
        nextBtn.addEventListener('click', () => {
            nextQuestion(buttons)
        })

    }
    
}

// RESPONSÁVEL POR LIMPAR OS ELEMENTOS DA TELA E CARREGAR OS DA PRÓXIMA ETAPA
function nextQuestion(buttons) {
    console.log('Next question -->');

    // buttons.forEach(button => {
    //     button.style.display = 'none'
    // })
    // while(buttons.length > 0) {
    //     buttons.shift()
    // }
    buttons.length = 0
    console.log(buttons);
    
    nextBtn.classList.add('hide')
    start()
}