# GLSL-playground
GLSL shaders for procedural terrain generation directly on the GPU.

Recently I became highly interested in procedural landscape generation, and especially with what
you can do directly on a modern GPU using shaders. My goal is to achieve some procedural landscape
generation demos using only a minimal texture set and using procedural textures everywhere it's
possible.

Here's what have been done already:
 - height mapping (with procedural noise texture, Perlin, Simplex, etc...)
 - normal mapping (Sobel and Scharr operator)
 - ambient occlusion (not SSAO, but rather based on heightmap)
 - lighting (spherical harmonics)
 - skybox (cube and sphere map)
 - pixel shader demos (full screen quad geometry, ray marching)

The demos are using three.js, a JavaScript 3D Library which makes WebGL simpler:
http://threejs.org

Some other very useful resources that were used:
 - Iñigo Quílez articles: http://www.iquilezles.org/www/index.htm
 - Giliam de Carpentier articles: http://www.decarpentier.nl/scape-procedural-basics
 - Florian Boesch articles on codeflow: http://codeflow.org/
 - John Chapman tutorial on SSAO: http://john-chapman-graphics.blogspot.fr/2013/01/ssao-tutorial.html
 - Nutty Software articles: http://www.nutty.ca/
 - Ravi Ramamoorthi and Pat Hanrahan paper on lighting: http://graphics.stanford.edu/papers/envmap/
 - Randi J. Rost Orange Book on OpenGL Shading Language
 - Texturing And Modeling - A Procedural Approach, 3rd Edition Book (Morgan Kaufmann, 2003)
 - SIGGRAPH 2006 Course 26 paper: http://developer.amd.com/wordpress/media/2012/10/Course_26_SIGGRAPH_2006.pdf
 - Raymarching distance fields article on 9bit Science: http://9bitscience.blogspot.jp/2013/07/raymarching-distance-fields_14.html
 - GPU Ray Marching of Distance Fields by Lukasz Jaroslaw Tomczak: http://www2.compute.dtu.dk/pubdb/views/edoc_download.php/6392/pdf/imm6392.pdf
 - Basic Principles of Surface Relectance paper: http://www.cs.cmu.edu/afs/cs/academic/class/15462-f09/www/lec/lec8.pdf
 - GPU Gems 2, Chapter 19, Generic Refraction Simulation: http://http.developer.nvidia.com/GPUGems2/gpugems2_chapter19.html
 - Displacement Mapping on the GPU - State of the Art: http://sirkan.iit.bme.hu/~szirmay/egdisfinal3.pdf
 - SIGGRAPH 2005 paper, Practical Dynamic Parallax Occlusion Mapping: http://developer.amd.com/wordpress/media/2012/10/Tatarchuk-ParallaxOcclusionMapping-Sketch-print.pdf
 - SIGGRAPH 2005 paper, Practical Dynamic Parallax Occlusion Mapping For Highly Detailed Surface Rendering: http://developer.amd.com/wordpress/media/2012/10/Tatarchuk-POM.pdf
 - SIGGRAPH 2008 paper, Image-Space Horizon-Based AO: http://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf
 - Ashima Arts noise for WebGL: https://github.com/ashima/webgl-noise
 - Light probe images: http://www.unparent.com/photos_probes.html
 - Prototype.js, an object-oriented Javascript framework: https://github.com/sstephenson/prototype
