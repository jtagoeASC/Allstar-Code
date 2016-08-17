#Space invaders Project
#Joshua, James, and Keven
from Processing import *

window(700,700)
fill(0,0,0)
background(0,0,0)
X=25
rect(X,600,150,25)

#Makes the ship
def ship():
    fill (255,255,255)
    rect (25,600,150,25)
    
ship()

#Conditions for moving right
def draw():
    background(0,0,0)
    rect(X,600,150,25)
    

def doKeyPressed():
    global X
    if key()=='Left':
        if X>0:
            X=X-5
            draw()        
        
    if key() == 'Right':
        if X<550:
            X=X+5
            draw()
                
      
onKeyPressed+=doKeyPressed



#def doKeyReleased():
 #   if moveLeft==key up:
onKeyPressed+=doKeyPressed      
        

#onKeyReleased += doKeyReleased   