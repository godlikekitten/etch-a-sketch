// pseudocode practice
// create 16x16 grid of square divs in DOM 
// place the squares in another container
// -960px
// make a hover effect to change the color of the square
// -loop to change color multiple times?
// add button at top of screen to prompt user for anumber of squares for new grid
// -limit 100
// -same size 
// -clear board 

var container =  document.createElement('div');
container.className = ".container";
container.style.cssText = "display: grid; width: 960px; height: 960px; border: 1px solid #000;";
document.querySelector('body').appendChild(container);
const containerMain = document.getElementsByClassName(".container")[0];

function randomColor (){
    return Math.floor(Math.random() * 256);
}

function createCanvas(canvas) {
    container.style.gridTemplateColumns = `repeat(${canvas}, 1fr)`;
    for (var h = 0; h < canvas; h++){
        for (var i = 0; i < canvas; i++) {
            let pixel = document.createElement('div');
            pixel.className = ".pixel";
            pixel.style.cssText = "height: auto; width: auto;";
            pixel.addEventListener('mouseover', function backgroundChange() {
                const randomizedColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
                pixel.style.backgroundColor = randomizedColor;
            });
            document.getElementsByClassName(".container")[0].appendChild(pixel);
        }
    }
}

createCanvas(16);

let changeCanvas = document.createElement('button');
changeCanvas.innerHTML = "Change canvas size";
changeCanvas.addEventListener('click', function() {
    var input = prompt("Enter area of new canvas between 1 - 100. Values greater than 100 or less than 0 will default to their respective closest values","16");
    if (input > 100) input = 100;
    if (input < 0) input = 0;
    containerMain.innerHTML = "";
    createCanvas(input);
})
document.querySelector('body').appendChild(changeCanvas);

//too lazy to add button to the top right now and add CSS to make it look pretty