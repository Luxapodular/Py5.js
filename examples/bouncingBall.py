x = 50
y = 100
size = 25

vx = 1
vy = 1

def setup ():
  createCanvas(400, 400)
  frameRate(1)
  print("setup!", frameRate())
    
def draw ():
  global x, y, vx, vy
  
  print(frameCount)
  
  background(220)
  fill(255, 0, 0)
  ellipse(x, y, size)
  
  x = x + vx
  y = y + vy
  
  if (x + size >= width or x -size <= 0):
    vx = vx * -1
    
  if (y + size >= height or y + size <= 0):
    vy = vy * -1
      