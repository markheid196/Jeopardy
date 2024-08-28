// init function called when window fully loads.
window.onload = init

// Constants representing players.
const p1 = "Player 1";
const p2 = "Player 2";

// Variable to keep track of whose turn it is; game starting w/Player 1.
let plTurn = p1;

// Variables storing player's answers, bets.
let p1answer = "";
let p1bet = 0;
let p2answer = "";
let p2bet = 0;
// Correct answer to the question.
let finalanswer = "The Alps";

// Variables to keep track of number of bets, answers made.
let numBets = 0;
let numAnswers = 0;

// Variable to track current phase of  game ("bet" or "guess").
let phase = "bet"

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


// Initialize player scores from URL parameters.
let p1score = 0;
let p2score = 0;
p1score = parseInt(GetURLParameter("p1"));
p2score = parseInt(GetURLParameter("p2"));

// Variable to hold winner's name.
let winner = "";

function init () {
     // Update UI to show whose turn it is.
    document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`
     // Set maximum bet to Player 1's score initially.
    document.getElementById('maxBet').innerText = `${p1score}`;

    document.getElementById('betInput').addEventListener('change', (e) => {
        if (playerTurn == p1) {
            p1bet = parseInt(e.target.value);
            console.log(p1bet);
        } else {
            p2bet = parseInt(e.target.value);
            console.log(p2bet);
        }
    })

     // Event listener for changes to answer input.
    document.getElementById('answerInput').addEventListener('change', (e) => {
        if (playerTurn == p1) {
            p1answer = e.target.value;
        } else {
            p2answer = e.target.value;
        }
    })

    // Event listener for bet/answer button.
    document.getElementById('betButton').addEventListener('click', (e) => {
        if (phase == "bet") {
            if (playerTurn == p1) {
                  // Validate Player 1's bet
                if (p1score < 0) {
                    p1bet = 0
                } else if (p1bet > p1score || p1bet < 0) {
                    window.alert("Make a good bet");
                    return;
                }
                playerTurn = p2;
                numBets++;
                document.getElementById('betInput').value = ""
                document.getElementById('maxBet').innerText = `${p2score}`
            } else {
                // Validate Player 2's bet
                if (p2score < 0) {
                    p2bet = 0
                } else if (p2bet > p2score || p2bet < 0) {
                    window.alert("Make a valid bet loser");
                    return;
                }
                playerTurn = p1;
                numBets++;
                document.getElementById('betInput').value = ""
                document.getElementById('maxBet').innerText = `${p1score}`
            }
             // Transition to answer phase if both players made bets
            if (numBets >= 2) {
                phase = "guess";
                document.getElementById('answerInput').removeAttribute("disabled");
                document.getElementById('betInput').setAttribute("disabled", "disabled");
                document.getElementById('finalQuestion').innerText = "King Michael of Romania's response when I asked what mountains I drove through to work on his portrait in Switzerland?"
                document.getElementById('betButton').innerText = "ANSWER";
                window.alert(`${playerTurn}, guess please.`);
            } else {
                window.alert(`${playerTurn}'s turn to bet`);
            }
            document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`
        } else {
              // Process the player's answer
            if (playerTurn == p1) {
                if (p1answer == finalanswer) {
                    p1score += p1bet;
                } else {
                    p1score -= p1bet;
                }
                playerTurn = p2;
                document.getElementById('betInput').value = "";
                document.getElementById('answerInput').value = "";
                numAnswers++;
            } else {
                if (p2answer == finalanswer) {
                    p2score += p2bet;
                } else {
                    p2score -= p2bet;
                }
                playerTurn = p1;
                document.getElementById('betInput').value = "";
                document.getElementById('answerInput').value = "";
                numAnswers++;
            }
            document.getElementById("currentPlayerTurn").innerText = `${playerTurn}'s Turn`
            // Check if both players answered
            if (numAnswers >= 2) {
                if (p1score == p2score) {
                window.alert('tie!\nMaybe next time.')
                window.alert(`The answer was ${finalanswer}`)
                window.alert('Thanksfor playing!')
                document.body.innerHTML = ''
                return;
                } else if (p1score > p2score) {
                    winner = p1;
                } else if (p2score > p1score) {
                    winner = p2;
                }
                document.getElementById('finalQuestion').innerText = `ANSWER: ${finalanswer}`
                window.alert(`Nice! ${winner} won!\nP1: ${p1score} | P2: ${p2score}`)
                window.alert(`The answer was ${finalanswer}`)
                window.alert(`Thanks for playing!`)
                document.body.innerHTML = ''
                return;
            } else {
                window.alert(`${playerTurn}, your guess please.`);
                document.getElementById('betInput').value = ""
                document.getElementById('answerInput').value = "";
            }
        }

    });
}