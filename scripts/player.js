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
        
        this.moving(); // Moves hor-vert
        this.stoping(); // Reduces horizontal speed

        this.gravity(); // Reduces vertical velocity
        
        
    }

    moving() {
        this.position.y += this.velocity.y; // mover verticalmente

        if(this.velocity.x == 0) {
            return;
        }
        
        this.position.x += this.velocity.x; // mover horizontalmente
    }

    gravity(){

        if((this.position.y + this.height + this.velocity.y) < CANVAS_HEIGHT){ // Sigue cayendo
            this.velocity.y += GRAVITY; // Aumentar velocidad de caida
        }
        else{ // Detener caida
            this.velocity.y = 0;
        }
    }

    stoping(){
        if(this.velocity.x == 0) {
            return;
        }
        if(!keys.KEY_MOVE_LEFT.pressed && !keys.KEY_MOVE_RIGHT.pressed){
            if(this.velocity.x > 0){
                this.velocity.x += REDUCE_RIGHT_SPEED;
            }
            else{
                this.velocity.x += REDUCE_LEFT_SPEED;
            }
        }
    }
}