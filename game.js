$(document).ready(function()
{
var gameOver = 0;
//tell jquery to look for img tag
//when user clicks on img perform a function
    $("img").click(calcGame);

    //perform the function and do if else statements for each rule. each rule needs the opposite winner
    //once two of the same rule if else statement is complete, do a separate if else for the other rules

    function calcGame()
    {
        //what the human has selected
        var choosenImage = $(this);

        //if else statements for what picture the user selected
        if(choosenImage(this)==1)
        {
            var reySkywalker = "Rey Skywalker";
            $("#userOutput").text(reySkywalker);
        }
        else if(choosenImage(this) == 2)
        {
            var palpatine = "Emperor Palpatine";
            $("#userOutput").text(palpatine);
        }
        else if(choosenImage(this) ==3)
        {
            var obiWanKenobi = "Obi-Wan Kenobi";
            $("#userOutput").text(obiWanKenobi);
        }
        else if(choosenImage(this) ==4)
        {
            var vader = "Darth Vader";
            $("#userOutput").text(vader);
        }
        else
            {
                var anakian = "Anakian Skywalker";
                $("#userOutput").text(anakian);
            }
        //generate a random number generator for the computer
        var computerGenerator = Math.floor(Math.random()*5)+1;

        //if else statements for what picture the computer selected
        if(computerGenerator == 1)
        {
            var reyJedi = "Rey Skywalker";
            $("#computerOutput").text(reyJedi);
        }
        else if(computerGenerator==2)
        {
            var palpatineSith = "Emperor Palpatine";
            $("#computerOutput").text(palpatineSith);
        }
        else if(computerGenerator==3)
        {
            var obiWanJedi = "Obi-Wan Kenobi";
            $("#computerOutput").text(obiWanJedi);
        }
        else if(computerGenerator == 4)
        {
            var vaderSith = "Darth Vader";
            $("#computerOutput").text(vaderSith);
        }
        else
            {
                var anakianSkywalker = "Anakian Skywalker";
                $("#computerOutput").text(anakianSkywalker);
            }

        //if else statements for winners and do two separate if else per question for each winner

        //Rey beats Palpatine
        if(choosenImage(this) === "Rey Skywalker" && computerGenerator ==2)
        {
            var humanWinner = "Human won because Rey defeated Palpatine by deflecting lightning to him."
            $("#winner").text(humanWinner);
            gameOver++;
        }
        else if(choosenImage(this) === "Emperor Palpatine" && computerGenerator == 2)
        {
            var computerWinner = "Computer won because he is stronger than Rey.";
            $("#winner").text(computerWinner);
            gameOver++;
        }
        //Obi-Wan defeats Anakian
        if(choosenImage(this) === "Obi-Wan Kenobi" && computerGenerator == 5)
        {
            var humanWinner2 = "Human won because Obi-Wan defeated Anakian on Mustafar";
            $("#winner").text(humanWinner2);
            gameOver++;
        }
        else if(choosenImage(this) === "Anakian Skywalker" && computerGenerator == 3)
        {
            var computerWinner2 = "Computer won because Anakian embraced the dark side.";
            $("#winner").text(computerWinner2);
            gameOver++;
        }

        //Anakian defeats Darth Vader
        if(choosenImage(this) === "Anakian Skywalker" && computerGenerator == 4)
        {
            var humanWinner3 = "Human won because Anakian came back to the light side";
            $("#winner").text(humanWinner3);
            gameOver++;
        }
        else if(choosenImage(this) === "Darth Vader" && computerGenerator == 5)
        {
            var computerWinner3 = "Computer won because Darth Vader was too strong for Anakian on the Death Star.";
            $("#winner").text(computerWinner3);
            gameOver++;
        }

        //Darth Vader defeats Obi-Wan Kenobi
        if(choosenImage(this) === "Darth Vader" && computerGenerator == 3)
        {
            var humanWinner4 = "Human won because Darth Vader was superior against Obi-Wan Kenobi";
            $("#winner").text(humanWinner4);
            gameOver++;
        }
        else if(choosenImage(this) === "Obi-Wan Kenobi" && computerGenerator == 4)
        {
            var computerWinner4 = "Computer won because Obi-Wan Kenobi was stronger and wiser than Darth Vader on the Death Star.";
            $("#winner").text(computerWinner4);
            gameOver++;
        }

        //while loop for when the gameOver variable is equal to one
        for(i=0;i<gameOver;gameOver++)
        {
            var finishedGame = "Game Over! May the Force be with you."
            $("#gameOver").text(finishedGame);
        }
    }
});