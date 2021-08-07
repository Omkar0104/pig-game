const score_p0 = document.getElementById("score_p0");
const score_p1 = document.getElementById("score_p1");
const curr_player0 = document.getElementById("curr_player0");
const curr_player1 = document.getElementById("curr_player1");
const hold = document.querySelector(".btn--hold");
const again = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");

var curr = 0;
var activePlayer = 0;
document.querySelector(".btn--roll").addEventListener("click", function () {
  var dice = Math.trunc(Math.random() * 6) + 1;

  document.querySelector(".btn--roll").classList.add("rotate");
  document.querySelector(".imgBtn").src = `img/dice-${dice}.png`;
  setInterval(function () {
    document.querySelector(".btn--roll").classList.remove("rotate");
  }, 1000);
  if (dice !== 1) {
    curr = curr + dice;
    document.getElementById(`curr_player${activePlayer}`).textContent = curr;
  } else {
    document.querySelector(`.dot-${activePlayer}`).classList.remove("active");
    curr = 0;
    document.getElementById(`curr_player${activePlayer}`).textContent = curr;
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector(`.dot-${activePlayer}`).classList.add("active");
  }
});
hold.addEventListener("click", function () {
  document.getElementById(`score_p${activePlayer}`).textContent =
    Number(document.getElementById(`score_p${activePlayer}`).textContent) +
    curr;
  if (
    Number(document.getElementById(`score_p${activePlayer}`).textContent) < 100
  ) {
    document.querySelector(`.dot-${activePlayer}`).classList.remove("active");
    curr = 0;
    document.getElementById(`curr_player${activePlayer}`).textContent = curr;
    activePlayer = activePlayer == 0 ? 1 : 0;
    document.querySelector(`.dot-${activePlayer}`).classList.add("active");
  } else {
    roll.disabled = true;
    hold.disabled = true;
    document.body.backgroundColor = "rgb(21 255 0 / 90%);";

    document.querySelector(`.card${activePlayer}`).classList.add("winner");
    document.querySelector(`.Player${activePlayer}`).style.left = "8.2rem";
    document.querySelector(`#score_p${activePlayer}`).style.left = "1.5rem";
    document.querySelector(`.curr${activePlayer}`).style.left = "4rem";
    document.querySelector(".won").style.display = "block";
    document.querySelector(".won").textContent = `Hurrey,${
      activePlayer == 0 ? "Player 1" : "Player 2"
    } Won the Game`;
  }
});
again.addEventListener('click',function(){
  roll.disabled = false;
  hold.disabled = false;
  document.body.backgroundColor = "rgb(21 255 0 / 90%);";

  document.querySelector(`.card${activePlayer}`).classList.remove("winner");
  document.querySelector(`.Player${activePlayer}`).style.left = "7rem";
  document.querySelector(`#score_p${activePlayer}`).style.left = "2.5rem";
  document.querySelector(`.curr${activePlayer}`).style.left = "2.5rem";
  document.querySelector(".won").style.display = "none";
  score_p0.textContent=0;
  score_p1.textContent=0;
  curr_player0.textContent=0;
  curr_player1.textContent=0;
  document.querySelector(`.dot-${activePlayer}`).classList.remove("active");
  document.querySelector(`.dot-0`).classList.add("active");
  curr=0;
  activePlayer=0;
  document.getElementById(`curr_player${activePlayer}`).textContent = curr;
})