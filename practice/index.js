var level=0 ;
var firstKeyPress = false;
var buttonColours = ["red", "green", "yellow", "blue"];


var gamePattern = [];
var userClickedPattern = [];

$(document).keydown (function() 
{
 
    if (!firstKeyPress) 
    {
        $(".glass").text("Level " + level);

        nextSequence(); 
        
        firstKeyPress = true; 
    }
});

$(".btn").click(function() {
    var userfriendly = $(this).attr("id");
    userClickedPattern.push(userfriendly);
    playsound(userfriendly);
    animatepress(userfriendly); // Call the animatepress function here
    checkanswer(userClickedPattern.length-1);
});    
function checkanswer (currentlevel){
if (gamePattern[currentlevel]===userClickedPattern[currentlevel]){
    console.log("success");

if(userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
        nextSequence();
    },1000);
}

}
else{
    console.log("wrong");
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
    },200);
    $(".glass").text("Game over Better luck next");
}
}       
function nextSequence() {
    userClickedPattern=[];
    level++;
    $(".glass").text("Level " + level);

    var random = Math.random();
    var randomnumber = Math.floor(random * 4);

    var randomcolor = buttonColours[randomnumber];
    gamePattern.push(randomcolor);

    var choosencolor = $("#" + randomcolor);
    choosencolor.fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomcolor); 
    
}    
function playsound(name) {
    var audio = new Audio("sound/" + name + ".mp3");
    audio.play();
}    


function animatepress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);       
} 


