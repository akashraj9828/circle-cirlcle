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

// circle_checkbox.positon(700,700)

// circle_checkbox = createCheckbox(" fill");
//  circle_checkbox.changed(changeFill);
// *   cnv = createCanvas(100, 100);

// ang+=angSlider.value()
// ang2+=ang2Slider.value()
angleMode(RADIANS) //set angle mode to radians default is degree
// frameRate(1)

// r=[200,10,50,25,12]
// angle=[0,0.001,0.002,0.003,0.004]

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
  // if(circle_checkbox.changed())
    // background(51)
  if(circle_visible)
  background(51)
 // ang+=angSlider.value();
 // ang2+=angSliderr.value();
//  if(!circle_visible){
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
// if(circle_visible)
// ellipse(0,0,r1*2,r1*2)
// rotate(ang1)
// translate(0,r1-r2)
// if(circle_visible)
// ellipse(0,0,r2*2,r2*2)
// rotate(ang2)
// translate(0,r2-r3)
// stroke(225)
// strokeWeight(pointweight)
// point(0,0)
// if(circle_visible)
// ellipse(0,0,r3*2,r3*2)
// rotate(ang3)
// translate(0,r3-r4)
// stroke(225)
// strokeWeight(pointweight)
// point(0,0)
// if(circle_visible)
// ellipse(0,0,r4*2,r4*2)
// rotate(ang4)
// translate(0,r4-r5)
// if(circle_visible)
// ellipse(0,0,r5*2,r5*2)
// for(i=0;i<5;i++)
// cir(i+1)
// push()
// stroke(225)
// strokeWeight(pointweight)
// point(0,0)
// pop()
//  }


// ang=ang+0.001
// ang1+=0.1
// ang2+=0.01
// ang3+=0.13
// ang4+=0.04
// clear()
pop()


}
