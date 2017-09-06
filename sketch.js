var r1=30

var ang=10

var angSlider
var angSliderr
var ptx=[]
var pty=[]
var angle=[]
var r=[]
var circle_visible=true;
var circle_checkbox
var speed
var pointweight=4
var n=4;
var rslider
var out=false
var circle_visible=true


function setup() {
createCanvas(windowWidth,windowHeight)
background(51)
angSlider=createSlider(0,1,0.2,0.01)
angSliderr=createSlider(0,1,0.2,0.01)
rslider=createSlider(10,500,200,1)
speed=createSlider(5,60,35,2)
circle_checkbox=createCheckbox("toggle circle")
circle_checkbox.changed(bg)
for(i=0;i<n;i++){
  
  angle[i]=ang*3
  ang=ang/10

}


angleMode(RADIANS) //set angle mode to radians default is degree



}

function bg(){
  background(51)
}
function setradius(){  // function that set radius for all the circles excluding the main bigger circle
  for(i=0;i<n;i++){
    r[i]=r1
    r1=r1/2
  }
}
function draw() {
  r1=rslider.value()
  setradius()

  frameRate(speed.value())    // changes framerate live using slider input

  if(circle_checkbox.checked())
    circle_visible=true

  if(!circle_checkbox.checked())
    circle_visible=false
 
  if(circle_visible)
  background(51)
 
 push()
noFill()
stroke(255)
strokeWeight(pointweight)
rotate(ang)
translate(width/2,height/2)



for (i=0;i<n;i++){
  if(circle_visible)
    ellipse(0,0,r[i]*2,r[i]*2)
    rotate(angle[i])
    angle[i]+=(i+1)/100
    
    if(out)   //if circles rotates outside the main circle
    translate(0,r[i]*1.5)
    if(!out)    //if circles rotates inside main circle 
      translate(0,r[i]*0.5)
    
}
ellipse(0,0,5,5)

pop()


}
