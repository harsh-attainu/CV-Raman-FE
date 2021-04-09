let welcome_card = $('#welcome-card');
let high_score = $('#high-score');
let start_quiz_btn = $('#start-quiz');
let quiz_card = $('#quiz-card');
let question_number = $('#question-number');
let question = $('#question');
let category = $('#category');
let choice1 = $('#choice1')[0];
let choice2 = $('#choice2')[0];
let choice3 = $('#choice3')[0];
let choice4 = $('#choice4')[0];
let highest_score = 0;

let questionerr = $('#question-err');


let next_btn = $('#next_btn');
let submit_btn = $('#submit_btn');

let result_card = $('#result-card');
let result_score = $('#result-score');
let play_again_btn = $('#play-again-btn');

let quizQuestions = [];
let current_question_number = 0;
let answers = [];

let loading = false;

start_quiz_btn.click(function(event) {
    if(loading==false) {
        start_quiz_btn.text('Loading ...');
        loading = true;
        fetchQuestions();
    }
    // 1. show the loading bar
    // 2. call the api
})

async function fetchQuestions() {
    try {
        let req = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        let res = await req.json();
        console.log("got the data")
        console.log(req);
        if(req.ok) {
            quizQuestions = res.results;

            //start the quiz
            loading = false;
            start_quiz_btn.text('Start the quiz');
            welcome_card.hide();
            quiz_card.show();
            moveToNextQuestion();
        } else {
            loading = false;
            start_quiz_btn.text('Error! Please click again to start');
            console.log("could not get the data")
        }
    } catch(e) {
        loading = false;
        start_quiz_btn.text('Error! Please click again to start');
        console.log("handle the error here as well")
    }
}

function moveToNextQuestion() {
    if(quizQuestions[current_question_number]) { //for last question it will not be executed

        let question_next = quizQuestions[current_question_number]; 
        
        let choices = question_next.incorrect_answers;
        choices.splice(Math.floor(Math.random()*10/3), 0, question_next.correct_answer);
        
        choices.forEach(function(value, i) {
            $(`#choice${i+1}-text`).html(value);
        });
        
        question_number.text(`Question ${current_question_number+1} out of 10`);
        question.html(question_next.question);
        category.html(`Catgeory: <u>${question_next.category}</u>`);  
        
        hideButtons();
        current_question_number++;
    }
}

function hideButtons() {
    
    if((current_question_number+1)==quizQuestions.length) {
        next_btn.hide();
        submit_btn.show();
    } else {
        submit_btn.hide();
        next_btn.show();
    }
}

next_btn.click(function() {
    questionerr.hide();
    saveSelectedAnswer();
})

submit_btn.click(function() {
    //save the last questions answer
    saveSelectedAnswer();

    //hide quiz card
    //show result card

    quiz_card.hide();
    result_card.show();
    let score = 0;

    quizQuestions.forEach(function(question, index) { //calculate total score
        console.log(index);
        if(answers[index].answer == question.correct_answer) {
            score++;
        }
    });

    //show the result
    result_score.text(`You scored ${score}/${quizQuestions.length}`) 

    if(score>highest_score) { //check whether the score is more than previous score or not
        highest_score = score;
        high_score.text(`${score}/${quizQuestions.length}`);
    }
})

play_again_btn.click(function() {
    //hide result card
    //show welcome card
    //reset state
    result_card.hide();
    welcome_card.show();
    answers = [];
    quizQuestions = [];
})

function saveSelectedAnswer() {
    if(choice1.checked) {
        answers.push({id:current_question_number, answer: $(`#choice1-text`).text()})
        choice1.checked=false;
        moveToNextQuestion();
    } else if( choice2.checked) {
        answers.push({id:current_question_number, answer: $(`#choice2-text`).text()})
        choice2.checked=false;
        moveToNextQuestion();
    } else if( choice3.checked) {
        answers.push({id:current_question_number, answer: $(`#choice3-text`).text()})
        choice3.checked=false;
        moveToNextQuestion();
    }else if(choice4.checked) {
        answers.push({id:current_question_number, answer: $(`#choice4-text`).text()})
        choice4.checked=false;
        moveToNextQuestion();
    } else {
        questionerr.show();
    }
}