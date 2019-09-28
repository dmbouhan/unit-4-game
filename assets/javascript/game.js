$(document).ready(function () {

    var max = 120;
    var min = 19;
    var targetNumber = Math.floor(Math.random() * (+max - +min)) + +min;
    var greenNumber = Math.floor(Math.random() * 12) + 1;
    var purpleNumber = Math.floor(Math.random() * 12) + 1;
    var redNumber = Math.floor(Math.random() * 12) + 1;
    var yellowNumber = Math.floor(Math.random() * 12) + 1;
    var totalScore = 0
    var gameStarted = false;
    var win = 0;
    var loss = 0;

    function initializeGame() {
        gameStarted = true;
        targetNumber = Math.floor(Math.random() * (+max - +min)) + +min;
        greenNumber = Math.floor(Math.random() * 12) + 1;
        purpleNumber = Math.floor(Math.random() * 12) + 1;
        redNumber = Math.floor(Math.random() * 12) + 1;
        yellowNumber = Math.floor(Math.random() * 12) + 1;
        totalScore = 0
        $("#randomNumDisplay").text(targetNumber);
        $("#green").attr("value", greenNumber);
        $("#purple").attr("value", purpleNumber);
        $("#red").attr("value", redNumber);
        $("#yellow").attr("value", yellowNumber);
        $("#score").text(totalScore);
    };

    if (gameStarted = true && totalScore < targetNumber) {

        $("#green").on("click", function () {
            var crystalValue1 = ($(this).attr("value"));
            crystalValue1 = parseInt(crystalValue1);
            totalScore += crystalValue1;
            $("#score").text(totalScore);
            gameCheck()
        });

        $("#purple").on("click", function () {
            var crystalValue2 = ($(this).attr("value"));
            crystalValue2 = parseInt(crystalValue2);
            totalScore += crystalValue2;
            $("#score").text(totalScore);
            gameCheck()
        });

        $("#red").on("click", function () {
            var crystalValue3 = ($(this).attr("value"));
            crystalValue3 = parseInt(crystalValue3);
            totalScore += crystalValue3;
            $("#score").text(totalScore);
            gameCheck()
        });

        $("#yellow").on("click", function () {
            var crystalValue4 = ($(this).attr("value"));
            crystalValue4 = parseInt(crystalValue4);
            totalScore += crystalValue4;
            $("#score").text(totalScore);
            gameCheck()
        });

    }

    function gameCheck() {
        if (totalScore === targetNumber) {
            alert("You win!");
            win++;
            $("#win").text("Wins: " + win);
            gameStarted = false;
            initializeGame();
        }

        if (totalScore > targetNumber) {
            alert("Too bad. Try again!");
            loss++;
            $("#loss").text("Losses: " + loss);
            gameStarted = false;
            initializeGame();
        }
    }

    initializeGame();

});
