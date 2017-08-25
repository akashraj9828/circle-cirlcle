var r1=200
var r2=50
var r3=100
var r4=50
var r5=40
var ang=0.001
var ang1=0
var ang2=0
var ang3=0
var ang4=0
var angSlider
var angSliderr
var ptx=[]
var pty=[]
var ang=[]
var r=[]
var circle_visible=true;
var circle_checkbox
var speed
var pointweight=4
function setup() {
createCanvas(500,500)
background(0)
angSlider=createSlider(0,1,0.2,0.01)
angSliderr=createSlider(0,1,0.2,0.01)
speed=createSlider(5,60,35,2)
circle_checkbox=createCheckbox("toggle circle")
circle_checkbox.changed(bg)
// circle_checkbox.positon(700,700)

// circle_checkbox = createCheckbox(" fill");
//  circle_checkbox.changed(changeFill);
// *   cnv = createCanvas(100, 100);

// ang+=angSlider.value()
// ang2+=ang2Slider.value()
angleMode(RADIANS)
// frameRate(1)

r=[200,10,50,25,12]
angle=[0,0.001,0.002,0.003,0.004]

}

function bg(){
  background(51)
}

function draw() {

  frameRate(speed.value())

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
if(circle_visible)
ellipse(0,0,r1*2,r1*2)
rotate(ang1)
translate(0,r1-r2)
if(circle_visible)
ellipse(0,0,r2*2,r2*2)
rotate(ang2)
translate(0,r2-r3)
stroke(225)
strokeWeight(pointweight)
point(0,0)
if(circle_visible)
ellipse(0,0,r3*2,r3*2)
rotate(ang3)
translate(0,r3-r4)
stroke(225)
strokeWeight(pointweight)
point(0,0)
if(circle_visible)
ellipse(0,0,r4*2,r4*2)
rotate(ang4)
translate(0,r4-r5)
if(circle_visible)
ellipse(0,0,r5*2,r5*2)
// for(i=0;i<5;i++)
// cir(i+1)
push()
stroke(225)
strokeWeight(pointweight)
point(0,0)
pop()
//  }


ang=ang+0.001
ang1+=0.1
ang2+=0.01
ang3+=0.13
ang4+=0.04
// clear()
pop()


}
// function cir(ind){
//
//   translate(0,r[i]-r[i+1])
//   ellipse(0,0,r[i]*2,r[i]*2)
//   rotate(angle[i+1])

// }
// function mousePressed() {
//   clear();
//   noLoop()
//   loop()
// }
