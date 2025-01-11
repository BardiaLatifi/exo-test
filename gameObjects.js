class Game {
  constructor(name, src, fhd, twoK, fourK) {
    this.name = name;
    this.src = src;
    this.fhd = fhd;
    this.twoK = twoK;
    this.fourK = fourK;
  }
}

export const gamesArray = [
  new Game("CSGO2", "./img/image1.jpg", 200, 100, 50),
  new Game("Silent Hill 2", "./img/image2.jpg", 200, 100, 50),
  new Game("Warzone 2", "./img/image3.jpg", 200, 100, 50),
  new Game("Cyberpunk 2077", "./img/image4.jpg", 200, 100, 50),
  new Game("RDR 2", "./img/image5.jpg", 200, 100, 50),
  new Game("Fortnite", "./img/image6.jpg", 200, 100, 50),
  new Game("Valorant", "./img/image7.jpg", 200, 100, 50),
]