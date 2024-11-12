//header 
let topHeader=document.querySelector("header .header");

window.addEventListener("scroll",changeHeader);

function changeHeader(){
    if(window.scrollY>900){
        topHeader.classList.add("changeHeaderPosition");
    }
    else{
        topHeader.classList.remove("changeHeaderPosition");

    }
}

//------------------------------------------------------------------
//slideshow
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Light-Dark Mode

let modeButton = document.querySelector("span.slider");


//event 
modeButton.addEventListener("click", changeMode);

//function
function changeMode() {
    document.body.classList.toggle("lightMode");
}



//Technical part

let buttons = document.querySelectorAll("div.technical-service button");
let prevButton = document.querySelector("button.range");
let prevInfo = document.querySelector("div.range-info");

for (let button of buttons) {
    button.addEventListener("click", markButton);
    button.addEventListener("click", showInfo);
}

//change the color of selected button

function markButton() {
    prevButton.classList.remove("selected-btn");
    this.classList.add("selected-btn");
    prevButton = this;
}

//Show the information of related and selected button
function showInfo() {
    prevInfo.classList.remove("selected-info");
    if (this.classList[1] == "range") {
        prevInfo = document.querySelector("div.range-info");
        prevInfo.classList.add("selected-info");
    }
    if (this.classList[1] == "acceleration") {
        prevInfo = document.querySelector("div.acceleration-info");
        prevInfo.classList.add("selected-info");
    }
    if (this.classList[1] == "power") {
        prevInfo = document.querySelector("div.power-info");
        prevInfo.classList.add("selected-info");
    }
    if (this.classList[1] == "charging") {
        prevInfo = document.querySelector("div.charging-info");
        prevInfo.classList.add("selected-info");
    }
    if (this.classList[1] == "interior") {
        prevInfo = document.querySelector("div.interior-info");
        prevInfo.classList.add("selected-info");
    }
}






