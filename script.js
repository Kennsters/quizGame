// when we click start, timer will start and question 1 will appear
// question 1 will have 4 choices, either you get the answer right or wrong
//              what happens when wrong?
//                      you deduct from the timer
//                      log in their score as 1 wrong (maybe might not need to do this)
//                      then we move onto the next question
//              what heppens whenr ight?
//                  log in their score as 1 right
//                  move onto the next quesiton
//once timer or questions are taken up, we will set the page to game over and have their score listed onto the page
//we ask user to input initials and we save up in the local storage where user can access their score at a later time on the top left of the page

//might need to add a 'go back' function when looking at scores


//Questions

let score = 0
let timer = 90

let questionList = document.getElementById('questionList')
let questionPrompt = document.getElementById('questionPrompt')
let start = document.getElementById('start')
let A = document.getElementById('A')
let B = document.getElementById('B')
let C = document.getElementById('C')
let D = document.getElementById('D')


let questions = [
    {
        question: `Commonly used data types DO NOT include:`,
        choiceA: `strings`,
        choiceB: `booleans`,
        choiceC: `alerts`,
        choiceD: `numbers`,
        correct: `alerts`
    },
    {
        question: `The condition in an if/else statement is enclosed within _____.`,
        choiceA: `quotes`,
        choiceB: `curly brackets`,
        choiceC: `parentheses`,
        choiceD: `square brackets`,
        correct: `parentheses`
    },
    {
        question: `A very useful tool used during development and debugging for printing content to the debugger is:`,
        choiceA: `JavaScript`,
        choiceB: `terminal/bash`,
        choiceC: `for loops`,
        choiceD: `console.log`,
        correct: `console.log`
    },
    {
        question: `Arrays in JavaScript can be used to store`,
        choiceA: `numbers and strings`,
        choiceB: `other arrays`,
        choiceC: `booleans`,
        choiceD: `all of the above`,
        correct: `all of the above`
    },
    {
        question: `String values must be enclosed within _____ when being assigned to variables.`,
        choiceA: `commas`,
        choiceB: `curly brackets`,
        choiceC: `quotes`,
        choiceD: `parantheses`,
        correct: `quotes`
    },
];


document.addEventListener('click', event => {
    if (event.target.classList.contains('startBtn')) {
        questionList.style.display = "block"
        nextQuestion()
        start.remove()
    }
})

let i = 0;

function nextQuestion() {
    if (i >= 5) {
        endGame()
        return
    }
    questionPrompt.textContent = questions[i].question
    A.textContent = questions[i].choiceA
    B.textContent = questions[i].choiceB
    C.textContent = questions[i].choiceC
    D.textContent = questions[i].choiceD
}

document.addEventListener('click', event => {
    if (event.target.classList.contains('questionList')) {
        checkAnswer()
        let isEnd = checkEnd()
        if (isEnd === false) {
            nextQuestion()
        }
    }
})


function checkAnswer() {
    document.getElementById('result').innerHTML = ` `
    if (event.target.textContent === questions[i].correct) {
        score++
        document.getElementById('score').textContent = score
        let resultElem = document.createElement('div')
        resultElem.className = 'alert alert-success'
        resultElem.textContent = 'Correct Answer'
        document.getElementById('result').append(resultElem)
        setTimeout(nextQuestion, 2000);
    } else {
        let resultElem = document.createElement('div')
        resultElem.className = 'alert alert-danger'
        resultElem.textContent = 'Incorrect Answer'
        document.getElementById('result').append(resultElem)
        timer = timer - 10
        setTimeout(nextQuestion, 2000);
    }
    i++

}

function checkEnd() {
    if (i < questions.length) {
        return false
    } else {
        return true
    }

}

const endGame = () => {
    document.getElementById('quizGame').innerHTML = `
      <h1 class="display-2">Game Over!</h1>
    <p class="display-4">Your final score is: ${score}</p>
    <hr class="my-4">
    <p>Please enter your initials for the leaderboard</p>
    <p>Refresh the page to play again!</p>
    <form>
      <div class="form-group">
        <label for="intials">Intials</label>
        <input type="text" class="form-control" id="username">
        <button id="submitScore" class="btn btn-primary">Submit</button>
      </div>
    </form>
    `
    clearInterval(timeLeft)
}

const submitScore = submission => {
    console.log(submission)

    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []

    leaderboard.push(submission)

    localStorage.setItem('leaderboard', JSON.stringify(leaderboard))

    leaderboard.sort((a, b) => {
        return b.score - a.score
    })

    let tableElem = document.createElement('table')
    tableElem.className = 'table'
    tableElem.innerHTML = `
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">score</th>
        </tr>
    </thead>
    `

    let bodyElem = document.createElement('tbody')

    for (let i = 0; i < leaderboard.length; i++) {
        let rowElem = document.createElement('tr')
        rowElem.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${leaderboard[i].username}</td>
        <td>${leaderboard[i].score}</td>
        `
        bodyElem.append(rowElem)
    }

    tableElem.append(bodyElem)

    document.getElementById('quizGame').append(tableElem)

}

document.getElementById('start').addEventListener('click', () => {

    timeLeft = setInterval(() => {
        timer--
        document.getElementById('time').textContent = timer

        if (timer <= 0) {
            clearInterval(timeLeft)
            endGame()
        }
    }, 1000)
    nextQuestion()
})

document.addEventListener('click', event => {
    if (event.target.id === 'submitScore') {
        event.preventDefault()
        submitScore({
            username: document.getElementById('username').value,
            score: score
        })
    }
})