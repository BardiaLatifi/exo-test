
/**** VARIABLES ****/
const cardsCont = document.getElementById("cardsCont");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let currentlySelectedCard = null;

// The card Objects
const gamesArray = [
  { id: "CSGO2", src: "./img/image1.jpg", fps: { fhd: 160, twoK: 145, fourK: 80 } },
  { id: "silentHill", src: "./img/image2.jpg", fps: { fhd: 120, twoK: 80, fourK: 55 } },
  { id: "warzone2", src: "./img/image3.jpg", fps: { fhd: 120, twoK: 90, fourK: 70 } },
  { id: "cyberpunk", src: "./img/image4.jpg", fps: { fhd: 100, twoK: 55, fourK: 25 } },
  { id: "rdr2", src: "./img/image5.jpg", fps: { fhd: 120, twoK: 80, fourK: 45 } },
  { id: "fortnite", src: "./img/image6.jpg", fps: { fhd: 255, twoK: 120, fourK: 83 } },
  { id: "valorant", src: "./img/image7.jpg", fps: { fhd: 220, twoK: 115, fourK: 95 } },
];


/**** SLIDER ****/

// Initializing the first look of the slider
function createGameCards() {

  gamesArray.forEach(game => {
    // Create a card div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.id = game.id;

    // Create an img element
    const imgElement = document.createElement("img");
    imgElement.src = game.src;

    // Append img and title to the card div
    cardDiv.appendChild(imgElement);

    // Append the card div to the cards container
    cardsCont.appendChild(cardDiv);
  });
  getMiddleCard();
  updateIndicatorLine();
}

// Call the function to create and display the game cards
createGameCards();

// Find the selected card
function getMiddleCard() {
  const cardsCont = document.getElementById("cardsCont");
  const elementChildren = Array.from(cardsCont.children);

  // Calculate middle card index
  const middleCardIndex = Math.floor(elementChildren.length / 2);
  const middleCard = elementChildren[middleCardIndex];

  // Remove the selected-card class from the currently selected card, if it exists
  if (currentlySelectedCard) {
    currentlySelectedCard.classList.remove("selected-card");
  }

  // Highlight the new middle card
  middleCard.classList.add("selected-card");
  currentlySelectedCard = middleCard;
}

// Function to shift cards
function slider(direction) {
  const cardsCont = document.getElementById("cardsCont");
  const firstChild = cardsCont.firstElementChild;

  if (firstChild) {
    if (direction === "next") {
      // Move first child to the end
      cardsCont.appendChild(firstChild);
    } else if (direction === "prev") {
      // Move last child to the front
      const lastChild = cardsCont.lastElementChild;
      cardsCont.insertBefore(lastChild, firstChild);
    }
    getMiddleCard();  // Call to update the middle card after shifting
  }
  
  // Indicator line handler
  updateIndicatorLine();
}

// Indicator Line
function updateIndicatorLine() {
  // First, reset all lines to gray
  const lines = document.querySelectorAll('.indicator-line');
  lines.forEach(line => {
    line.setAttribute('stroke', 'gray');
  });

  // Add black stroke for the currently selected card
  if (currentlySelectedCard) {
    switch (currentlySelectedCard.id) {
      case "CSGO2":
        document.getElementById("line1").setAttribute("stroke", "black");
        break;
      case "silentHill":
        document.getElementById("line2").setAttribute("stroke", "black");
        break;
      case "warzone2":
        document.getElementById("line3").setAttribute("stroke", "black");
        break;
      case "cyberpunk":
        document.getElementById("line4").setAttribute("stroke", "black");
        break;
      case "rdr2":
        document.getElementById("line5").setAttribute("stroke", "black");
        break;
      case "fortnite":
        document.getElementById("line6").setAttribute("stroke", "black");
        break;
      case "valorant":
        document.getElementById("line7").setAttribute("stroke", "black");
        break;
      default:
        break;
    }
  }
  benchmarkHandler();
}

/**** BENCHMARKS ****/

function benchmarkHandler() {

 if (currentlySelectedCard) {
  const selectedGame = gamesArray.find(game => game.id === currentlySelectedCard.id);
  
  if (selectedGame) {
      const fhdValue = selectedGame.fps.fhd;
      const towKValue = selectedGame.fps.twoK;
      const fourKValue = selectedGame.fps.fourK;

      setProgress("fhdProgress", fhdValue);
      setProgress("twoKProgress", towKValue);
      setProgress("fourKProgress", fourKValue);
  }
}

}

/**** ANIMATION ****/

function setProgress(elementId, value) {
  const circle = document.getElementById(elementId);
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (value / 255 * circumference);

  circle.style.strokeDashoffset = offset;

  animateProgress(value, elementId, circumference);
}

function animateProgress(targetValue, elementId, circumference) {
  let currentValue = 0;
  // Calculate the step to increment
  const step = Math.ceil(targetValue / 120); // Adjust for speed of animation

  const circle = document.getElementById(elementId);
  const textElement = document.getElementById(elementId.replace("Progress", "Text"));

  const intervalId = setInterval(() => {
    if (currentValue < targetValue) {
      currentValue += step;
      if (currentValue > targetValue) currentValue = targetValue;

      const offset = circumference - (currentValue / 255 * circumference);
      circle.style.strokeDashoffset = offset;

      // Update the text display
      textElement.textContent = currentValue.toFixed(0); // Show as an integer value
            // Set the color based on currentValue
            switch (true) {
              case (currentValue < 30):
                circle.style.stroke = 'red';
                break;
              case (currentValue < 60):
                circle.style.stroke = 'yellow';
                break;
              case (currentValue < 120):
                circle.style.stroke = 'lightgreen';
                break;
              default:
                circle.style.stroke = 'lime';
                break;
            }
    } else {
      clearInterval(intervalId);
    }
  }, 15);
}


//Events
leftBtn.addEventListener("click", () => slider("prev"));
rightBtn.addEventListener("click", () => slider("next"));