// console.log(maps);
// console.log(emojis);

const canvas =  document.getElementById('game');
const gameContext = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
    let canvasSize = (window.innerHeight > window.innerWidth) 
                    ? window.innerWidth * 0.8 
                    : window.innerHeight * 0.8;

    //Drawing Text
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementSize = canvasSize / 10;
    console.log(canvasSize, elementSize);

    gameContext.font = `${elementSize}px Verdana`;
    gameContext.textAlign = 'end';

    for(let i = 1; i <= 10; i++) {
        gameContext.fillText(emojis['X'], elementSize * i, elementSize);
    }
    


    // gameContext.fillStyle = "rgb(200, 0, 0)";
    // gameContext.fillRect(10, 10, 50, 50);

    // gameContext.fillStyle = "rgba(0, 0, 200, 0.5)";
    // gameContext.fillRect(50, 50, 50, 50);

    // gameContext.fillRect(25, 25, 100, 100);
    // gameContext.clearRect(45, 45, 60, 60);
    // gameContext.strokeRect(50, 50, 50, 50);
  }

//gameContext.fillText('HELLO WORLD', 10, 50);