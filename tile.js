function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0,0);
    fill('#e7d134');
    rect(0, 0, 1000, 1000);
    stroke('#639986');
    strokeWeight(5);
    noFill();
    arc(0, 0, 230, 230, 0, HALF_PI);
    arc(100, 100, 200, 200, 0, HALF_PI);
    arc(100, 100, 200, 200, PI, PI+HALF_PI);
    arc(200, 200, 230, 230, HALF_PI, TWO_PI);
    noFill();
    stroke('#639986');
    strokeWeight(5);
    circle(100, 100, 175);
    noStroke();
    fill('#df682a');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);

}
function draw() { 
    createTile();
}