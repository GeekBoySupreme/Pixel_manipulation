function preload() {
  img = loadImage("https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80");
}

function setup() {
  createCanvas(4000, 3000);
  
  img.loadPixels();
  for (x = 0; x < img.width; x = x + 5) {
   for (y = 0; y < img.height; y = y + 5) {
      index = (floor(x) + floor(y) * img.width) * 4;
      red = img.pixels[index]
      blue = img.pixels[index + 1]
      green = img.pixels[index + 2]
      alpha = img.pixels[index + 3]
      //pixel_brightness = (red + blue + green) / 3
      strokeWeight(9 * Math.random())
      stroke(red, blue, green, alpha/(5 * Math.random()))
      line(x + Math.random()*50,y ,x + 50,y + 50 * Math.random())
    }
}
}

