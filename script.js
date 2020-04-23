$(document).ready(function(){


  var magic8ball = {};
    magic8ball.randomAnswers = ["Maybe, does it matter?", "Who cares", "Your questions are boring", "YES... whatever", "Could be", "Not in the least", "I don't like to give bad news", "Isn't it obvious?", "You don't wanna know", "I hate you", "Is that the best you've got?", "Welp, it's a mystery", "Funny you ask, I don't know", "The answer will come to you", "Skittles", "You already know", "Really?", "How should I know?", "Mind your own bee's wax"];

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

	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

//wait half a second before showing prompt
    setTimeout(
       function() {
           //show prompt
           var question = prompt()
           $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
           $("#8ball").effect("shake");
           magic8ball.question()
       }, 500);
  };

  $("#questionButton").click(clicketyClick);
});
