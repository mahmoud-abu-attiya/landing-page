//background option
let backOption = true;
//varidal to control the interval
let theInterval;
//toggle class
document.querySelector(".toggel .fa-cog").onclick = function (){
    //toggle class fa-spin
    this.classList.toggle("fa-spin");
    //toggle class open left
    document.querySelector(".setting-box").classList.toggle("open-left");
    document.querySelector(".dada-overlay").classList.toggle("ovl");
};
//toggle class open right
document.querySelector(".header-area .toggle-menu").onclick = function (){
    document.querySelector(".nav-bar").classList.toggle("open-right");
    document.querySelector(".dada-overlay").classList.toggle("ovl");
};
document.addEventListener("click", function close_ovl(e) {
    if (e.target.classList.contains("ovl")){
        document.querySelector(".nav-bar").classList.remove("open-right");
        document.querySelector(".dada-overlay").classList.remove("ovl");
        document.querySelector(".setting-box").classList.remove("open-left");
        document.querySelector(".toggel .fa-cog").classList.remove("fa-spin");
    };
});
let myUl = document.querySelectorAll(".nav-bar ul li");
myUl.forEach(li => {
    li.addEventListener("click",(e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' });
        document.querySelector(".nav-bar").classList.remove("open-right");
        document.querySelector(".dada-overlay").classList.remove("ovl");
    });
});
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
//select reset botton
let resetBo = document.querySelector(".options-box .bo");
//reload on click
resetBo.addEventListener("click" , (e) => {
    window.location.reload();
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
//select skills selector  
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    //skills offset rop
    let skillsOffsetTop = ourSkills.offsetTop;
    //skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;
    //window height
    let windowHeight = this.innerHeight;
    //window scroll top
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skills-box .skills-progress span");
        allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
        });
    };
};
// create popup with images
let ourGallery = document.querySelectorAll(".gallery .gallery-box img");
ourGallery.forEach(img => {
    img.addEventListener("click",(e) => {
        //create overlay element
        let overlay = document.createElement("div");
        //add class
        overlay.className = "popup-overlay";
        //append overlay to body
        document.body.appendChild(overlay);
        //create the popup
        let popupBox = document.createElement("div");
        //add popup class
        popupBox.className = "popup-box";
        if ( img.alt !== null) {
            //create heading
            let imgHeading = document.createElement("h3");
            //create text to heading
            let imgText = document.createTextNode(img.alt);
            //append the text to the heading
            imgHeading.appendChild(imgText);
            //append the heading to popup box
            popupBox.appendChild(imgHeading);
        };
        //create the image
        let popupImage = document.createElement("img");
        //set image source
        popupImage.src = img.src;
        //append image to popup box
        popupBox.appendChild(popupImage);
        //append popup box to body
        document.body.appendChild(popupBox);
        //create the close span
        let closeButton = document.createElement("span");
        //create the-X
        let closeButtonText = document.createTextNode("x");
        //append the-X to span
        closeButton.appendChild(closeButtonText);
        //add class to close button
        closeButton.className = "close-button";
        //add close button to popup box
        popupBox.appendChild(closeButton);
    });
});
//close popup
document.addEventListener("click" , function (e) {
    if (e.target.className == "close-button") {
        //remove the popup
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});
//select all bullets
const allBullets = document.querySelectorAll(".links li");
allBullets.forEach(bullet => {
    bullet.addEventListener("click" , (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({behavior: "smooth", inline: "nearest"});
    });
});
