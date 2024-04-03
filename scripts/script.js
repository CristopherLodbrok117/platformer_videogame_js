const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const scaledCanvas = {
    width: canvas.width / BACKGROUND_SCALE,
    height: canvas.height / BACKGROUND_SCALE
};

const background = new Sprite({
    position: {
        x:0,
        y:0
    },
    imageSrc: URL_BACKGROUND
});

const initialTranslateY = -background.image.height + scaledCanvas.height;

const player = new Player(0, 0);
const player2 = new Player(200, 50);


// Canvas size
//drawCanvas(0, 0, canvas.width, canvas.height);
player.draw();
player2.draw();



// Gravity
const animate = () => {
    // Recursive call to achive animation
    window.requestAnimationFrame(animate);
    drawCanvas();
    
    player.update();
    player2.update();

    movePlayer();    
}

function movePlayer(){

    if(keys.KEY_MOVE_RIGHT.pressed ){
        player.velocity.x = RIGHT_SPEED;
    }

    if(keys.KEY_MOVE_LEFT.pressed ){
        player.velocity.x = LEFT_SPEED;
    }
}

function drawCanvas() {
    c.fillStyle = CANVAS_BG_COLOR;
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.save();
    c.scale(4, 4);
    c.translate(0, initialTranslateY);
    background.update();
    c.restore();
}





animate();
// 
