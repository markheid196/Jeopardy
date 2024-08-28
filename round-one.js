
// init function called when window fully loads.
window.onload = init;
// Constants representing players.
const p1 = "Player 1";
const p2 = "Player 2";
// Initialize player scores and current player turn.
let p1score = 0;
let p2score = 0;
let plTurn = p1;
// Variables to handle current question status and attempts.
let currentQuestion = "";
let questionAttempts = 0;
let questionsAnswered = 0;

// Initialize category content.
let categoryContent = {
    catOne_200: {
        answer: ["Mississippi River", "Mississippi", "mississippi river", "mississippi"],
        question: "What is the longest river in the United States?",
        points: 200,
    },
    catOne_400: {
        answer: ["Alaska", "alaska"],
        question: "Which U.S. state is the largest by area?",
        points: 400,
    },    
    catOne_600: {
        answer: ["Hawaii", "hawaii"],
        question: "Which U.S. state is made up entirely of islands?",
        points: 600,
    },
    catOne_800: {
        answer: ["Mount McKinley", "Denali", "mount mckinley", "denali"],
        question: "What is the highest peak in North America?",
        points: 800,
    },
    catOne_1000: {
        answer: ["Lake Superior", "lake superior"],
        question: "What is the largest of the Great Lakes?",
        points: 1000,
    },
    catTwo_200: {
        answer: ["The Lion King", "Lion King", "the lion king", "lion king"],
        question: "Which Disney movie features the song 'Circle of Life'?",
        points: 200,
    },
    catTwo_400: {
        answer: ["Aladdin", "aladdin"],
        question: "Which Disney movie is set in the fictional city of Agrabah?",
        points: 400,
    },
    catTwo_600: {
        answer: ["Frozen", "frozen"],
        question: "Which Disney movie features the characters Elsa and Anna?",
        points: 600,
    },
    catTwo_800: {
        answer: ["Beauty and the Beast", "Beauty & the Beast", "beauty and the beast", "beauty & the beast"],
        question: "Which Disney movie features the song 'Be Our Guest'?",
        points: 800,
    },
    catTwo_1000: {
        answer: ["Pocahontas", "pocahontas"],
        question: "Which Disney movie includes the song 'Colors of the Wind'?",
        points: 1000,
    },
    catThree_200: {
        answer: ["Dunder Mifflin", "dunder mifflin"],
        question: "What is the name of the paper company in 'The Office'?",
        points: 200,
    },
    catThree_400: {
        answer: ["Scranton", "scranton"],
        question: "In which city is 'The Office' set?",
        points: 400,
    },
    catThree_600: {
        answer: ["Michael Scott", "Michael", "michael scott", "michael"],
        question: "What is the name of the Regional Manager of Dunder Mifflin?",
        points: 600,
    },
    catThree_800: {
        answer: ["Pam Beesly", "Pam", "pam beesly", "pam"],
        question: "Who is the receptionist at Dunder Mifflin at the start of the series?",
        points: 800,
    },
    catThree_1000: {
        answer: ["The Dundies", "Dundies", "the dundies", "dundies"],
        question: "What is the name of the annual awards ceremony held by Michael Scott?",
        points: 1000,
    },
    catFour_200: {
        answer: ["Luke Skywalker", "Luke", "luke skywalker", "luke"],
        question: "Who is the protagonist of the original Star Wars trilogy?",
        points: 200,
    },
    catFour_400: {
        answer: ["Yoda", "yoda"],
        question: "Who is the Jedi Master known for his wisdom and small size?",
        points: 400,
    },
    catFour_600: {
        answer: ["The Death Star", "Death Star", "death star"],
        question: "What is the name of the Empire's planet-destroying weapon?",
        points: 600,
    },
    catFour_800: {
        answer: ["Darth Vader", "Vader", "darth vader", "vader"],
        question: "What is Anakin Skywalker's Sith name?",
        points: 800,
    },
    catFour_1000: {
        answer: ["The Millennium Falcon", "Millennium Falcon", "millennium falcon"],
        question: "What is the name of Han Solo's ship?",
        points: 1000,
    },
    catFive_200: {
        answer: ["William Shakespeare", "Shakespeare", "shakespeare"],
        question: "Which English playwright wrote 'Hamlet'?",
        points: 200,
    },
    catFive_400: {
        answer: ["Jane Austen", "Austen", "jane austen"],
        question: "Who wrote the novel 'Pride and Prejudice'?",
        points: 400,
    },
    catFive_600: {
        answer: ["George Orwell", "Orwell", "george orwell"],
        question: "Who is the author of '1984' and 'Animal Farm'?",
        points: 600,
    },
    catFive_800: {
        answer: ["Mark Twain", "Twain", "mark twain"],
        question: "Who wrote 'The Adventures of Tom Sawyer'?",
        points: 800,
    },
    catFive_1000: {
        answer: ["J.K. Rowling", "Rowling", "rowling", "jk rowling", "JK Rowling"],
        question: "Who is the author of the Harry Potter series?",
        points: 1000,
    },
    catSix_200: {
        answer: ["Zeus", "zeus"],
        question: "Who is the king of the gods in Greek mythology?",
        points: 200,
    },
    catSix_400: {
        answer: ["Thor", "thor"],
        question: "Who is the Norse god of thunder?",
        points: 400,
    },
    catSix_600: {
        answer: ["Anubis", "anubis"],
        question: "Which Egyptian god is associated with mummification and the afterlife?",
        points: 600,
    },
    catSix_800: {
        answer: ["Ares", "ares"],
        question: "Who is the Greek god of war?",
        points: 800,
    },
    catSix_1000: {
        answer: ["Cerberus", "cerberus"],
        question: "What is the name of the three-headed dog that guards the underworld in Greek mythology?",
        points: 1000,
    }
}; 

// Set number of questions
let questionLimit = Object.keys(categoryContent).length;
// Set current question
function nxtRound() {
    document.getElementById("guessButton").setAttribute("disabled", "disabled");
    document.getElementById("passButton").setAttribute("disabled", "disabled");
    document.getElementById("input").setAttribute("disabled", "disabled");
    document.getElementById("nxtRndButton").removeAttribute("disabled");
    document.getElementById("mainDiv").innerHTML = "";
}
// function to set up game state.
function init() {
    // Set the current player turn in the UI.
    document.getElementById("currentPlayerTurn").innerText = `${plTurn}'s Turn`;
    // Disable the buttons initially.
    document.getElementById("guessButton").setAttribute("disabled", "disabled");
    document.getElementById("passButton").setAttribute("disabled", "disabled");
    document.getElementById("nxtRndButton").setAttribute("disabled", "disabled");

    // Alert the player of their turn.
    window.alert(`It's ${plTurn}'s turn!`);

    // Iterate through each question and add click event listeners.
    Object.keys(categoryContent).map((value) => {
        document.getElementById(value).addEventListener("click", function questionHandler(e) {
            // Check if there's an active question.
            if (currentQuestion != "") {
                window.alert("Answer or pass!");
                return;
            }

            // Reset the number of attempts for the current question.
            questionAttempts = 0;

            // Display the question in the corresponding element.
            document.getElementById(value).innerHTML = `<p>${categoryContent[value].question}</p>`;
          
            // Store the current question identifier.
            currentQuestion = value;

            // Enable the buttons.
            document.getElementById("guessButton").removeAttribute("disabled");
            document.getElementById("passButton").removeAttribute("disabled");

            // Remove the event listener.
            this.removeEventListener("click", questionHandler);
        });
    });

    // Add event listener for the guess button. 
    document.getElementById("guessButton").addEventListener("click", (e) => {
        // Check if the guess is correct.
        if (categoryContent[currentQuestion].answer.includes(document.getElementById("input").value)) {
            // Update the score and UI for the correct guess.
            if (plTurn == p1) {
                p1score += categoryContent[currentQuestion].points;
                document.getElementById("p1score").innerText = `${p1score}`;
                document.getElementById("input").value = "";
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                window.alert(`Correct!!`);
            } else if (plTurn == p2) {
                p2score += categoryContent[currentQuestion].points;
                document.getElementById("p2score").innerText = `${p2score}`;

                // Clear the input and question state.
                document.getElementById("input").value = "";
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                window.alert(`Correct!!`);
            }
            questionsAnswered++;
        } else {

            // Update the score and UI for the incorrect guess.
            if (plTurn == p1) {
                p1score -= categoryContent[currentQuestion].points;
                document.getElementById("p1score").innerText = `${p1score}`;
                document.getElementById("input").value = "";
                questionAttempts++;
                plTurn = p2;
            } else if (plTurn == p2) {
                p2score -= categoryContent[currentQuestion].points;
                document.getElementById("p2score").innerText = `${p2score}`;
                document.getElementById("input").value = "";
                questionAttempts++;
                plTurn = p1;
            }

            // Provide another chance if less than 2 attempts, or move to next question.
            if (questionAttempts < 2) {
                window.alert(`${plTurn}, it's your chance, GUESS!`);
            } else {
                document.getElementById(currentQuestion).innerHTML = "";
                currentQuestion = "";
                questionsAnswered++;
            }
        }
        // Update the UI for the current player's turn.
        document.getElementById("currentPlayerTurn").innerText = `${plTurn}'s Turn`;

        // Check if all questions answered or if any player reached score limit.
        if (questionsAnswered == questionLimit || p1score >= 15000 || p2score >= 15000) {
            window.alert("Time for round 2! Click Round 2 Button.");
            nxtRound();
        }
    });

    // Add event listener for the pass button.
    document.getElementById("passButton").addEventListener("click", (e) => {

        // Increment attempt count, switch player turn.
        questionAttempts++;
        if (plTurn == p1) {
            plTurn = p2;
        } else {
            plTurn = p1;
        }

        if (questionAttempts < 2) {
            window.alert(`${plTurn}, it's your chance, GUESS!`);
        } else {
            window.alert(`The answer was ${categoryContent[currentQuestion].answer[0]}`);
            document.getElementById(currentQuestion).innerHTML = "";
            currentQuestion = "";
            questionsAnswered++;
        }

        // Update the UI for the current player's turn.
        document.getElementById("currentPlayerTurn").innerText = `${plTurn}'s Turn`;
    });

    // Add event listener for the next round button.
    document.getElementById("nxtRndButton").addEventListener("click", (e) => {
        window.location.replace(`round-2.html?p1=${p1score}&p2=${p2score}`);
    });
}
