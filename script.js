let animationID;
let introTextDisplayed = false;

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

const textToDisplay = "Hey there! I'm Tinéni Baeyens, a web developer in the making. I'm looking for an internship starting september 2024 in front-end/full stack development, or with an IT project manager. ";

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
        // Add an event listener to each box
        box.addEventListener('click', () => {
            // Stop the animation
            if (animationID) {
                cancelAnimationFrame(animationID);
                animationID = null; // Reset the ID
            }
            // Remove all child elements from the container except the clicked one
            Array.from(container.children).forEach(child => {
                if (child !== box) {
                    container.removeChild(child);
                }
            });

        /*     // Remove any text that might be displayed
            const introText = document.getElementById("introText");
            if (introText) {
                introText.remove();
            } */
           
            const textElement = document.createElement("p");
            // Check if the clicked box is "Formations & Projets"
            if (category === "Formations & Projects") {
                window.open("formations-projets.html", "_blank");
            } else if (category === "Expériences") {
                textElement.textContent = "";
            } else if (category === "Compétences") {
                textElement.textContent = "";
            }
            container.appendChild(textElement);
        });
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

    if(!introTextDisplayed) {
        const introText = document.getElementById("introText");
        if (introText) {
            displayText(textToDisplay);
        introTextDisplayed = true;
    }
}   
});

loop();

