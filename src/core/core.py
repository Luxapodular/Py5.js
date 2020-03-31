import builtins

def updateVariables(p):
  global mouseX, mouseY, pMouseX, pMouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed, keyIsPressed, key, keyCode

  # Mouse Variables
#  movedX = p.movedX
#  movedY = p.movedY
  mouseX = p.mouseX
  mouseY = p.mouseY
  pmouseX = p.pmouseX
  pmouseY = p.pmouseY
  winMouseX = p.winMouseX
  winMouseY = p.winMouseY
  pwinMouseX = p.pwinMouseX
  pwinMouseY = p.pwinMouseY
  mouseButton = p.mouseButton
  mouseIsPressed = p.mouseIsPressed

  # Key Variables
  keyIsPressed = p.keyIsPressed
  key = p.key
  keyCode = p.keyCode

# Our wrapped draw loop and events. Updates all p5 variables and calls draw if defined.
def __preload(p):
  try:
    updateVariables(p)
    preload()
  except: 
    updateVariables(p)
    
def __setup(p):
  try:
    updateVariables(p)
    setup()
  except:
    updateVariables(p)

def __draw(p):
  try:
    updateVariables(p)
    draw()
  except:
    updateVariables(p)

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

  
  
__primitives2D = ['arc', 'ellipse', 'circle', 'line', 'point', 'quad', 'rect', 'square', 'triangle']
__attributes = ['ellipseMode', 'noSmooth', 'rectMode', 'smooth', 'strokeCap', 'strokeJoin', 'strokeWeight']
__curves = ['bezier', 'bezierDetail', 'bezierPoint', 'bezierTangent', 'curve', 'curveDetail', 'curveTightness', 'curvePoint', 'curveTangent']
__vertex = ['beginContour', 'beginShape', 'bezierVertex', 'curveVertex', 'endContour', 'endShape', 'quadraticVertex', 'vertex']
__primitives3D = ['plane', 'box', 'sphere', 'cylinder', 'cone', 'ellipsoid', 'torus']
__models3D = ['loadModel', 'model']
__constants = ['HALF_PI', 'PI', 'QUARTER_PI', 'TAU', 'TWO_PI', 'DEGREES', 'RADIANS']
__environment = ['print', 'frameCount', 'focused', 'cursor', 'frameRate', 'noCursor', 'displayWidth', 'displayHeight', 'windowWidth', 'windowHeight', 'width', 'height', 'fullscreen', 'pixelDensity', 'displayDensity', 'getURL', 'getURLPath', 'getURLParams']
__structure = ['remove', 'noLoop', 'loop', 'push', 'pop', 'redraw']
__rendering = ['createCanvas', 'resizeCanvas', 'noCanvas', 'createGraphics', 'blendMode', 'setAttributes']
__transform = ['applyMatrix', 'resetMatrix', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'shearX', 'shearY', 'translate']
__dictionary = ['createStringDictionary', 'createNumberDictionary']
__acceleration = ['deviceOrientation', 'accelerationX', 'accelerationY', 'accelerationZ', 'pAccelerationX', 'pAccelerationY', 'pAccelerationZ', 'rotationX', 'rotationY', 'rotationZ', 'pRotationX', 'pRotationY', 'pRotationY', 'pRotationZ', 'turnAxis', 'setMoveThreshold', 'setShakeThreshold']
__touch = ['touches']

__allAttributes = __primitives2D + __attributes + __curves + __vertex + __primitives3D + __models3D + __constants + __environment + __structure + __rendering + __transform  + __acceleration

def bindVariables(p):
  for variable in __allAttributes:
    setattr(builtins, variable, getattr(p, variable))
  
def sketch(p):
  global createCanvas, background, fill, arc, ellipse, circle, line, point, quad, rect, square, triangle, random
  
  # Setup Function
  p.setup = lambda: __setup(p)
  p.draw = lambda: __draw(p)
  p.preload = lambda: __preload(p)
  
  # Acceleration
  p.deviceMoved = lambda e: __deviceMoved(p)
  p.deviceTurned = lambda e: __deviceTurned(p)
  p.deviceShaken = lambda e: __deviceShaken(p)
  
  # Mouse Events
  p.mouseMoved = lambda e: __mouseMoved(p)
  p.mouseDragged = lambda e: __mouseDragged(p)
  p.mousePressed = lambda e: __mousePressed(p)
  p.mouseReleased = lambda e: __mouseReleased(p)
  p.mouseClicked = lambda e: __mouseClicked(p)
  p.doubleClicked = lambda e: __doubleClicked(p)
  p.mouseWheel = lambda e: __mouseWheel(p)

  # Key Events
  p.keyPressed = lambda e: __keyPressed(p)
  p.keyReleased = lambda e: __keyReleased(p)
  p.keyTyped = lambda e: __keyTyped(p)
  p.keyIsDown = lambda e: __keyIsDown(p)
  
  # Touch Events
  p.touchStarted = lambda e: __touchStarted(p)
  p.touchMoved = lambda e: __touchMoved(p)
  p.touchEnded = lambda e: __touchEnded(p)
  
  # Window
  p.windowResized = lambda e: __windowResized(p)


  #Canvas
  createCanvas = p.createCanvas

  # color
  background = p.background
  fill = p.fill

  bindVariables(p)

  #random
  random = p.random

# create the p5 sketch and send to the p5Container div
window._p5jsCanvas = p5.new(sketch, "p5Container")