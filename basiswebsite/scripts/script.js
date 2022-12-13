// menu zichtbaar te maken //
var openButton = document.querySelector("header > button"); //zoek de menu-button op en sla die op in een variabele//
openButton.addEventListener("click", openMenu); //laat de menu-button luisteren naar click en voert de funcite uit//

function openMenu() { //voeg in de funtie een class toe aan de  nav//
    var deNav = document.querySelector("nav"); //zoek de nav op//
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav > button"); //zoek sluiten button op //
sluitButton.addEventListener("click",sluitMenu); //Laat de button luisteren naar clicks//


function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }


//SVG in dark mode goed mee kleuren //
var hamburger = document.querySelector("header > button > img");
var kruisje = document.querySelector("header > nav > button > img");
var facebook = document.querySelector("footer > section:nth-of-type(2) > ul > li:first-of-type > a > img");
var instagram = document.querySelector("footer > section:nth-of-type(2) > ul > li:nth-of-type(2) > a > img");
var deliveroo = document.querySelector("footer > section:nth-of-type(2) > ul > li:nth-of-type(3) > a > img");

if (window.matchMedia && window.matchMedia ('(prefers-color-scheme:dark)').matches){
  hamburger.src="./images/menuwit.svg"    //afbeelding voor hamburger icon//
  kruisje.src="./images/closewhite.svg"   //afbeelding voor kruisje//
  facebook.src="./images/facebookwit.svg"
  instagram.src="./images/instagramwit.svg"
  deliveroo.src="./images/deliveroowit.svg"
} else {
  hamburger.src="./images/menuzwart.svg"  //afbeelding voor hamburger icon//
  kruisje.src="./images/closeblack.svg"   //afbeelding voor kruisje//
  facebook.src="./images/facebookzwart.svg"
  instagram.src="./images/instagramzwart.svg"
  deliveroo.src="./images/deliveroozwart.svg"
}


//geluidje bij klik //
var deButton = document.querySelector("header > button")
var hetGeluid = document.querySelector("header > audio")

deButton.addEventListener("click",speelGeluid);

function speelGeluid() {
  hetGeluid.play();
}