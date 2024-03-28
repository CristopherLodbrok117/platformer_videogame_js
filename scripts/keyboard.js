const keys = {
    KEY_MOVE_RIGHT : { pressed: false },
    KEY_MOVE_LEFT : { pressed: false }
};

// Presionar tecla
window.addEventListener('keydown', (event) => {
    console.log(event);
    
    switch(event.key){

        case KEY_MOVE_RIGHT:
            console.log('Pressing right');
            keys.KEY_MOVE_RIGHT.pressed = true;
            break;

        case KEY_MOVE_LEFT:
            console.log('Pressing left');
            keys.KEY_MOVE_LEFT.pressed = true;
            break;

        case KEY_JUMP:
            console.log('Jumping');
            player.velocity.y = JUMP_FORCE;
            break;
    }
});

// Releasing key
window.addEventListener('keyup', (event) => {
    console.log(event);
    
    switch(event.key){

        case KEY_MOVE_RIGHT:
            console.log('Releasing right');
            keys.KEY_MOVE_RIGHT.pressed = false;
            break;

        case KEY_MOVE_LEFT:
            console.log('Releasing left');
            keys.KEY_MOVE_LEFT.pressed = false;
            break;

    }
});