# brython + p5js.org adapted from code from Kiko Correoso
# with correction from Pierre Quentel
# Adaptations by Luca Damasco Github @Luxapodular

def setup():
  createCanvas(700, 410)
  background(0)
  rectMode(CENTER)

def draw():
  fill(255,255,0,128)
  rect(mouseX,mouseY,50,50)

def mousePressed():
  background(0)
