const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start-btn');
const difficultyOptions = document.getElementById('difficulty');
const levels = [100, 81, 49];
const endGame = document.querySelector('.popup-container');
const popup = document.querySelector('.popup-message');
const audioClick = new Audio('sounds/click.wav');
const audioBomb = new Audio('sounds/explosion.wav');
const audioOver = new Audio('sounds/game-over-voice.wav');
const audioWin = new Audio('sounds/jingle_win.wav');
const audioLoop = new Audio('sounds/music-loop.mp3')
const score = document.getElementById('points'); 
const refreshBtn = document.getElementById("refresh-btn");


startBtn.addEventListener('click', function(){
  grid.innerHTML='';
  const cellNumbers = levels[difficultyOptions.value];
  const difficulty = difficultyOptions.value;
  let points = 0;
  score.innerHTML = `${points}`;
  const bombs = [];
  startBtn.innerText = 'Restart';
  audioLoop.play();
  audioLoop.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
  
  while (bombs.length < 16){
    bomba = Math.floor(Math.random() * cellNumbers) + 1;
    validBomb = bombs.includes(bomba);
    if(!validBomb ){
      bombs.push(bomba)}
    }

  for (let i = 0; i < cellNumbers; i++){
    let box = genBox([i]);
      if(difficulty == 0){
        box.classList.add('easy');
      }else if(difficulty == '1'){
        box.classList.add('normal');
      }else{
        box.classList.add('hard');
      };
    grid.append(box);
    box.addEventListener('click', function(){
      if(!box.classList.contains('clicked') && !bombs.includes(box._boxNum)){
        audioClick.play();
        box.classList.add('clicked');
        points++
        score.innerHTML = `${points}`
      }
      if (points == cellNumbers - 16){
        setTimeout(gameWin, 1000)
      }
      if(bombs.includes(box._boxNum)) {
         const boxes = document.querySelectorAll('.box')
         audioBomb.play();
         for (let i = 0; i < cellNumbers; i++){
           if (bombs.includes(boxes[i]._boxNum)){
            boxes[i].classList.add('bomb');
          }else{
            boxes[i].classList.add('clicked');
          }
          setTimeout(gameOver, 1000)
        }
      }
    })
  };
});
refreshBtn.addEventListener("click", function(){
  window.location.reload();
})



function genBox([i]) {
  const box = document.createElement("div");
  box.classList.add('box');
  box._boxNum = i + 1;
  return box;
}
function gameOver() {
  audioLoop.pause();
  audioOver.play();
  endGame.classList.remove('d-none');
  popup.innerHTML = "HAI PERSO";
}
function gameWin() {
  audioLoop.pause();
  audioWinplay();
  endGame.classList.remove('d-none');
  popup.innerHTML = "HAI VINTO";
}