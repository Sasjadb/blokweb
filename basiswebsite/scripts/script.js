// menu zichtbaar te maken //
var openButton = document.querySelector("header > button"); //zoek de menu-button op en sla die op in een variabele//
openButton.addEventListener("click", openMenu); //laat de menu-button luisteren naar click en voert de funcite uit//

function openMenu() { //voeg in de funtie een class toe aan de  nav//
    var deNav = document.querySelector("nav"); //zoek de nav op//
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button"); //zoek sluiten button op //
sluitButton.addEventListener("click",sluitMenu); //Laat de button luisteren naar clicks//


function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }

// hamburger icon naar kruisje //