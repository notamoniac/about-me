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
    show.innerHTML = "This button is working in progress so it's useless to click it." ;
    count()
    show.innerHTML += "<br> You have clicked the button " + counter + " times.";
    if(counter > 5){
        show.innerHTML += "<br> You have clicked the button more than 5 times!";
    }
    if(counter > 20){
        show.innerHTML += "<br> You have clicked the button more than 20 times!";
    }
    if(counter > 60){
        show.innerHTML += "<br> If you have nothing better to do, you can keep clicking the button.";
    }
    if(counter > 100){
        show.innerHTML += "<br> Ok";
    }
    if(counter > 109){ 
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
}