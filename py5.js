<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.4/ace.js"></script>
    <script src="./lib/pyodide_dev.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css" media="screen" />
  </head>
  <body>
    <div className="header">
      <h1>Py5.js Demo by @lucapodular</h1>
      <button id="run-button" onClick="runCode()">Run Code</button>
    </div>
    <div className="editor-containter">
      <div id="text-editor">
      </div>
      <div className="canvas-container">
        <div className="p5-canvas-container" id="p5Container">
        </div>
      </div>
    <script>
        var editor = ace.edit("text-editor");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/python");
        editor.session.setOptions({
          tabSize: 2,
        });
        editor.session.insert({row:0, column:0}, 
`def setup ():
    createCanvas(400, 400)
def draw ():
    fill(255, 0, 0)
    ellipse(200, 200, 100)`);
    </script>
    </div>
    <div id="info-box">
      <h3>This Exciting (but untested) Demo Includes:</h3>
      <h4>Structure</h4>
      <p>setup(), draw(), createCanvas()</p>
      <h4>2D Primitives</h4>
      <p>arc(), ellipse(), circle(), line(), point(), quad(), rect(), square(), triangle()</p>
      <h4>Color</h4>
      <p>background(), fill()</p>
      <h4>Mouse Variables</h4>
      <p>mouseX, mouseY, pmouseX, pmouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed</p>
      <h4>Key Variables</h4>
      <p>keyIsPressed, key, keyCode</p>
      <h4>Mouse Events</h4>
      <p>mouseMoved(), mouseDragged(), mousePressed(), mouseReleased(), mouseClicked(), doubleClicked(), mouseWheel()</p>
      <h4>Key Events</h4>
      <p>keyPressed(), keyReleased(), keyIsDown()</p>
      <h4>Random</h4>
      <p>random()</p>
    </div>
    

    <script>
      // Initialize Pyodide, import document, py, window, into python's scope.
      languagePluginLoader.then(() => {
          pyodide.runPython(`
            import io, code, sys
            from js import pyodide, p5, window, document

            document.getElementById('run-button').style.display = 'block';
          `)
      });
      
let wrapper = `
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
`

      function runCode() {
        let sketchCode = editor.getValue();

        let code = sketchCode + '\n' + wrapper; 

        if (window._p5jsCanvas) {
          window._p5jsCanvas.canvas.remove();
        }

        console.log(code);

        pyodide.runPython(code);
      }
    </script>

  </body>
</html>