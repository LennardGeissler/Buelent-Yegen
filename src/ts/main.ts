import './../scss/style.scss'

//Leistungen-Section und dazu gehöriger Button
const section = document.getElementById("moreServices");
const button = document.getElementById("toggleButton");

//Prüfen, ob Button und Section existieren
if (button && section) {
  button.addEventListener('click', () => { //Event-Listener für das Klick-Event
    section.style.display = section.style.display === 'none' ? 'block' : 'none'; //Anzeigen der Leistungen-Section
    section.style.display === 'block' ? button.style.display = 'none' : 'block'; //Verbergen des Buttons
  });
}

//Welcome-Section und dessen oberster Punkt
const welcome = document.getElementById("welcome");
const elementTop = welcome?.getBoundingClientRect().top;

// Funktion, die beim Scrollen aufgerufen wird
function handleScroll() {

  // Überprüfen, ob das Element im Sichtfeld ist
  if (welcome && elementTop && elementTop < window.innerHeight / 2) {
    welcome.style.transform = "translateX(0%)"; // Animation starten
    welcome.style.transitionDuration = "2.5s";
    window.removeEventListener('scroll', handleScroll); // Event-Listener entfernen, um die Animation nur einmal zu starten
  }
}

// Event-Listener für das Load-Ereignis hinzufügen
window.addEventListener('load', handleScroll);

/*
const carousel = document.querySelector(".aktuelles-inner");
console.log(carousel)

let isDragStart = false, isDragging = false, prevPageX:any, prevScrollLeft:any, positionDiff;

const dragStart = (e:any) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel?.scrollLeft;
}

const dragging = (e:any) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel?.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    if (carousel != null) 
      carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel?.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
}

carousel?.addEventListener("mousedown", dragStart);
carousel?.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel?.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel?.addEventListener("touchend", dragStop);*/