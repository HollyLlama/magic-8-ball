$(document).ready(function(){


  var magic8ball = {};
    magic8ball.randomAnswers = ["Maybe, does it matter?", "Who cares", "Your questions are boring", "YES... whatever", "Could be", "Not in the least", "I don't like to give bad news", "Isn't it obvious?", "You don't wanna know", "Wouldn't you like to know", "Is that the best you've got?", "Welp, it's a mystery", "Funny you ask, I don't know", "The answer will come to you", "Skittles", "You already know", "Really?", "How should I know?", "Mind your own bee's wax"];

    $("#answer").hide();

    magic8ball.question = function (question) {
      var randomNumber = Math.random();
      var randomNumberArray = randomNumber * this.randomAnswers.length;
      var randomIndex = Math.floor(randomNumberArray);
      var answer = this.randomAnswers[randomIndex];

      $("#answer").text(answer);
		  $("#answer").fadeIn(4000);
    };


  var clicketyClick = function () {
    $("#answer").hide();
	  $("#eightball").attr("src", "img/magic-eight-ball.png");

//wait half a second before showing prompt
    setTimeout(
       function() {
           //show prompt
           var question = prompt("What do you wanna know?")
           $("#eightball").effect("shake");
           $("#eightball").attr("src", "img/magic-eight-ball-and-answer.png");
           magic8ball.question()
       }, 800);
  };

  $("#questionButton").click(clicketyClick);
});
