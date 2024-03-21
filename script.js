const dvdText = document.getElementById("dvdText");
/* document.body.style.backgroundColor = "black";   */
const colors = ["red", "green", "blue", "pink", "orange", "purple"];

function loop() {
const hRange = window.innerWidth - dvdText.clientWidth;
const vRange = window.innerHeight - dvdText.clientHeight;
const time = performance.now() * 0.2;

const x = Math.abs((time % (hRange * 2)) - hRange);
dvdText.style.left = `${x}px`;
const y = Math.abs((time % (vRange * 2)) - vRange);
dvdText.style.top = `${y}px`;

const bounces = Math.floor(time / hRange) + Math.floor(time / vRange)
   dvdText.style.color = colors[bounces % colors.length]

animationID = requestAnimationFrame(loop);
}

function createBoxes() {
    const categories = ["Expériences", "Formations", "Projets", "Compétences"];
    const container = document.getElementById("boxes"); // Corrigez l'ID ici

    categories.forEach(category => {
        const box = document.createElement("div");
        box.classList.add("box"); // Ajoutez une classe pour le style
        box.textContent = category;
        container.appendChild(box);
    });
}

// Define the string you want to display
const textToDisplay = "Hey there! I'm Tinéni Baeyens, a web developer in the making. I'm looking for an internship starting september 2024 in front-end development, or in IT project manager. ";

// Function to display text character by character
function displayText(text) {
    let i = 0;
    const displayInterval = setInterval(() => {
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(displayInterval);
        }
    }, 20); // Adjust the interval as needed for the typing speed
}
function createBoxes() {
    const categories = ["Formations & Projects", "Expériences", "Compétences"];
    const container = document.getElementById("boxes");

    if (!container) {
        console.error("Container element not found");
        return;
    }

    categories.forEach(category => {
        const box = document.createElement("div");
        box.classList.add("box"); // Ensure you have CSS for this class
        box.textContent = category;
        container.appendChild(box);
    });
}
document.getElementById("startButton").addEventListener("click", function() {
    const container = document.getElementById("boxes");

    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    } else {
        createBoxes();
    }

    // Stop the animation
    if (animationID) {
        cancelAnimationFrame(animationID);
        animationID = null; // Reset the ID
    }

    displayText(textToDisplay)

    
});

loop();

