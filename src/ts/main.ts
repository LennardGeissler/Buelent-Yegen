import './../scss/style.scss'

const section = document.getElementById("moreLeistungen");
const button = document.getElementById("toggleButton");

if (button  && section) {
    button.addEventListener('click', () => {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
        section.style.display === 'block' ? button.style.display = 'none' : 'block';
        
    });
}


//const welcome = document.getElementById("welcome");
//const elementTop = welcome?.getBoundingClientRect().top;

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
  
  // Event-Listener für das Scroll-Ereignis hinzufügen
  window.addEventListener('scroll', handleScroll);