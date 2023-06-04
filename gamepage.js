var y = Math.floor(Math.random() * 10 +1);

var x= documunt.getElementById("guessField").value;

if(x==y)
{
    alert("CONGATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
            + guess +" GUESS")
    guess=1;        
}

else if(x > y)

{
    guess++
    alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}
else 

{
    guess++
    alert("OPPS SORRY!! TRY A GREATER NUMBER");
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);   
}