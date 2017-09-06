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
var fps
var pointweight=4
var n=4;
var rslider
var out=false
var circle_visible=true


function setup() {
createCanvas(windowWidth,windowHeight)
background(51)


fps=createSlider(5,60,35,2)
fps.position(60,50)
text("Fps:",15,67)

rslider=createSlider(10,500,200,1)
rslider.position(60,80)
text("Radius:",15,95)

scl=createSlider(0,10,1,0.01)
scl.position(60,115)
text("Scale:",15,130)

angoffset=createSlider(0,10,1,0.01)
angoffset.position(61,145)
text("AngleBoost",1,160)

alpha=createSlider(0,255,1,0.1)
alpha.position(60,175)
text("Alpha:",15,190)



circle_checkbox=createCheckbox("toggle circle")
circle_checkbox.changed(clear_bg);
trace_center=createCheckbox("trace center")
for(i=0;i<n;i++){
  
  angle[i]=ang*3
  ang=ang/10

}
angleMode(RADIANS) //set angle mode to radians default is degree



}

function clear_bg(){
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
  s=scl.value()
trace=false
  angB=angoffset.value()/70;
 

  frameRate(fps.value())    // changes framerate live using slider input

  if(circle_checkbox.checked())
    circle_visible=true

  if(!circle_checkbox.checked())
    circle_visible=false

  if(trace_center.checked())
    trace=true
  if(!trace_center.checked())
    trace=false
  if(circle_visible)
  background(51)
 push()
noFill()
stroke(255)
strokeWeight(pointweight)
rotate(ang)

translate(width/2,height/2)

scale(s)


for (i=0;i<n;i++){
  if(circle_visible){
    ellipse(0,0,r[i]*2,r[i]*2)}
    else{
      push()
      stroke(255,255,255,alpha.value())
      ellipse(0,0,r[i]*2,r[i]*2)
      pop()
    }
    rotate(angle[i])
    angle[i]+=angB/(i+1)
    
    if(out)   //if circles rotates outside the main circle
    translate(0,r[i]*1.5)
    if(!out)    //if circles rotates inside main circle 
      translate(0,r[i]*0.5)
    
}
if(trace)
ellipse(0,0,3,3)
pop()


}
