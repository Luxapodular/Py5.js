import builtins


#####################################
######## Global Attributes ##########
#####################################

__mouseAttrs = ['mouseX', 'mouseY', 'pmouseX', 'pmouseY', 'winMouseX', 'winMouseY', 'pwinMouseX', 'pwinMouseY', 'mouseIsPressed']
__keyAttrs = ['keyIsPressed', 'key', 'keyCode']
__sketchAttrs = ['width', 'height']

__globalAttrs = __mouseAttrs + __keyAttrs + __sketchAttrs

def updateGlobalVariables(p):
  for variable in __globalAttrs:
    setattr(builtins, variable, getattr(p, variable))

    
######################################
########## Event Functions ###########
######################################

# Our wrapped p5 events.
def __preload(p):
  try:
    updateGlobalVariables(p)
    preload()
  except: 
    updateGlobalVariables(p)
    
def __setup(p):
  try:
    updateGlobalVariables(p)
    setup()
  except:
    updateGlobalVariables(p)

def __draw(p):
  try:
    updateGlobalVariables(p)
    draw()
  except:
    updateGlobalVariables(p)
    
def __mouseMoved(p):
  try:
    mouseMoved()
  except:
    pass
  
def __mouseDragged(p):
  try:
    mouseDragged()
  except:
    pass

def __mousePressed(p):
  try:
    mousePressed()
  except:
    pass

def __mouseReleased(p):
  try:
    mouseReleased()
  except:
    pass

def __mouseClicked(p):
  try:
    mouseClicked()
  except:
    pass
  
def __doubleClicked(p):
  try:
    doubleClicked()
  except:
    pass

def __mouseWheel(p):
  try:
    mouseWheel()
  except:
    pass

def __keyPressed(p):
  try:
    keyPressed(p)
  except:
    pass

def __keyReleased(p):
  try:
    keyReleased()
  except:
    pass

def __keyTyped(p):
  try:
    keyTyped()
  except:
    pass

def __keyIsDown(p):
  try:
    keyIsDown()
  except:
    pass
  
# Events - Acceleration  
def __deviceMoved(p):
  try:
    deviceMoved()
  except:
    pass
  
def __deviceTurned(p):
  try:
    deviceTurned()
  except:
    pass
  
def __deviceShaken(p):
  try:
    deviceShaken()
  except:
    pass

# Events - Touch
def __touchStarted(p):
  try:
    touchStarted()
  except: 
    pass
  
def __touchMoved(p):
  try:
    touchMoved()
  except:
    pass
  
def touchEnded(p):
  try:
    touchEnded()
  except:
    pass
  
# Window
def __windowResized(p):
  try:
    windowResized()
  except:
    pass
  
__eventFunctions = ['mouseMoved', 'mouseDragged', 'mousePressed', 'mouseReleased', 'mouseClicked', 'doubleClicked', 'mouseWheel', 'keyPressed', 'keyReleased', 'keyTyped', 'keyIsDown', 'deviceMoved', 'deviceTurned', 'deviceShaken', 'touchStarted', 'touchMoved', 'touchEnded', 'windowResized']
  
def bindEventFunctions(p):
  for event in __eventFunctions:
    dunderVar = '__' + event
    p[event] = lambda e: globals()[dunderVar](p)
    
######################################
############ API Elements ############
######################################
  
__primitives2D = ['arc', 'ellipse', 'circle', 'line', 'point', 'quad', 'rect', 'square', 'triangle']
__color = ['fill', 'stroke', 'background']
__attributes = ['ellipseMode', 'noSmooth', 'rectMode', 'smooth', 'strokeCap', 'strokeJoin', 'strokeWeight', 'noStroke']
__modes = ['CORNER', 'CENTER', 'RADIUS', 'CORNERS']
#__curves = ['bezier', 'bezierDetail', 'bezierPoint', 'bezierTangent', 'curve', 'curveDetail', 'curveTightness', 'curvePoint', 'curveTangent']
#__vertex = ['beginContour', 'beginShape', 'bezierVertex', 'curveVertex', 'endContour', 'endShape', 'quadraticVertex', 'vertex']
#__primitives3D = ['plane', 'box', 'sphere', 'cylinder', 'cone', 'ellipsoid', 'torus']
#__models3D = ['loadModel', 'model']
#__constants = ['HALF_PI', 'PI', 'QUARTER_PI', 'TAU', 'TWO_PI', 'DEGREES', 'RADIANS']
#__environment = ['frameCount', 'focused', 'cursor', 'frameRate', 'noCursor', 'displayWidth', 'displayHeight', 'windowWidth', 'windowHeight', 'width', 'height', 'fullscreen', 'pixelDensity', 'displayDensity', 'getURL', 'getURLPath', 'getURLParams']
#__structure = ['remove', 'noLoop', 'loop', 'push', 'pop', 'redraw']
#__rendering = ['createCanvas', 'resizeCanvas', 'noCanvas', 'createGraphics', 'blendMode', 'setAttributes']
#__transform = ['applyMatrix', 'resetMatrix', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'shearX', 'shearY', 'translate']
#__dictionary = ['createStringDictionary', 'createNumberDictionary']
#__acceleration = ['deviceOrientation', 'accelerationX', 'accelerationY', 'accelerationZ', 'pAccelerationX', 'pAccelerationY', 'pAccelerationZ', 'rotationX', 'rotationY', 'rotationZ', 'pRotationX', 'pRotationY', 'pRotationY', 'pRotationZ', 'turnAxis', 'setMoveThreshold', 'setShakeThreshold']
#__touch = ['touches']
#
#__allAttributes = __primitives2D + __attributes + __curves + __vertex + __primitives3D + __models3D + __constants + __environment + __structure + __rendering + __transform  + __acceleration

__functionAttributes = __primitives2D + __color + __attributes + __modes

def bindAPIFunctions(p):
  for variable in __functionAttributes:
    setattr(builtins, variable, getattr(p, variable))
    
def sketch(p):
  global createCanvas, random
  
  # Setup Function
  p.setup = lambda: __setup(p)
  p.draw = lambda: __draw(p)
  p.preload = lambda: __preload(p)

  #Canvas
  createCanvas = p.createCanvas
  
  # random
  random = p.random

  bindEventFunctions(p)
  bindAPIFunctions(p)
  updateGlobalVariables(p)