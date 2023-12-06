// Exercise 04: Slime World
// Name: 
// Date: 

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 400,
    height: 300,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Menu, Overworld ]
}

const game = new Phaser.Game(config)
let keyEnter