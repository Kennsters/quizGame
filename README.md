# quizGame Homework

###What the assignment is
In this assignment we were to create a timed multiple choice quiz that would test our knowledge of Javascript fundamentals. This quiz would be able to keep track of our scores and also deduct time if we were to answer incorrectly. When you finish through the questions or when the timer runs out, you will be taken to a finish page where you will be shown your score and the given an input box where you can login your initials and your score will be saved in a leaderboard where other people's scores are logged in. 

###Components
####HTML/CSS
We created a simple jumbotron using Bootstrap. We also created a list, score, timer and result divs in which we hid using CSS. 

####Javascript
#####Variables
We created the variables score, timer, and i (which would hold which question we would display on screen). We then created an array of objects called questions that would hold the question prompt, the choices, and the correct answer. 

#####Starting Quiz
We add an EventListener to the start button at the start page. This will display the list, score, timer, question, and multiple choices. The start a decrement timer that will start from 90 seconds and run down to 0 seconds. We then create an EventListener for each of the multiple choice selections. We will run the functions checkAnswer (), checkEnd(), and nextQuestion().

The checkAnswer function checks to see if our choice, which we targeted the textContent matches with the string of the correct answer. If it does we add 1 to the score and we will have a display that alerts the user that they have chosen the correct answer. However, if they did not choose the correct answer, then they are dedcuted 10 seconds from their time and we again alert the user that they have chosen the incorrect answer. We then add 1 to i which will reassign the new question prompt, choices, and correct answer from our array. 

The checkEnd function will check to see if we are at the last question of the lists of questions that we have built. We will compare i to the length of the array and if it is less then we return false which we compare to a value that we set isEnd. In line 100 we check to see if isEnd is === false and it is we continue to the next question. If true we will move to the endGame() function which will take us to the last page of our code. 

In our endGame fucntion we grab the entire div of our html page and change the innerHTML of the page that tells the user of their score and to also allow the user to input their initials to login their score onto the leaderboard. We are able to sort through and list the scores from highest score to lowest. We will save these onto our local storage so that the user can save their score. Once the user clicks submit, it will post their score onto a table that we've created and will also display the scores of other past users. 

You can then refresh the page and retake the quiz from the start. 