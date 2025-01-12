const cardsCont = document.getElementById("cardsCont");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let currentlySelectedCard = null;

const gamesArray = [
  { id: "CSGO2", src: "./img/image1.jpg", fps: { fhd: 160, twoK: 145, fourK: 80 } },
  { id: "silentHill", src: "./img/image2.jpg", fps: { fhd: 120, twoK: 80, fourK: 55 } },
  { id: "warzone2", src: "./img/image3.jpg", fps: { fhd: 120, twoK: 90, fourK: 70 } },
  { id: "cyberpunk", src: "./img/image4.jpg", fps: { fhd: 100, twoK: 55, fourK: 25 } },
  { id: "rdr2", src: "./img/image5.jpg", fps: { fhd: 120, twoK: 80, fourK: 45 } },
  { id: "fortnite", src: "./img/image6.jpg", fps: { fhd: 255, twoK: 120, fourK: 83 } },
  { id: "valorant", src: "./img/image7.jpg", fps: { fhd: 220, twoK: 115, fourK: 95 } },
];

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

function benchmarkHandler() {
  const fhdText = document.getElementById("fhdText");
  const twoKText = document.getElementById("towKText");
  const fourKText = document.getElementById("fourKText");

  const fhdProgress = document.getElementById("fhdProgress");
  const towKProgress = document.getElementById("twoKProgress");
  const fourKProgress = document.getElementById("fourKProgress");

  if (currentlySelectedCard) {
    switch (currentlySelectedCard.id) {
      case "CSGO2":
        fhdText.textContent = gamesArray[0].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "0");
        fhdProgress.setAttribute("stroke", "lime");
        
        twoKText.textContent = gamesArray[0].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "0");
        towKProgress.setAttribute("stroke", "lime");

        fourKText.textContent = gamesArray[0].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "70")
        fourKProgress.setAttribute("stroke", "lightgreen");
        break;
      case "silentHill":
        fhdText.textContent = gamesArray[1].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "0");
        fhdProgress.setAttribute("stroke", "lime");

        twoKText.textContent = gamesArray[1].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "70");
        towKProgress.setAttribute("stroke", "lightgreen");

        fourKText.textContent = gamesArray[1].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "141")
        fourKProgress.setAttribute("stroke", "yellow");
        break;
      case "warzone2":
        fhdText.textContent = gamesArray[2].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "0");
        fhdProgress.setAttribute("stroke", "lime");

        twoKText.textContent = gamesArray[2].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "141");
        towKProgress.setAttribute("stroke", "yellow");

        fourKText.textContent = gamesArray[2].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "141")
        fourKProgress.setAttribute("stroke", "yellow");
        break;
      case "cyberpunk":
        fhdText.textContent = gamesArray[3].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "70");
        fhdProgress.setAttribute("stroke", "lightgreen");

        twoKText.textContent = gamesArray[3].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "141");
        towKProgress.setAttribute("stroke", "yellow");

        fourKText.textContent = gamesArray[3].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "212")
        fourKProgress.setAttribute("stroke", "red");
        break;
      case "rdr2":
        fhdText.textContent = gamesArray[4].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "0");
        fhdProgress.setAttribute("stroke", "lime");

        twoKText.textContent = gamesArray[4].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "70");
        towKProgress.setAttribute("stroke", "lightgreen");

        fourKText.textContent = gamesArray[4].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "141")
        fourKProgress.setAttribute("stroke", "yellow");
        break;
      case "fortnite":
        fhdText.textContent = gamesArray[5].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "0");
        fhdProgress.setAttribute("stroke", "lime");

        twoKText.textContent = gamesArray[5].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "0");
        towKProgress.setAttribute("stroke", "lime");

        fourKText.textContent = gamesArray[5].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "70")
        fourKProgress.setAttribute("stroke", "lightgreen");
        break;
      case "valorant":
        fhdText.textContent = gamesArray[6].fps.fhd;
        fhdProgress.setAttribute("stroke-dashoffset", "0");
        fhdProgress.setAttribute("stroke", "lime");

        twoKText.textContent = gamesArray[6].fps.twoK;
        towKProgress.setAttribute("stroke-dashoffset", "0");
        towKProgress.setAttribute("stroke", "lime");

        fourKText.textContent = gamesArray[6].fps.fourK;
        fourKProgress.setAttribute("stroke-dashoffset", "70")
        fourKProgress.setAttribute("stroke", "lightgreen");
        break;
      default:
        break;
    }
  }
}

function progressHandler(index) {

}

//Events
leftBtn.addEventListener("click", () => slider("prev"));
rightBtn.addEventListener("click", () => slider("next"));