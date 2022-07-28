var buttons=document.querySelectorAll(".drum");
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var buttonpressed=this.innerHTML;
        makesound(buttonpressed);
        buttonanimation(buttonpressed);
   
    });

}

function makesound(key){
    //console.log(this.innerHTML);
    //this to acces which key pressed
    var sound;
    switch (key) {
        case "w":sound=new Audio("./sounds/kick-bass.mp3");
                 sound.play();
            break;
        case "a":sound=new Audio("./sounds/crash.mp3");
                 sound.play();
            break;
         case "s":sound=new Audio("./sounds/snare.mp3");
                 sound.play();
            break;
         case "d":sound=new Audio("./sounds/tom-1.mp3");
                 sound.play();
            break;
        case "j":sound=new Audio("./sounds/tom-2.mp3");
                 sound.play();
            break;

         case "k":sound=new Audio("./sounds/tom-3.mp3");
                 sound.play();
            break;
        case "l":sound=new Audio("./sounds/tom-4.mp3");
                 sound.play();
            break;
        default:console.log(this.innerHTML)
            break;
    }
}

document.addEventListener("keydown",function(event){
    //console.log(event.key);
    makesound(event.key);
    buttonanimation(event.key);
});

function buttonanimation(key){

    var butt=document.querySelector("."+key);
    butt.classList.add("anime");

    setTimeout(function(){
        butt.classList.remove("anime");
    },100);
}