from browser import document, window, alert

import sketch as s

def updateVariables(p):
    s.mouseX = p.mouseX;
    s.mouseY = p.mouseY;

def wrappedDraw(p):
    try:
        updateVariables(p);
        s.draw();
    except:
        updateVariables(p);

def sketch(p):
  p.setup = s.setup
  p.draw = lambda: wrappedDraw(p);
  p.mousePressed = s.mousePressed
  s.createCanvas = p.createCanvas
  s.background = p.background
  s.rectMode = p.rectMode
  s.CENTER = p.CENTER
  s.rect = p.rect
  s.ellipse = p.ellipse
  s.fill = p.fill

myp5 = window.p5.new(sketch)
