/**
 * Loads an external JS file.
 * @param {object} args - An object with two parameters
 *    @param {string} url - URL of file to load
 *    @param {function} onLoad - Called when file is loaded.
 */
function loadExternalJS ({url, onLoad}) {
  var script = document.createElement('script');
  script.onload = onLoad;
  script.src = url;
  document.head.appendChild(script);
}

/**
 * Py5
 * 
 * The Py5 wrapper instantiates pyodide, remaps the p5 library in python, and allows the user
 * to run processing.py sketches.
 * 
 * Requires p5.js to be loaded prior to Py5.
 */
class Py5 {
  constructor (args) {
    let { onReady } = args;
    this._p5Reference = null;
    window._Py5 = this;

    this.onReady = () => {
      onReady && onReady();
      this.ready = true;
    }

    /**
     * Initializes py5 when pyodide is loaded into the page.
     */
     let onPyodideLoad = () => {
        // Initialize Pyodide
        languagePluginLoader.then(() => {
            // import required modules into python's scope.
            pyodide.runPython(`
              import io, code, sys
              from js import pyodide, p5, window, document
            `);

            console.log("%c Loaded core.py", 'color: green');
            pyodide.runPython(_pyCore);
            this.onReady();
        });
      }

    // Load pyodide, if needed.
    if (!window.pyodide) {
      this.ready = false;

      loadExternalJS({
        url: this.pyodideURL,
        onLoad: onPyodideLoad
      })

    } else {
      this.ready = true;
      onReady && onReady();
    }

  }

  // Link to pyodide CDN
  get pyodideURL () {
    return "https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js";
  }

  /**
   * Runs a py5 sketch. If a canvasContainer is provided, the p5 canvas
   * will be attached.
   * @param {string} sketchCode The string representing the py5 sketch to run.
   * @param {string} canvasContainer optional - If provided, the p5 canvas will be added to the div with this ID.
   */
  runSketch (sketchCode, canvasContainer) {
    if (!this.ready) {
      throw new Error("Py5 is not ready.");
    }

    // Remove p5 canvas, event handlers, and references to previous p5 sketch, if they exist.
    if (this.p5Reference && this.p5Reference.remove) {
      this.p5Reference.remove();
    }

    let instancedCode = "";

    if (canvasContainer) {
      instancedCode = `\njs._Py5.p5Reference = p5.new(sketch, "${canvasContainer}")`
    } else {
      instancedCode = `\njs._Py5.p5Reference = p5.new(sketch)`
    }

    pyodide.runPython(sketchCode + instancedCode);
  }

  /**
   * @type {object} reference to the p5 object.
   */
  get p5Reference () {
    return this._p5Reference;
  }

  set p5Reference (ref) {
    this._p5Reference = ref;
  }
}

var _pyCore  = `
_K='CONTROL'
_J='keyIsDown'
_I='height'
_H='width'
_G='windowHeight'
_F='windowWidth'
_E='displayHeight'
_D='displayWidth'
_C='focused'
_B='deltaTime'
_A='frameCount'
import builtins
__environmentAttrs=[_A,_B,_C,_D,_E,_F,_G,_H,_I]
__accelerationAttrs=['deviceOrientation','accelerationX','accelerationY','accelerationZ','pAccelerationX','pAccelerationY','pAccelerationZ','rotationX','rotationY','rotationZ','pRotationX','pRotationY','pRotationZ','turnAxis']
__keyboardAttrs=['keyIsPressed','key','keyCode']
__mouseAttrs=['movedX','movedY','mouseX','mouseY','pmouseX','pmouseY','winMouseX','winMouseY','pwinMouseX','pwinMouseY','mouseButton','mouseIsPressed']
__touchAttrs=['touches']
__eventsAttrs=__mouseAttrs+__keyboardAttrs+__accelerationAttrs+__touchAttrs
__imageAttrs=['pixels']
__globalAttrs=__environmentAttrs+__eventsAttrs+__imageAttrs
def updateGlobalVariables(p):
	for variable in __globalAttrs:setattr(builtins,variable,getattr(p,variable))
def __preload(p):
	try:updateGlobalVariables(p);preload()
	except:updateGlobalVariables(p)
def __setup(p):
	try:updateGlobalVariables(p);setup()
	except:updateGlobalVariables(p)
def __draw(p):
	try:updateGlobalVariables(p);draw()
	except:updateGlobalVariables(p)
def __mouseMoved(p):
	try:mouseMoved()
	except:pass
def __mouseDragged(p):
	try:mouseDragged()
	except:pass
def __mousePressed(p):
	try:mousePressed()
	except:pass
def __mouseReleased(p):
	try:mouseReleased()
	except:pass
def __mouseClicked(p):
	try:mouseClicked()
	except:pass
def __doubleClicked(p):
	try:doubleClicked()
	except:pass
def __mouseWheel(p):
	try:mouseWheel()
	except:pass
def __keyPressed(p):
	try:keyPressed(p)
	except:pass
def __keyReleased(p):
	try:keyReleased()
	except:pass
def __keyTyped(p):
	try:keyTyped()
	except:pass
def __keyIsDown(p):
	try:keyIsDown()
	except:pass
def __deviceMoved(p):
	try:deviceMoved()
	except:pass
def __deviceTurned(p):
	try:deviceTurned()
	except:pass
def __deviceShaken(p):
	try:deviceShaken()
	except:pass
def __touchStarted(p):
	try:touchStarted()
	except:pass
def __touchMoved(p):
	try:touchMoved()
	except:pass
def touchEnded(p):
	try:touchEnded()
	except:pass
def __windowResized(p):
	try:windowResized()
	except:pass
__eventFunctions=['mouseMoved','mouseDragged','mousePressed','mouseReleased','mouseClicked','doubleClicked','mouseWheel','keyPressed','keyReleased','keyTyped',_J,'deviceMoved','deviceTurned','deviceShaken','touchStarted','touchMoved','touchEnded','windowResized']
def bindEventFunctions(p):
	for event in __eventFunctions:dunderVar='__'+event;p[event]=lambda e:globals()[dunderVar](p)
__graphicsConstants=['P2D','WEBGL']
__environmentConstants=['ARROW','CROSS','HAND','MOVE','TEXT','WAIT']
__trigonometryConstants=['HALF_PI','PI','QUARTER_PI','TAU','TWO_PI','DEGREES','RADIANS']
__shapeConstants=['CORNER','CORNERS','RADIUS','RIGHT','LEFT','CENTER','TOP','BOTTOM','BASELINE','POINTS','LINES','LINE_STRIP','LINE_LOOP','TRIANGLES','TRIANGLE_FAN','TRIANGLE_STRIP','QUADS','CLOSE','OPEN','CHORD','PIE','PROJECT','SQUARE','ROUND','BEVEL','MITER']
__colorConstants=['RGB','HSB','HSL']
__DOMConstants=['AUTO']
__inputConstants=['ALT','BACKSPACE',_K,'DELETE',_K,'DOWN_ARROW','ENTER','ESCAPE','LEFT_ARROW','OPTION','RETURN','RIGHT_ARROW','SHIFT','TAB','UP_ARROW']
__renderingConstants=['BLEND','REMOVE','ADD','DARKEST','LIGHTEST','DIFFERENCE','SUBTRACT','EXCLUSION','MULTIPLY','SCREEN','REPLACE','OVERLAY','HARD_LIGHT','SOFT_LIGHT','DODGE','BURN']
__filterConstants=['THRESHOLD','GRAY','OPAQUE','INVERT','POSTERIZE','DILATE','ERODE','BLUR']
__typographyConstants=['NORMAL','ITALIC','BOLD','BOLDITALIC']
__verticesConstants=['LINEAR','QUADRATIC','BEZIER','CURVE','STROKE','FILL','TEXTURE','IMMEDIATE']
__webglConstants=['IMAGE','NEAREST','REPEAT','CLAMP','MIRROR']
__deviceConstants=['LANDSCAPE','PORTRAIT']
__defaultConstants=['GRID','AXES']
__allConstants=__graphicsConstants+__environmentConstants+__trigonometryConstants+__shapeConstants+__colorConstants+__DOMConstants+__inputConstants+__renderingConstants+__filterConstants+__typographyConstants+__verticesConstants+__webglConstants+__deviceConstants+__defaultConstants
__colorCreating=['alpha','blue','brightness','color','green','hue','lerpColor','lightness','red','saturation']
__colorSetting=['background','clear','colorMode','fill','noFill','noStroke','stroke','erase','noErase']
__colorFunctions=__colorCreating+__colorSetting
__shapePrimitives2d=['arc','ellipse','circle','line','point','quad','rect','square','triangle']
__shapeAttributes=['ellipseMode','noSmooth','rectMode','smooth','strokeCap','strokeJoin','strokeWeight']
__shapeCurves=['bezier','bezierDetail','bezierPoint','bezierTangent','curve','curveDetail','curveTightness','curvePoint','curveTangent']
__shapeVertex=['beginContour','beginShape','bezierVertex','curveVertex','endContour','endShape','quadraticVertex','vertex']
__shapePrimitives3d=['plane','box','sphere','cylinder','cone','ellipsoid','torus']
__shapeModels3d=['loadModel','model']
__shapeFunctions=__shapePrimitives2d+__shapeAttributes+__shapeCurves+__shapeVertex+__shapePrimitives3d+__shapeModels3d
__environmentFunctions=['print',_A,_B,_C,'cursor','frameRate','noCursor',_D,_E,_F,_G,_H,_I,'fullscreen','pixelDensity','displayDensity','getURL','getURLPath','getURLParams']
__structureFunctions=['remove','noLoop','loop','push','pop','redraw']
__DOMFunctions=['select','selectAll','removeElements','createDiv','createP','createSpan','createImg','createA','createSlider','createButton','createCheckbox','createSelect','createRadio','createColorPicker','createInput','createFileInput','createVideo','createAudio','VIDEO','AUDIO','createCapture','createElement']
__renderingFunctions=['createCanvas','resizeCanvas','noCanvas','createGraphics','blendMode','setAttributes']
__transformFunctions=['applyMatrix','resetMatrix','rotate','rotateX','rotateY','rotateZ','scale','shearX','shearY','translate']
__dataLocalStorage=['storeItem','getItem','clearStorage','removeItem']
__dataArray=['append','arrayCopy','concat','reverse','shorten','shuffle','sort','splice','subset']
__dataConversion=['byte','char','unchar','hex','unhex']
__dataString=['join','match','matchAll','nf','nfc','nfp','nfs','split','splitTokens','trim']
__dataFunctions=__dataLocalStorage+__dataArray+__dataConversion+__dataString
__eventsAcceleration=['setMoveThreshold','setShakeThreshold']
__eventsKeyboard=[_J]
__eventsMouse=['requestPointerLock','exitPointerLock']
__eventsFunctions=__eventsAcceleration+__eventsKeyboard+__eventsMouse
__imageStandard=['createImage','saveCanvas','saveFrames']
__imageLoading=['loadImage','image','tint','noTint','imageMode']
__imagePixels=['blend','copy','filter','get','loadPixels','set','updatePixels']
__imageFunctions=__imageStandard+__imageLoading+__imagePixels
__ioInput=['loadJSON','loadStrings','loadTable','loadXML','loadBytes','httpGet','httpPost','httpDo']
__ioOutput=['createWriter','save','saveJSON','saveStrings','saveTable']
__ioTime=['day','hour','minute','millis','month','second','year']
__ioFunctions=__ioInput+__ioOutput+__ioTime
__mathCalculation=['abs','ceil','constrain','dist','exp','floor','lerp','log','mag','map','max','min','norm','pow','round','sq','sqrt','fract']
__mathVector=['createVector']
__mathNoise=['noise','noiseDetail','noiseSeed']
__mathRandom=['randomSeed','random','randomGaussian']
__mathTrigonometry=['acos','asin','atan','atan2','cos','sin','tan','degrees','radians','angleMode']
__mathFunctions=__mathCalculation+__mathVector+__mathNoise+__mathRandom+__mathTrigonometry
__typographyAttributes=['textAlign','textLeading','textSize','textStyle','textWidth','textAscent','textDescent']
__typographyLoading=['loadFont','text','textFont']
__typographyFunctions=__typographyAttributes+__typographyLoading
__camInteraction=['orbitControl','debugMode','noDebugMode']
__camLights=['ambientLight','specularColor','directionalLight','pointLight','lights','lightFalloff','spotLight','noLights']
__camMaterial=['loadShader','createShader','shader','resetShader','normalMaterial','texture','textureMode','textureWrap','ambientMaterial','emissiveMaterial','specularMaterial','shininess']
__camCamera=['camera','perspective','ortho','frustum','createCamera']
__camFunctions=__camInteraction+__camLights+__camMaterial+__camCamera
__apiElements=__colorFunctions+__shapeFunctions+__environmentFunctions+__structureFunctions+__DOMFunctions+__renderingFunctions+__transformFunctions+__dataFunctions+__eventsFunctions+__imageFunctions+__ioFunctions+__mathFunctions+__typographyFunctions+__camFunctions
__allAttributes=__allConstants+__apiElements
def bindAPIFunctions(p):
	for variable in __allAttributes:setattr(builtins,variable,getattr(p,variable))
def sketch(p):global createCanvas,random;p.setup=lambda:__setup(p);p.draw=lambda:__draw(p);p.preload=lambda:__preload(p);bindEventFunctions(p);bindAPIFunctions(p);updateGlobalVariables(p)
`