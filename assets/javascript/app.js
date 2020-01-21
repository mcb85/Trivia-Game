//need onclick event for start button, which will then begin timer and slide transitions
//Slides will be hidden by default and show up only when that question is presented
//Answer choices should react to user input, develop onclick events for each

//Need to set timer for each question that counts down, display in each slide

userInput = $("#Answer").on("click", function () {
console.log("userInput");
});




var clockRunning = false;
var time = 10;
var intervalId;

correctAnswers = 0;
incorrectAnswers = 0;

var slideIndex = 0;
showSlides();

function start() {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

$("#Start").on("click", function () {
    console.log("entered start click");
    showSlides();
    console.log("show slides");
    transitionNewSlide();
    console.log("new function");
    start();
    console.log("start");
});

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    console.log(slides);
    console.log(slides[0]);


    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    console.log(slideIndex);
    slides[slideIndex - 1].style.display = "block";
    console.log(slides[slideIndex - 1].style.display);
    console.log(slides[slideIndex - 1]);
    //setTimeout(showSlides, 45000);
    //console.log("settimeout");
    count();
    console.log("count");
    var currentSlide = slideIndex;
    console.log(currentSlide);




}

function transitionNewSlide() {
    //$(".slideshow-container").html(slides[slideIndex - 1]);
    console.log("slideindex");
}

function count() {
    time--;
    var converted = timeConverter(time);
    //console.log(converted);
    $("#countdown-timer").html("Time Remaining: " + converted);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    console.log(seconds);

    if (seconds == 0) {
        handleTimeUp();
        console.log("timeup");
        //$("#correct-answer-img").src = "assets/images/harry-potter.jpg";
    }

    if (minutes === 0) {
        minutes = "00";
    }
    return minutes + ":" + seconds;
}

//reveal image of correct answer when answer correct, time's up, or answer incorrect
//update correct/incorrect answers

function checkUserAnswers() {
    if (slideIndex === slides[0]) {
        if (userInput === $("#Answer Choice 1D")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/harry-potter.jpg";
        } else {
            $("#Message").html("The correct answer was D.");
            $("#correct-answer-img").src = "assets/images/harry-potter.jpg";
            incorrectAnswers++;
            console.log("img");
        }
    } else if (slideIndex === slides[1]) {
        if (userInput === $("#Answer Choice 2B")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/hermoine.jpg";
        } else {
            $("#Message").html("The correct answer was B.");
            $("#correct-answer-img").src = "assets/images/hermoine.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[2]) {
        if (userInput === $("#Answer Choice 3D")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/Lordvoldemort.jpg";
        } else {
            $("#Message").html("The correct answer was D.");
            $("#correct-answer-img").src = "assets/images/Lordvoldemort.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[3]) {
        if (userInput === $("#Answer Choice 4A")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/books.jpg";
        } else {
            $("#Message").html("The correct answer was A.");
            $("#correct-answer-img").src = "assets/images/books.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[4]) {
        if (userInput === $("#Answer Choice 5B")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/hogwarts.jpg";
        } else {
            $("#Message").html("The correct answer was B.");
            $("#correct-answer-img").src = "assets/images/hogwarts.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[5]) {
        if (userInput === $("#Answer Choice 6D")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/Myrtle1.png";
        } else {
            $("#Message").html("The correct answer was D.");
            $("#correct-answer-img").src = "assets/images/Myrtle1.png";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[6]) {
        if (userInput === $("#Answer Choice 7C")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/dumbledore.jpg";
        } else {
            $("#Message").html("The correct answer was C.");
            $("#correct-answer-img").src = "assets/images/dumbledore.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[7]) {
        if (userInput === $("#Answer Choice 8B")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/dobby.jpg";
        } else {
            $("#Message").html("The correct answer was B.");
            $("#correct-answer-img").src = "assets/images/dobby.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[8]) {
        if (userInput === $("#Answer Choice 9A")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/yule-ball.jpg";
        } else {
            $("#Message").html("The correct answer was A.");
            $("#correct-answer-img").src = "assets/images/yule-ball.jpg";
            incorrectAnswers++;
        }
    } else if (slideIndex === slides[9]) {
        if (userInput === $("#Answer Choice 10A")) {
            correctAnswers++;
            $("#Message").html("You are correct!");
            $("#correct-answer-img").src = "assets/images/neville.jpg";
        } else {
            $("#Message").html("The correct answer was A.");
            $("#correct-answer-img").src = "assets/images/neville.jpg";
            incorrectAnswers++;
        }
    } 
 }
 
//time up function
 function handleTimeUp() {
    $("#Message").html("Time's Up.");
     setTimeout (showSlides, 3000);
     showSlides();  
}

//Next slide shows up without user input after correct answer img has been shown
function reset() {
        time = 45;
        $(".slideshow-container").html("Slide1");
        $("#countdown-timer").text("<h2>" + "Time Remaining: 00:45" + "</h2>");
        start();
        count();
    }


    //Last slide displays correct, incorrect, and option to restart game without reloading
    $("#correct-answers").html("<h2>Correct Answers: " + correctAnswers + "</h2>");
    $("incorrect-answers").html("<h2>Incorrect Answers: " + incorrectAnswers + "</h2>");
    $("#Start-Over").on("click", function () {
        reset();
    });