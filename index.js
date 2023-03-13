for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonPressed = this.innerHTML;
        sound(buttonPressed);
        animation(buttonPressed);
    });
}

document.addEventListener("keydown", function(event){
    newkey = event.key;
    sound(newkey);
    animation(newkey);
})

function sound(buttonPressed){
    var tom1 = new Audio("sounds/tom-1.mp3");
    var tom2 = new Audio("sounds/tom-2.mp3");
    var tom3 = new Audio("sounds/tom-3.mp3");
    var tom4 = new Audio("sounds/tom-4.mp3");
    var snare = new Audio("sounds/snare.mp3");
    var crash = new Audio("sounds/crash.mp3");
    var kick = new Audio("sounds/kick-bass.mp3");
    
    switch (buttonPressed) {
        case 'w':
            tom1.play();
            break;
        case 'a':
            tom2.play();
            break;
        case 's':
            tom3.play();
            break;
        case 'd':
            tom4.play();
            break;
        case 'j':
            snare.play();
            break;
        case 'k':
            tom1.play();
            crash;
        case 'l':
            kick.play();
            break;
        default:
            console.log(buttonPressed);
            break;
    }
}

function animation(keyPressed){
    var active = document.querySelector("."+keyPressed);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100)
}