## core.py ##
## Defines all api elements from p5.js and binds these attributes globally
## making them accessible without the need to pull the values using the prefix p5.

import builtins

#####################################
######## Global Attributes ##########
#####################################

######## Environment #########
__environmentAttrs = ['frameCount', 'deltaTime', 'focused', 'displayWidth', 'displayHeight', 'windowWidth', 'windowHeight', 'width', 'height']

######## Events ##########
__accelerationAttrs = ['deviceOrientation', 'accelerationX', 'accelerationY', 'accelerationZ', 'pAccelerationX', 'pAccelerationY', 'pAccelerationZ', 'rotationX', 'rotationY', 'rotationZ', 'pRotationX', 'pRotationY', 'pRotationZ', 'turnAxis']
__keyboardAttrs = ['keyIsPressed', 'key', 'keyCode']
__mouseAttrs = ['movedX', 'movedY', 'mouseX', 'mouseY', 'pmouseX', 'pmouseY', 'winMouseX', 'winMouseY', 'pwinMouseX', 'pwinMouseY', 'mouseButton', 'mouseIsPressed']
__touchAttrs = ['touches']

__eventsAttrs = __mouseAttrs + __keyboardAttrs + __accelerationAttrs + __touchAttrs

######## Image ###########
__imageAttrs = ['pixels']

__globalAttrs = __environmentAttrs + __eventsAttrs + __imageAttrs

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

############### Constants ############
######## CONSTANTS #########

__graphicsConstants = ['P2D', 'WEBGL']
__environmentConstants = ['ARROW', 'CROSS', 'HAND', 'MOVE', 'TEXT', 'WAIT']
__trigonometryConstants = ['HALF_PI', 'PI', 'QUARTER_PI', 'TAU', 'TWO_PI', 'DEGREES', 'RADIANS']
__shapeConstants = ['CORNER', 'CORNERS', 'RADIUS', 'RIGHT', 'LEFT', 'CENTER', 'TOP', 'BOTTOM', 'BASELINE', 'POINTS', 'LINES', 'LINE_STRIP', 'LINE_LOOP', 'TRIANGLES', 'TRIANGLE_FAN', 'TRIANGLE_STRIP', 'QUADS', 'CLOSE', 'OPEN', 'CHORD', 'PIE', 'PROJECT', 'SQUARE', 'ROUND', 'BEVEL', 'MITER']
__colorConstants = ['RGB', 'HSB', 'HSL']
__DOMConstants = ['AUTO']
__inputConstants = ['ALT', 'BACKSPACE', 'CONTROL', 'DELETE', 'CONTROL', 'DOWN_ARROW', 'ENTER', 'ESCAPE', 'LEFT_ARROW', 'OPTION', 'RETURN', 'RIGHT_ARROW', 'SHIFT', 'TAB', 'UP_ARROW']
__renderingConstants = ['BLEND', 'REMOVE', 'ADD', 'DARKEST', 'LIGHTEST', 'DIFFERENCE', 'SUBTRACT', 'EXCLUSION', 'MULTIPLY', 'SCREEN', 'REPLACE', 'OVERLAY', 'HARD_LIGHT', 'SOFT_LIGHT', 'DODGE', 'BURN']
__filterConstants = ['THRESHOLD', 'GRAY', 'OPAQUE', 'INVERT', 'POSTERIZE', 'DILATE', 'ERODE', 'BLUR']
__typographyConstants = ['NORMAL', 'ITALIC', 'BOLD', 'BOLDITALIC']
__verticesConstants = ['LINEAR', 'QUADRATIC', 'BEZIER', 'CURVE', 'STROKE', 'FILL', 'TEXTURE', 'IMMEDIATE']
__webglConstants = ['IMAGE', 'NEAREST', 'REPEAT', 'CLAMP', 'MIRROR']
__deviceConstants = ['LANDSCAPE', 'PORTRAIT']
__defaultConstants = ['GRID', 'AXES']

__allConstants = __graphicsConstants + __environmentConstants + __trigonometryConstants + __shapeConstants + __colorConstants + __DOMConstants + __inputConstants + __renderingConstants + __filterConstants + __typographyConstants + __verticesConstants + __webglConstants + __deviceConstants + __defaultConstants

  
############### Color ################ 
__colorCreating = ['alpha', 'blue', 'brightness', 'color', 'green', 'hue', 'lerpColor', 'lightness', 'red', 'saturation'] 
__colorSetting = ['background', 'clear', 'colorMode', 'fill', 'noFill', 'noStroke', 'stroke', 'erase', 'noErase']
__colorFunctions = __colorCreating + __colorSetting

############### Shape ################ 
__shapePrimitives2d = ['arc', 'ellipse', 'circle', 'line', 'point', 'quad', 'rect', 'square', 'triangle']
__shapeAttributes = ['ellipseMode', 'noSmooth', 'rectMode', 'smooth', 'strokeCap', 'strokeJoin', 'strokeWeight']
__shapeCurves = ['bezier', 'bezierDetail', 'bezierPoint', 'bezierTangent', 'curve', 'curveDetail', 'curveTightness', 'curvePoint', 'curveTangent']
__shapeVertex = ['beginContour', 'beginShape', 'bezierVertex', 'curveVertex', 'endContour', 'endShape', 'quadraticVertex', 'vertex']
__shapePrimitives3d = ['plane', 'box', 'sphere', 'cylinder', 'cone', 'ellipsoid', 'torus']
__shapeModels3d = ['loadModel', 'model']
__shapeFunctions = __shapePrimitives2d + __shapeAttributes + __shapeCurves + __shapeVertex + __shapePrimitives3d + __shapeModels3d

########### Environment ############## 
__environmentFunctions = ['print', 'frameCount', 'deltaTime', 'focused', 'cursor', 'frameRate', 'noCursor', 'displayWidth', 'displayHeight', 'windowWidth', 'windowHeight', 'width', 'height', 'fullscreen', 'pixelDensity', 'displayDensity', 'getURL', 'getURLPath', 'getURLParams']

########### Structure ################ 
__structureFunctions = ['remove', 'noLoop', 'loop', 'push', 'pop', 'redraw']

############### DOM ##################
__DOMFunctions = ['select', 'selectAll', 'removeElements', 'createDiv', 'createP', 'createSpan', 'createImg', 'createA', 'createSlider', 'createButton', 'createCheckbox', 'createSelect', 'createRadio', 'createColorPicker', 'createInput', 'createFileInput', 'createVideo', 'createAudio', 'VIDEO', 'AUDIO', 'createCapture', 'createElement'] 

########### Rendering ################ 
__renderingFunctions = ['createCanvas', 'resizeCanvas', 'noCanvas', 'createGraphics', 'blendMode', 'setAttributes']

########### Transform ################ 
__transformFunctions = ['applyMatrix', 'resetMatrix', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'shearX', 'shearY', 'translate']

############# Data ###################
__dataLocalStorage = ['storeItem', 'getItem', 'clearStorage', 'removeItem']
__dataArray = ['append', 'arrayCopy', 'concat', 'reverse', 'shorten', 'shuffle', 'sort', 'splice', 'subset']
__dataConversion = ['byte', 'char', 'unchar', 'hex', 'unhex']
__dataString = ['join', 'match', 'matchAll', 'nf', 'nfc', 'nfp', 'nfs', 'split', 'splitTokens', 'trim']
__dataFunctions = __dataLocalStorage + __dataArray + __dataConversion + __dataString

############# Events ###################
__eventsAcceleration = ['setMoveThreshold', 'setShakeThreshold']
__eventsKeyboard = ['keyIsDown']
__eventsMouse = ['requestPointerLock', 'exitPointerLock']
__eventsFunctions = __eventsAcceleration + __eventsKeyboard + __eventsMouse

############# Image ###################
__imageStandard = ['createImage', 'saveCanvas', 'saveFrames']
__imageLoading = ['loadImage', 'image', 'tint', 'noTint', 'imageMode']
__imagePixels = ['blend', 'copy', 'filter', 'get', 'loadPixels', 'set', 'updatePixels']
__imageFunctions = __imageStandard + __imageLoading + __imagePixels

############# IO ###################
__ioInput = ['loadJSON', 'loadStrings', 'loadTable', 'loadXML', 'loadBytes', 'httpGet', 'httpPost', 'httpDo']
__ioOutput = ['createWriter', 'save', 'saveJSON', 'saveStrings', 'saveTable']
__ioTime = ['day', 'hour', 'minute', 'millis', 'month', 'second', 'year']
__ioFunctions = __ioInput +  __ioOutput + __ioTime

############# Math ###################
__mathCalculation = ['abs', 'ceil', 'constrain', 'dist', 'exp', 'floor', 'lerp', 'log', 'mag', 'map' , 'max', 'min', 'norm', 'pow', 'round', 'sq', 'sqrt', 'fract']
__mathVector = ['createVector']
__mathNoise = ['noise', 'noiseDetail', 'noiseSeed']
__mathRandom = ['randomSeed', 'random', 'randomGaussian']
__mathTrigonometry = ['acos', 'asin', 'atan', 'atan2', 'cos', 'sin', 'tan', 'degrees', 'radians', 'angleMode']
__mathFunctions = __mathCalculation + __mathVector + __mathNoise + __mathRandom + __mathTrigonometry

############# Typography ###################
__typographyAttributes = ['textAlign', 'textLeading', 'textSize', 'textStyle', 'textWidth', 'textAscent', 'textDescent']
__typographyLoading = ['loadFont', 'text', 'textFont']
__typographyFunctions = __typographyAttributes + __typographyLoading

############# Lights, Camera ###################
__camInteraction = ['orbitControl', 'debugMode', 'noDebugMode']
__camLights = ['ambientLight', 'specularColor', 'directionalLight', 'pointLight', 'lights', 'lightFalloff', 'spotLight', 'noLights']
__camMaterial = ['loadShader', 'createShader', 'shader', 'resetShader', 'normalMaterial', 'texture', 'textureMode', 'textureWrap', 'ambientMaterial', 'emissiveMaterial', 'specularMaterial', 'shininess']
__camCamera = ['camera', 'perspective', 'ortho', 'frustum', 'createCamera']
__camFunctions = __camInteraction + __camLights + __camMaterial + __camCamera

__apiElements = __colorFunctions + __shapeFunctions + __environmentFunctions + __structureFunctions + __DOMFunctions + __renderingFunctions + __transformFunctions + __dataFunctions + __eventsFunctions + __imageFunctions + __ioFunctions + __mathFunctions + __typographyFunctions + __camFunctions

__allAttributes = __allConstants + __apiElements

def bindAPIFunctions(p):
  for variable in __allAttributes:
    setattr(builtins, variable, getattr(p, variable))
    
def sketch(p):
  global createCanvas, random
  
  p.setup = lambda: __setup(p)
  p.draw = lambda: __draw(p)
  p.preload = lambda: __preload(p)

  bindEventFunctions(p)
  bindAPIFunctions(p)
  updateGlobalVariables(p)

  #TODO: isLooping(), disableFriendlyErrors, p5, drawingContext, 