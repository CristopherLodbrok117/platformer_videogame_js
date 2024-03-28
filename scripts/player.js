class Player{
    constructor(x, y){
        this.position = {
            x : x,
            y : y
        }
        this.velocity = {
            x : 0,
            y : 1
        }
        this.width = PLAYER_WIDTH;
        this.height = PLAYER_HEIGHT;
    }

    draw(width, height){
        c.fillStyle = PLAYER_COLOR;
        c.fillRect(this.position.x, this.position.y, width, height);
    }

    draw(){
        c.fillStyle = PLAYER_COLOR;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        

        this.position.y += this.velocity.y; // mover

        if((this.position.y + this.height + this.velocity.y) < CANVAS_HEIGHT){ // Sigue cayendo
            this.velocity.y += GRAVITY; // Aumentar velocidad
        }
        else{ // Detener caida
            this.velocity.y = 0;
        }
        
        console.log(this.position.y);
    }
}