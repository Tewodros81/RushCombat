let hp1 = 100;
let hp2 = 100;
let turn = 1;  // 1 = Hamster 1, 2 = Hamster 2

function attack() {
  const damage = Math.floor(Math.random() * 20) + 5;  // Random damage between 5 and 25

  if (turn === 1) {
    hp2 -= damage;
    document.getElementById('hp2').innerText = Math.max(0, hp2);
    document.getElementById('message').innerText = `Hamster 1 attacks! Hamster 2 loses ${damage} HP.`;

    if (hp2 <= 0) {
      endGame("Hamster 1 wins!");
    } else {
      turn = 2;
      document.getElementById('message').innerText += " Hamster 2's turn.";
    }
  } else {
    hp1 -= damage;
    document.getElementById('hp1').innerText = Math.max(0, hp1);
    document.getElementById('message').innerText = `Hamster 2 attacks! Hamster 1 loses ${damage} HP.`;

    if (hp1 <= 0) {
      endGame("Hamster 2 wins!");
    } else {
      turn = 1;
      document.getElementById('message').innerText += " Hamster 1's turn.";
    }
  }
}

function endGame(winnerMessage) {
  document.getElementById('message').innerText = winnerMessage;
  document.querySelector('button').disabled = true;

  // Send the result to Telegram
  Telegram.WebApp.sendData(JSON.stringify({ winner: winnerMessage }));
}

// Initialize Telegram Web App
Telegram.WebApp.ready();
