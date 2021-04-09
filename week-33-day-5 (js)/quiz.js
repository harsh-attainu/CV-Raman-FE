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

let questionerr = $('#question-err');
let questionstatus = $('#question-status');


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
    // 1. show the loading 
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
        console.log(e);
        loading = false;
        start_quiz_btn.text('Error! Please click again to start');
        console.log("handle the error here as well")
    }
}

function moveToNextQuestion() {
   
    if(quizQuestions[current_question_number]) { //for last question it will not be executed
        resetChoicesClasses();
        let question_next = quizQuestions[current_question_number]; 
        
        let choices = question_next.incorrect_answers;
        choices.splice(Math.floor(Math.random()*10/3), 0, question_next.correct_answer);
        
        choices.forEach(function(value, i) {
            $(`#choice${i+1}-text`).html(value);
        });
        
        question_number.text(`Question ${current_question_number+1} out of 10`); //+1 becuase of 0 based indexing, we do not want to show question 0
        question.html(question_next.question);
        category.html(`Catgeory: <u>${question_next.category}</u>`);  
        
        current_question_number++; //increment the question number
        next_btn.hide();
    }
}

submit_btn.click(function() {
    questionerr.hide();
    questionstatus.hide();
    if(choice1.checked) {
        checkAnswer(1);
        choice1.checked=false;
    } else if(choice2.checked) {
        checkAnswer(2);
        choice1.checked=false;
    } else if(choice3.checked) {
        checkAnswer(3);
        choice1.checked=false;
    }else if(choice4.checked) {
        checkAnswer(4);
        choice1.checked=false;
    } else {
        questionerr.show();
    }
});

function checkAnswer(id) {
    submit_btn.hide();
    next_btn.show();

    //show the next button everytime
    //check whether the selected answer is correct or not

    if($(`#choice${id}-text`).text() == quizQuestions[current_question_number-1].correct_answer) { //-1 because current_question_counter has already been incermeneted
        
        $(`#choice${id}-text`)[0].className='btn btn-success';
        questionstatus.show();
        questionstatus.text('Correct Answer!');
    } else {
        $(`#choice${id}-text`)[0].className='btn btn-danger';
        showCorrectAnswer();
        questionstatus.show();
        questionstatus.text('Incorrect Answer!');
    }

}



function showCorrectAnswer() {

    //loop over all choices elements and find and highlight the correct element with success class

    for(let i=1;i<=4;i++) {
        console.log(i);
        if($(`#choice${i}-text`).text() == quizQuestions[current_question_number-1].correct_answer) { //-1 because current_question_counter has already been incermeneted
            $(`#choice${i}-text`)[0].className='btn btn-success';
        }
    }
}

function resetChoicesClasses() {

    //loop over all choices elements and reset the class to orignal classes again

    for(let i=1;i<4;i++) {
        $(`#choice${i}-text`)[0].className='btn btn-outline-primary';
    }
}

next_btn.click(function() {
    //tip: go through test.js to understand how test code works first

    //todo: 1. call resetchoicesclasses to reset the radio buttons
    //todo: 2. move to the next question
    //todo: 3. create a score_counter to keep a tab of score to show in the end
    //todo: 4. handle the result card
    //todo: 5. handle the restart and the high score on the welcome card
    //todo: extra. add animations via jQuery's hide and show
    //todo: extra. add a difficulty selector in the welcome card. (add to fetch url: &difficulty=medium or &difficulty=easy or &difficulty=hard)

})