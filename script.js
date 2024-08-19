var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        //add animate class to character
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500); 
    //remove animation after it took 500ms to repeat it
}
var checkDead = setInterval(function(){
    //get top pos of character and left pos of block
    //style property
    //check if character and block hit each other, u die
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 
    if( (blockLeft < 20 && blockLeft > 0) && characterTop >= 130 ){
        //if block position directly under left character
        //and charatertop < 20 px, didnt totally jump over block
        // block.style.animation = "none";
        // block.style.display = "none";
        alert("u died. Score: "+Math.floor(score/100));
        score = 0;
        //add in SCORE COUNT!!!
        // a menu screen: play again. add pause button
    }
    else{
        score++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
        //display score on screen
    }
},10);

/*
make it jump w space not mouse click
window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault();
        document.querySelector('a').click(); //This will trigger a click on the first <a> element.
    }
};*/