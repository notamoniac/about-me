console.log("JS script is running!");

var counter = 0;

var count = function(){
    return function(){
        counter += 1;
        return counter;
    }
}();

function show(){
    let show = document.getElementById("show-here");
    let show1 = document.getElementById("show-here1");
    show.innerHTML = "This button is working in progress so it's useless to click it." ;
    count()
    if(counter > 5){
        show1.innerHTML = "<br> You have clicked the button more than 5 times!";
    }
    if(counter > 20){
        show1.innerHTML = "<br> You have clicked the button more than 20 times!";
    }
    if(counter > 60){
        show1.innerHTML = "<br> If you have nothing better to do, you can keep clicking the button.";
    }
    if(counter > 100){
        show1.innerHTML = "<br> Ok";
    }
    if(counter > 109){ 
        window.open("https://notamoniac.github.io/about-me/videos/nggyu.mp4", "_blank");
    }
}
