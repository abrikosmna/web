const weatherBTN = document.querySelectorAll(".weather");
const numberBTN = document.querySelectorAll(".weather").length;

for (let i = 0; i < numberBTN; i++){
    // button click
    weatherBTN[i].addEventListener("click", function() {
        const btnInnerHtml = weatherBTN[i].innerHTML;
        makeSound(btnInnerHtml);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
});

const makeSound = (key) =>  {
    switch(key){
        case "1":
            const one_sound = new Audio("music/1.mp3");
            one_sound.play();
            break;
        case "2":
            const two_sound = new Audio("music/2.mp3");
            two_sound.play();
            break;
        case "3":
            const three_sound = new Audio("music/3.mp3");
            three_sound.play();
            break;
        case "4":
            const four_sound = new Audio("music/4.mp3");
            four_sound.play();
            break;
        case "5":
            const five_sound = new Audio("music/5.mp3");
            five_sound.play();
            break;
    }
}