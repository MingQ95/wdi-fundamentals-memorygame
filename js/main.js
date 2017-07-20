var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var score = 0;

var updateScore = function() {
  scoreDisplay = "Score: " + score;
  document.getElementsByTagName('h3')[0].textContent = scoreDisplay;
}

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    score++;
    updateScore();
  } else {
    alert("Sorry, try again.");
  }
  emptyCards();
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch, 200);
  }
};

var emptyCards = function () {
  while (cardsInPlay.length > 0) {
    cardsInPlay.pop();
  }
}

var resetBoard = function() {
  emptyCards();
  for (var i = 0; i < 4; ++i) {
    var child = document.getElementsByTagName('img')[0];
    document.getElementById('game-board').removeChild(child);
  }
  score = 0;
  updateScore();
  createBoard();
}

var createBoard = function() {
  document.getElementsByTagName('button')[0].addEventListener('click',resetBoard);
  for (var i = 0; i < cards.length; ++i) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
};

createBoard();
