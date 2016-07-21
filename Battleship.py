#Building Battleship Program
#Joshua and Mamadou
from Processing import *
from random import *
window(400,400)
board=[[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
randRow= randrange(0,5)
randColumn= randrange(0,5)

#Sets the grid in the window
def draw():
    width=80
    i=0
    while i<5:
        newX=width*i
        line (newX,0,newX,400)
        i=i+1
    length=80
    i=0
    while i<5:
        newY=length*i
        line (0,newY,400,newY)
        i=i+1
#Gives conditions for the game
draw()
gameOver= False
width=80
length=80
green=(0,255,0)
while gameOver ==False: 
    row = int (input("which row"))
    column = int(input("which column"))
    if board [row][column]==1:
        gameOver=True #this tells what needs to happen for the game to be over
    else:
        fill(0,255,0)
        rect(width*column,length*row,80,80)  
print ("Game Over") #This tells what would happen for the game to continue on and on
    
    
            
        
           

    
    
    
    