function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q10.html?q9=' + check9, '_self');
  });

  if(frameCount >= 21000){ //more or less after 3 minutes
    backHome();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function backHome(){
  window.open('../index.html', '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check9 = url.searchParams.get("q9");
console.log(check9);
