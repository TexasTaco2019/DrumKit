

// Below uses loop to check each of the buttons in the drum kit listening for a click
// let instrument = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3","tom-3.mp3", "tom-4.mp3"];

// DETECTING BUTTON PRESS

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) { //remember how the for loop works


document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});

}
// Detecting keyboard press
document.addEventListener("keypress", function(event){ // pressing the key returns event and the key is used
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch(key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}
//beow is the function for the animation---the pressed class is added and taken away after a short duration
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");//removes .pressed from the CSS classlist
  }, 100);
}
