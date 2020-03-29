def updateVariables(p):
  global mouseX, mouseY, pMouseX, pMouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed

  # Mouse Variables
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


def sketch(p):
  global createCanvas, background, fill, arc, ellipse, circle, line, point, quad, rect, square, triangle, random
  p.setup = lambda: __setup(p)
  p.draw = lambda: __draw(p)

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


  #Canvas
  createCanvas = p.createCanvas

  # color
  background = p.background
  fill = p.fill

  # 2D Primitives
  arc = p.arc
  ellipse = p.ellipse
  circle = p.circle
  line = p.line
  point = p.point
  quad = p.quad
  rect = p.rect
  square = p.square
  triangle = p.triangle

  #random
  random = p.random

# create the p5 sketch and send to the p5Container div
window._p5jsCanvas = p5.new(sketch, "p5Container")