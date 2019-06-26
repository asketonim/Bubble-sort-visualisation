let lines = []
let i = 0
let j = 0

function setup() {
  createCanvas(800, 500)

  for (let i = 0; i < width; i++)
    lines[i] = random(0, height)

 // sort(lines)
}


function draw() {
  background(0)
  stroke(255)

  for (let q = 0; q < 150; q++){

    if (i < lines.length){

      if (j < lines.length - i - 1){
        if (lines[j] > lines[j + 1]){
          let temp = lines[j + 1]
          lines[j + 1] = lines[j]
          lines[j] = temp
        }
        j++;
      }

      else {
        i++;
        j = 0;
      }

    }
  }

  for (let i = 0; i < width; i++){
    line(i, height, i, height - lines[i]);
  }
}
