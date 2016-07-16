from Myro import *
ObamaDarkBlue = makeColor(0,51,76)
ObamaRed = makeColor(217, 26, 33)
ObamaBlue = makeColor(112,150,158)
ObamaYellow = makeColor(252, 227, 166)
Ab=makePicture("xoCDeFzV_400x400.jpeg")
i=0
PXL= getPixels(Ab)
for p in PXL:
    grayValue = getGray(p)
    if grayValue > 180:
        setColor(p,ObamaYellow)
    elif grayValue < 180 and grayValue > 120:
        setColor(p,ObamaBlue)
    elif grayValue < 120 and grayValue > 60:
        setColor(p,ObamaRed)
    else:
        setColor(p,ObamaDarkBlue)
show(Ab)

        
        

    
  