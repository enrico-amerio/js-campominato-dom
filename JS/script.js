const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start-btn');
const difficultyOptions = document.getElementById('difficulty');
const levels = [100, 81, 49];

startBtn.addEventListener('click', function(){
  grid.innerHTML='';
  const cellNumbers = levels[difficultyOptions.value];
  console.log(cellNumbers);
  const difficulty = difficultyOptions.value;
  let points = 0;
  const bombs = [];
  console.log(difficulty);
  
  while (bombs.length < 16){
    bomba = Math.floor(Math.random() * cellNumbers) + 1;
    validBomb = bombs.includes(bomba);
    console.log(validBomb);
    if(!validBomb ){
      bombs.push(bomba)}
      console.log(bombs);
    }
    console.log(bombs);

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
        box.classList.add('clicked');
        points++
        console.log("points", points);
        console.log(box._boxNum);
      }
       if(bombs.includes(box._boxNum)) {
      //   for (let i = 0; i < cellNumbers; i++){
      //     box = box[i]
      //     if (bombs.includes(box._boxNum)){
            box.classList.add('bomb');
            setTimeout(gameOver, 300)
            //     }else{
              //       box.classList.add('clicked');
              //    }
              
              //   }
              
              
              
            }
          })
        };
      });

      
      function genBox([i]) {
        const box = document.createElement("div");
        box.classList.add('box');
        box._boxNum = i + 1;
        return box;
        
      }
      function gameOver() {
        alert('HAI PERSO')
        
      }