# GLSL-playground
GLSL shaders for procedural terrain generation directly on the GPU.

Recently I became highly interested in procedural landscape generation, and especially with what
you can do directly on a modern GPU using shaders. My goal is to achieve some procedural landscape
generation demos using only a minimal texture set and using procedural textures everywhere it's
possible.

Here's what have been done already:
 - height mapping (with procedural noise texture)
 - normal mapping (Sobel Operator)
 - ambient occlusion (not SSAO, but rather based on heightmap)

The demos are using three.js, a JavaScript 3D Library which makes WebGL simpler:
http://threejs.org

Some other very useful resources that were used:
 - Iñigo Quílez articles: http://www.iquilezles.org/www/index.htm
 - Giliam de Carpentier articles: http://www.decarpentier.nl/scape-procedural-basics
 - Florian Boesch articles on codeflow: http://codeflow.org/
 - John Chapman tutorial on SSAO: http://john-chapman-graphics.blogspot.fr/2013/01/ssao-tutorial.html
 - Nutty Software articles: http://www.nutty.ca/
 - Ashima Arts noise for WebGL: https://github.com/ashima/webgl-noise
 - Prototype.js, an object-oriented Javascript framework: https://github.com/sstephenson/prototype
