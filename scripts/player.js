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

        this.jumped = false;
        this.doubleJumped = false;
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
            this.jumped = false;
            this.doubleJumped = false;
        }
    }

    jump(){
        if(this.doubleJumped){
            return;
        }

        if(this.jumped){ 
            this.doubleJumped = true; // Presiono brincar en el aire
        }
        else{
            this.jumped = true; // Presiono brincar desde el suelo
        }

        this.velocity.y = JUMP_FORCE; // Misma fuerza de brinco
        
    }

    stoping(){
        if(this.velocity.x == 0 || this.jumped) {
            return;
        }
        if(!keys.KEY_MOVE_LEFT.pressed && !keys.KEY_MOVE_RIGHT.pressed){
            
            if(this.velocity.x >= -1 && this.velocity.x <= 1){
                this.velocity.x = 0;
            }

            else if(this.velocity.x > 0){
                this.velocity.x += REDUCE_RIGHT_SPEED;
            }
            else{
                this.velocity.x += REDUCE_LEFT_SPEED;
            }
        }
    }

    
}