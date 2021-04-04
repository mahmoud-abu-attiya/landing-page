//background option
let backOption = true;

//varidal to control the interval
let theInterval;

//toggle class
document.querySelector(".toggel .fa-cog").onclick = function (){
    //toggle class fa-spin
    this.classList.toggle("fa-spin");

    //toggle class open
    document.querySelector(".setting-box").classList.toggle("open");
}

//switch color
const colorsLi = document.querySelectorAll(".colors-list li");

//loop on list items
colorsLi.forEach(li => {

    //onclick no list items
    li.addEventListener("click" , (e) => {

        //set color on root
        document.documentElement.style.setProperty('--main--color' , e.target.dataset.color);

        document.documentElement.style.setProperty('--main--overlay' , e.target.dataset.overlay);

        document.documentElement.style.setProperty('--main--span' , e.target.dataset.span);

        // remove activ class 
        e.target.parentElement.querySelectorAll(".activee").forEach(Element => {
            Element.classList.remove("activee");
        });

        // add activ class 
        e.target.setAttribute("class" , "activee");

    });

});

//switch Background
const ranBackground = document.querySelectorAll(".ran-bac span");

//loop on span
ranBackground.forEach(span => {

    //onclick no span
    span.addEventListener("click" , (e) => {


        // remove activ class 
        e.target.parentElement.querySelectorAll(".activee").forEach(Element => {
            Element.classList.remove("activee");
        });

        // add activ class 
        e.target.classList.add("activee");

        if (e.target.dataset.background === "yes") {
            backOption = true;
            randomizImgs ();
        } else {
            backOption = false;
            clearInterval(theInterval)
        }
    });

});

//select landing page element
let landingPage = document.querySelector(".landing-page");

//get array of images
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

//function to randomiz image
function randomizImgs () {

    if (backOption === true){
        //not knowning
        theInterval = setInterval(() => {

        //get randon number
        let randomNum = Math.floor(Math.random() * imgsArray.length);

        //change background images URL
        landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNum] + '")';

        }, 4000);
    };

};
randomizImgs () ;



