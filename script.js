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
let questions = [
    {
        question: `Commonly used data types DO NOT include:`,
        choiceA: `strings`,
        choiceB: `booleans`,
        choiceC: `alerts`,
        choiceD: `numbers`,
        correct: `C`
    },
    {
        question: `The condition in an if/else statement is enclosed within _____.`,
        choiceA: `quotes`,
        choiceB: `curly brackets`,
        choiceC: `parentheses`,
        choiceD: `square brackets`,
        correct: `C`
    },
    {
        question: `A very useful tool used during development and debugging for printing content to the debugger is:`,
        choiceA: `JavaScript`,
        choiceB: `terminal/bash`,
        choiceC: `for loops`,
        choiceD: `console.log`,
        correct: `D`
    },
    {
        question: `Arrays in JavaScript can be used to store`,
        choiceA: `numbers and strings`,
        choiceB: `other arrays`,
        choiceC: `booleans`,
        choiceD: `all of the above`,
        correct: `D`
    },
    {
        question: `String values must be enclosed within _____ when being assigned to variables.`,
        choiceA: `commas`,
        choiceB: `curly brackets`,
        choiceC: `quotes`,
        choiceD: `parantheses`,
        correct: `C`
    },
];


//QUESTION RENDER
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion () {
    let q = questions[runningQuestionIndex]
    question.innerHTML = `
        ${<p>q.question</p>}
    `
}



//COUNTER RENDER

let count = 60;

