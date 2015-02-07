var AOcclusionRTT = Class.create();

AOcclusionRTT.prototype = {
    initialize : function(width, height, radius, bias, normalsTexture) {
        this.width = width;
        this.height = height;
        this.scene = new THREE.Scene();

        // create texture buffer
        var renderTargetParams = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            stencilBuffer: false,
            depthBuffer: false,
            generateMipmaps: false
        };
        this.texture = new THREE.WebGLRenderTarget(this.width, this.height, renderTargetParams);

        // Setup render-to-texture scene
        this.camera = new THREE.OrthographicCamera(this.width / -2, this.width / 2, this.height / 2, this.height / -2, 1, 1000);
        this.scene.add(this.camera);

        // build the AO sampling kernel (spiral), the shader require a kernel size
        // of 32 samples positions.
        var kernel = new Array();
        for(var i = 0; i < 32; i++) {
            var s = (i + 1) / 32.0;
            var a = Math.sqrt(s * 512.0);
            var b = Math.sqrt(s);
            kernel[i] = new THREE.Vector2(Math.sin(a) * b, Math.cos(a) * b);
        }

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                kernel: { type: "v2v", value: kernel },
                kernelRadius: { type: "f", value: radius },
                occluderBias: { type: "f", value: bias },
                uvScale: { type: "v2", value: new THREE.Vector2(1.0 / this.width, 1.0 / this.height) },
                normalsTexture: { type: "t", value: normalsTexture }
            },
            vertexShader: document.getElementById('aocclusionVertexShader').textContent,
            fragmentShader: document.getElementById('aocclusionFragmentShader').textContent
        })

        this.mesh = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(this.width, this.height),
            this.material
        );
        this.mesh.position.z = -100;
        this.scene.add(this.mesh);
    },

    getTexture: function() {
        return this.texture;
    },

    render: function(renderer, offsetX, offsetY) {
        renderer.render(this.scene, this.camera, this.texture, true);
    }
};

