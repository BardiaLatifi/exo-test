const cardsCont = document.getElementById('cardsCont');

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let currentlySelectedCard = null;

const gamesArray = [
  { id: 'CSGO2', src: "./img/image1.jpg", fps: { fhd: 160, '2k': 145, '4k': 80 } },
  { id: 'silentHill', src: "./img/image2.jpg", fps: { fhd: 120, '2k': 80, '4k': 60 } },
  { id: 'warzone2', src: "./img/image3.jpg", fps: { fhd: 120, '2k': 80, '4k': 65 } },
  { id: 'cyberpunk', src: "./img/image4.jpg", fps: { fhd: 100, '2k': 60, '4k': 40 } },
  { id: 'rdr2', src: "./img/image5.jpg", fps: { fhd: 120, '2k': 80, '4k': 45 } },
  { id: 'fortnite', src: "./img/image6.jpg", fps: { fhd: 255, '2k': 120, '4k': 83 } },
  { id: 'valorant', src: "./img/image7.jpg", fps: { fhd: 220, '2k': 115, '4k': 95 } },
];

function createGameCards() {

  gamesArray.forEach(game => {
    // Create a card div
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = game.id;

    // Create an img element
    const imgElement = document.createElement('img');
    imgElement.src = game.src;

    // Append img and title to the card div
    cardDiv.appendChild(imgElement);

    // Append the card div to the cards container
    cardsCont.appendChild(cardDiv);
  });
  getMiddleCard();
}

// Call the function to create and display the game cards
createGameCards();

function getMiddleCard() {
  const cardsCont = document.getElementById('cardsCont');
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
  currentlySelectedCard = middleCard; // Update the currently selected card
}

// Function to shift cards
function shiftCards(direction) {
  const cardsCont = document.getElementById('cardsCont');
  const firstChild = cardsCont.firstElementChild;

  if (firstChild) {
    if (direction === 'next') {
      // Move first child to the end
      cardsCont.appendChild(firstChild);
      getMiddleCard();
    } else if (direction === 'prev') {
      // Move last child to the front
      const lastChild = cardsCont.lastElementChild;
      cardsCont.insertBefore(lastChild, firstChild);
      getMiddleCard();
    }
  }
  console.log(document.getElementById("cardsCont").childNodes);
}

function benchmarkHandler() {

}

//Events
leftBtn.addEventListener("click", () => shiftCards('next'));
rightBtn.addEventListener("click", () => shiftCards('prev'));