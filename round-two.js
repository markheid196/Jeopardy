
window.onload = init

// Constants representing players.
const p1 = 'Player 1'
const p2 = 'Player 2'

// Initialize player scores and current player turn.
let playerTurn = p
\
// Variables to handle current question status, attempts.
let currentQuestion = ''
let questionsAnswered = 0;

// Function to retrieve parameter from URL query string.
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
\
// Initialize player scores from URL parameters.
let p1score = 0;
let p2score = 0;

// Variable to hold winner's name.
p1score = parseInt(GetURLParameter("player1"));
p2score = parseInt(GetURLParameter("player2"));

// Variable to hold winner's name.
let categoryContent = {
  catOne2_400: {  
    answer: ["Paris", "paris"],
    question: "What is the capital city of France?",
    points: 400,
},
catOne2_800: {
    answer: ["Tokyo", "tokyo"],
    question: "What is the capital city of Japan?",
    points: 800,
},
catOne2_1200: {
    answer: ["Canberra", "canberra"],
    question: "What is the capital city of Australia?",
    points: 1200,
},
catOne2_1600: {
    answer: ["Ottawa", "ottawa"],
    question: "What is the capital city of Canada?",
    points: 1600,
},
catOne2_2000: {
    answer: ["Brasília", "Brasilia", "brasilia", "brasilía"],
    question: "What is the capital city of Brazil?",
    points: 2000,
},
catTwo2_400: {
    answer: ["Moby-Dick", "Moby Dick", "moby-dick", "moby dick"],
    question: "Which novel features Captain Ahab and the white whale?",
    points: 400,
},
catTwo2_800: {
    answer: ["1984", "Nineteen Eighty-Four", "nineteen eighty-four"],
    question: "Which dystopian novel was written by George Orwell?",
    points: 800,
},
catTwo2_1200: {
    answer: ["The Great Gatsby", "Great Gatsby", "great gatsby"],
    question: "Which novel by F. Scott Fitzgerald is set in the Roaring Twenties?",
    points: 1200,
},
catTwo2_1600: {
    answer: ["To Kill a Mockingbird", "To kill a mockingbird", "to kill a mockingbird"],
    question: "Which novel by Harper Lee addresses racial injustice in the Deep South?",
    points: 1600,
},
catTwo2_2000: {
    answer: ["Pride and Prejudice", "Pride & Prejudice", "pride and prejudice", "pride & prejudice"],
    question: "Which novel by Jane Austen features the character Elizabeth Bennet?",
    points: 2000,
},
catThree2_400: {
    answer: ["Gravity", "gravity"],
    question: "What force keeps planets in orbit around the sun?",
    points: 400,
},
catThree2_800: {
    answer: ["Einstein", "Albert Einstein", "einstein", "albert einstein"],
    question: "Who developed the theory of relativity?",
    points: 800,
},
catThree2_1200: {
    answer: ["Photosynthesis", "photosynthesis"],
    question: "What process do plants use to convert sunlight into energy?",
    points: 1200,
},
catThree2_1600: {
    answer: ["Newton", "Isaac Newton", "isaac newton", "newton"],
    question: "Who formulated the laws of motion and universal gravitation?",
    points: 1600,
},
catThree2_2000: {
    answer: ["DNA", "dna", "Deoxyribonucleic Acid", "deoxyribonucleic acid"],
    question: "What is the molecule that carries genetic information in living organisms?",
    points: 2000,
},
catFour2_400: {
    answer: ["George Washington", "Washington", "george washington", "washington"],
    question: "Who was the first President of the United States?",
    points: 400,
},
catFour2_800: {
    answer: ["The Roman Empire", "Roman Empire", "roman empire"],
    question: "Which empire was Julius Caesar a part of?",
    points: 800,
},
catFour2_1200: {
    answer: ["World War II", "WWII", "wwii", "World War 2", "world war 2"],
    question: "Which global conflict took place between 1939 and 1945?",
    points: 1200,
},
catFour2_1600: {
    answer: ["The French Revolution", "French Revolution", "french revolution"],
    question: "Which revolution began in 1789 and led to the rise of Napoleon?",
    points: 1600,
},
catFour2_2000: {
    answer: ["The Magna Carta", "Magna Carta", "magna carta"],
    question: "What document, signed in 1215, limited the powers of the English king?",
    points: 2000,
},
catFive2_400: {
    answer: ["The Beatles", "Beatles", "the beatles", "beatles"],
    question: "Which band is known for the songs 'Hey Jude' and 'Let It Be'?",
    points: 400,
},
catFive2_800: {
    answer: ["Beethoven", "Ludwig van Beethoven", "beethoven", "ludwig van beethoven"],
    question: "Who composed the 9th Symphony, which includes the 'Ode to Joy'?",
    points: 800,
},
catFive2_1200: {
    answer: ["Elvis Presley", "Elvis", "elvis presley", "elvis"],
    question: "Who is known as the 'King of Rock and Roll'?",
    points: 1200,
},
catFive2_1600: {
    answer: ["Michael Jackson", "Jackson", "michael jackson", "jackson"],
    question: "Which artist is known as the 'King of Pop'?",
    points: 1600,
},
catFive2_2000: {
    answer: ["Mozart", "Wolfgang Amadeus Mozart", "wolfgang amadeus mozart", "mozart"],
    question: "Who composed 'The Magic Flute' and 'Requiem'?",
    points: 2000,
},
catSix2_400: {
    answer: ["Soccer", "football", "soccer", "football (soccer)"],
    question: "What is the most popular sport in the world?",
    points: 400,
},
catSix2_800: {
    answer: ["Michael Jordan", "Jordan", "michael jordan", "jordan"],
    question: "Which basketball player is often considered the greatest of all time?",
    points: 800,
},
catSix2_1200: {
    answer: ["The Olympics", "Olympics", "olympics", "the olympics"],
    question: "What international sporting event occurs every four years, featuring summer and winter sports?",
    points: 1200,
},
catSix2_1600: {
    answer: ["Serena Williams", "Williams", "serena williams", "williams"],
    question: "Who is the tennis player with the most Grand Slam singles titles in the Open Era?",
    points: 1600,
},
catSix2_2000: {
    answer: ["Formula 1", "F1", "formula 1", "f1"],
    question: "What is the highest class of international single-seater auto racing?",
    points: 2000,
}

};

// Variables to keep track of # of questions, answers made.
let questionLimit = Object.keys(categoryContent).length;

// Variables tracking current phase of game ("bet", "guess").
function nextRound() {
    document.getElementById("guessButton2").setAttribute("disabled", "disabled");
    document.getElementById("passButton2").setAttribute("disabled", "disabled");
    document.getElementById("input").setAttribute("disabled", "disabled");
    document.getElementById("nxtRndButton2").removeAttribute("disabled");
    document.getElementById("mainDiv").innerHTML = "";
}

// Initialize player scores, current player turn.
function init() {
    document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`;  
    document.getElementById('guessButton2').setAttribute("disabled", "disabled");
    document.getElementById('passButton2').setAttribute("disabled", "disabled");
    document.getElementById('nxtRndButton2').setAttribute("disabled", "disabled");
    
    // Set player scores
    document.getElementById('p1score').innerText = `${p1score}`;
    document.getElementById('p2score').innerText = `${p2score}`;

    // Set current question
    window.alert(`It's ${playerTurn}'s turn!`);


    // Add event listener to each question
    Object.keys(categoryContent).forEach((value) => {
        document.getElementById(value).addEventListener('click', function questionHandler(e) {
            if (currentQuestion !== "") {
                window.alert("Answer or pass!");
                return;
            }

            // Set current question
            currentQuestion = value;
            document.getElementById(value).innerHTML = `<p>${categoryContent[value].question}</p>`;
            document.getElementById('guessButton2').removeAttribute("disabled");
            document.getElementById('passButton2').removeAttribute("disabled");
            this.removeEventListener('click', questionHandler); // Properly remove the event listener
        });
    });

    // Add event listener to guess button
    document.getElementById('guessButton2').addEventListener('click', () => {
        const userAnswer = document.getElementById('input').value;
        if (categoryContent[currentQuestion].answer.includes(userAnswer)) {
            if (playerTurn === p1) {
                p1score += categoryContent[currentQuestion].points;
                document.getElementById('p1score').innerText = `${p1score}`;
            } else {
                p2score += categoryContent[currentQuestion].points;
                document.getElementById('p2score').innerText = `${p2score}`;
            }
            // Set current question
            window.alert("Correct!!");
        } else {
            if (playerTurn === p1) {
                p1score -= categoryContent[currentQuestion].points;
                document.getElementById('p1score').innerText = `${p1score}`;
                playerTurn = p2;
            } else {
                p2score -= categoryContent[currentQuestion].points;
                document.getElementById('p2score').innerText = `${p2score}`;
                playerTurn = p1;
            }
            
            window.alert("Incorrect! It's now " + playerTurn + "'s turn.");
        }

        document.getElementById("input").value = "";
        document.getElementById(currentQuestion).innerHTML = categoryContent[currentQuestion].points;
        currentQuestion = "";
        questionsAnswered++;
        document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`;

        // Check if game is over
        if (questionsAnswered === questionLimit || p1score >= 30000 || p2score >= 30000) {
            window.alert("Time for Final Jeopardy! Click Final Round Button.");
            nextRound();
        }
    });

    // Add event listener to pass button
    document.getElementById('passButton2').addEventListener('click', () => {
        playerTurn = playerTurn === p1 ? p2 : p1;
        document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`;
        window.alert(`The correct answer was: ${categoryContent[currentQuestion].answer[0]}`);
        document.getElementById(currentQuestion).innerHTML = categoryContent[currentQuestion].points;
        currentQuestion = "";
        questionsAnswered++;
    });

    // Add event listener to next round button
    document.getElementById('nxtRndButton2').addEventListener('click', () => {
        window.location.replace(`final-jeopardy.html?player1=${p1score}&player2=${p2score}`);
    });
}