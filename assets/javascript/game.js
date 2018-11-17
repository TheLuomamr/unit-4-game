$(document).ready(function(){

var randomNumber = Math.floor(Math.random() * 99) + 10;
    $("#number").html(' ' + randomNumber );
    console.log(randomNumber);
var gem1 = Math.floor(Math.random()*10) +1;
var gem2 = Math.floor(Math.random()*10) +1;
var gem3 = Math.floor(Math.random()*10) +1;
var gem4 = Math.floor(Math.random()*10) +1;

var score = 0;
var wins = 0;
var losses = 0;

$('#Wins').text(wins);
$('#Losses').text(losses);

function newGame(){
    randomNumber = Math.floor(Math.random() * 99) + 10;
    $("#number").html(' ' + randomNumber );
    gem1 = Math.floor(Math.random()*10) +1;
    gem2 = Math.floor(Math.random()*10) +1;
    gem3 = Math.floor(Math.random()*10) +1;
    gem4 = Math.floor(Math.random()*10) +1;
    score = 0;
    $('#scoreNumber').text(score);
}
function winner(){
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("You win!");
    newGame();
}    

function loser(){
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("You Lose!");
    newGame();
}

    $('#gem1').on('click', function (){
        score = score + gem1;
        console.log("" + score);
        $('#scoreNumber').html(score); 
        if(score == randomNumber){
            winner();
        }   
        else if(score > randomNumber){
            loser();
        }
    })
    $('#gem2').on('click', function(){
        score = score + gem2;
        console.log("" + score);
        $('#scoreNumber').html(score);
        if(score == randomNumber){
            winner();
        }
        else if(score > randomNumber){
            loser();
        } 
    })
    $('#gem3').on('click', function(){
        score = score + gem3;
        console.log("" + score);
        $('#scoreNumber').html(score);
        if(score == randomNumber){
            winner();
        }
        else if(score > randomNumber){
           loser();
        }
    })
    var gem4 = Math.floor(Math.random()*10) +1;
    $('#gem4').on('click', function(){
        score = score + gem4;
        console.log("" + score);
        $('#scoreNumber').html(score);
        if(score == randomNumber){
           winner();
        }
        else if(score > randomNumber){
            loser();
        }
    });
});  

