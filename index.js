var i;
var key;
document.addEventListener("keydown", function(event){
  key = event.key;
  makeSound(key);
  buttonAnimation(key);
  }
);
for(i=0; i<7; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
    }
  );
}

function makeSound(input){
  switch (input) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
      console.log(buttonHtml);

  }
}

function buttonAnimation(currentKey){
  var currentButton = document.querySelector("."+currentKey);
  currentButton.classList.add("pressed");//theres a class in css with custom animations
  setTimeout(function(){
    currentButton.classList.remove("pressed")
  }, 100);
}
