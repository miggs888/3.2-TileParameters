function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, backColor, lineColor, circleColor) {
    translate(originX,originY);
    fill(backColor);
    rect(0, 0, 1000, 1000);
    stroke(lineColor);
    strokeWeight(5);
    noFill();
    arc(0, 0, 200, 200, 0, HALF_PI);
    arc(100, 100, 200, 200, 0, HALF_PI);
    arc(100, 100, 200, 200, PI, PI+HALF_PI);
    arc(200, 200, 200, 200, HALF_PI, TWO_PI);
    noFill();
    stroke(lineColor);
    strokeWeight(5);
    circle(100, 100, 175);
    noStroke();
    fill(circleColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);

}
function draw() { 
    createTile(0, 0, '#e7d134', '#639986', '#df682a');
    createTile(0, 200, '#28a165', '#f29ed2', '#fac04e');
    createTile(0, 200, '#579ed9', '#dcdade', '#d63b44');
    createTile(200, -400, '#f9130d', '#dcdade', '#ffffff');
    createTile(0, 200, '#f78ae0', '#5cc9f5', '#4af2a1');
    createTile(0, 200, '#0fb2a9', '#010a00', '#ffeb02');
    createTile(200, -400, '#2d4845', '#ba9238', '#c49681');
    createTile(0, 200, '#dde2ed', '#9db08f', '#a690a9');
    createTile(0, 200, '#21676c', '#68c6a6', '#fe982a');
}