const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const images = [
  "./img/image1.jpg",
  "./img/image2.jpg",
  "./img/image3.jpg",
  "./img/image4.jpg",
  "./img/image5.jpg",
  "./img/image6.jpg",
  "./img/image7.jpg"
];

let selectedCard = "";

// Function to update the selectedCard variable
function updateSelectedCard() {
  const cards = document.querySelectorAll(".card");
  const middleCard = cards[3];
  const imgElement = middleCard.querySelector("img");
  const imgSrc = imgElement.src;
  
  console.log(imgSrc);
}

leftBtn.addEventListener("click", () => {
  leftBtnPressed();
  updateSelectedCard();
});

rightBtn.addEventListener("click", () => {
  rightBtnPressed();
  updateSelectedCard();
});

function leftBtnPressed() {
  // Shift the images to the left
  const firstImage = images.shift();
  images.push(firstImage);

  // Update the images in the DOM
  const imgTags = document.querySelectorAll('#cardsCont .card img');
  imgTags.forEach((img, index) => {
    img.src = images[index];
  });
}

function rightBtnPressed() {
  // Shift the images to the right
  const lastImage = images.pop();
  images.unshift(lastImage); 

  // Update the images in the DOM
  const imgTags = document.querySelectorAll('#cardsCont .card img');
  imgTags.forEach((img, index) => {
    img.src = images[index];
  });
}

// Initialize the selectedCard at the beginning
updateSelectedCard();


function fpsHandler() {
  const fhdProgress = document.getElementById("fhdProgress");
  const twoKProgress = document.getElementById("fhdProgress");
  const fourKProgress = document.getElementById("fhdProgress");

  const fhdText = document.getElementById("fhdText");
  const twoKText = document.getElementById("towKText");
  const fourKText = document.getElementById("fourKText");
}