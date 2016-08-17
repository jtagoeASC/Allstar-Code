#Bouncing Ball project
from Processing import *
from random import *

window (400,400)#sets length and width of window
blue = (0,0,255)#sets color of the ball
#ellipseMode(CORNER)
fill (0,0,255) #Fills the ellipse with blue color
background(84,84,84)
ellipse( 180, 180, 25, 25 )# sets starting location of ellipse
X = 180
Y = 180

def moveRight():
    global X,Y
    while X<388:
        background(84,84,84)
        ellipse(X, 180, 25, 25)
        X=X+1 
        delay(1)


def moveLeft():
    global X,Y
    while X>12:
        background( 84,84,84 )
        ellipse(X,180,25,25)
        X=X-1
        delay(1)

def moveUp():
    global X,Y
    while Y>12:
        background(84,84,84)
        ellipse(180,Y, 25, 25)
        Y=Y+1 
        delay(1)
        
def moveDown():
    global X,Y
    while Y>388:
        background(84,84,84)
        ellipse(180,Y, 25, 25)
        Y=Y-1 
        delay(1)
        
movements = ("moveRight()","moveLeft()","moveUp","moveDown")
randrange(4)
    
while True :
    movements = ("moveRight()","moveLeft()","moveUp","moveDown")
    randrange(4)
    #moveRight()
    #moveLeft()
    #moveUp()
    #moveDown()
        
        
        