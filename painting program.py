#Painting Program
#Joshua and Keven
from Processing import *
window(400,400)#Gives window dimensions
fill (255,0,0) #Fills the rectangle with red color
rect(0,0,200,50)
fill(0,255,0)#Fills the other rectangle with green color
rect(200,0,200,50)
#Allows for color to show after clicking the specific color
def doMouseClicked():
    print( 'mouse clicked at ' + str(mouseX()) + ', ' + str(mouseY()) )
    x=0
    if mouseX() >0 and mouseX() <200 and mouseY() > 0 and mouseY()<200:
        stroke(255,0,0)
    elif mouseX() > 200 and mouseX <400 and mouseY() > 0 and mouseY() < 200:
        stroke(0,255,0)
onMouseClicked += doMouseClicked

#Allows for color to be shown when dragged every where in the place where defined
def doMouseDragged():
    if mouseY() >50:
        line(pmouseX(), pmouseY(), mouseX(), mouseY())
onMouseDragged += doMouseDragged
