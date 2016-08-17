from Myro import *
xPos = 50
yPos = 50
xDelta = -2
yDelta = 5

aBall = Circle( Point(xPos,yPos), 10)
aBall.draw(aWindow)

aBall.setFill( color_rgb(255,0,0) )

while timeRemaining(15):
    
    if (0 > xPos) or (500 < xPos):
        xDelta = - xDelta
        
    if (0 > yPos) or (500 < yPos):
        yDelta = - yDelta


    xPos = xPos + xDelta
    yPos = yPos + yDelta
    
    aBall.move(xDelta, yDelta)
    wait(0.01)