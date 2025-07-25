function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
  
    const textureCoordBuffer = initTextureBuffer(gl);
  
    const indexBuffer = initIndexBuffer(gl);

    const normalBuffer = initNormalBuffer(gl);

  return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  }; 

}
  
  function initPositionBuffer(gl) {
    // Create a buffer for the square's positions.
    const positionBuffer = gl.createBuffer();
  
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    // Now create an array of positions for the square.
    const positions = [
      // Vertical Box
      // Front face
      -1.0, -1.0, 0.25, -0.5, -1.0, 0.25, -0.5, 1.0, 0.25, -1.0, 1.0, 0.25,
    
      // Back face
      -1.0, -1.0, -0.25, -1.0, 1.0, -0.25, -0.5, 1.0, -0.25, -0.5, -1.0, -0.25,
    
      // Top face
      -1.0, 1.0, -0.25, -1.0, 1.0, 0.25, -0.5, 1.0, 0.25, -0.5, 1.0, -0.25,
    
      // Bottom face
      -1.0, -1.0, -0.25, -0.5, -1.0, -0.25, -0.5, -1.0, 0.25, -1.0, -1.0, 0.25,
    
      // Right face
      -0.5, -1.0, -0.25, -0.5, 0.5, -0.25, -0.5, 0.5, 0.25, -0.5, -1.0, 0.25,
    
      // Left face
      -1.0, -1.0, -0.25, -1.0, -1.0, 0.25, -1.0, 1.0, 0.25, -1.0, 1.0, -0.25,

      // Horizontal Box
      // Front face
      -0.5, 0.5, 0.25, 0.5, 0.5, 0.25, 0.5, 1.0, 0.25, -0.5, 1.0, 0.25,
    
      // Back face
      -0.5, 0.5, -0.25, -0.5, 1.0, -0.25, 0.5, 1.0, -0.25, 0.5, 0.5, -0.25,
    
      // Top face
      -0.5, 1.0, -0.25, -0.5, 1.0, 0.25, 0.5, 1.0, 0.25, 0.5, 1.0, -0.25,
    
      // Bottom face
      -0.5, 0.5, -0.25, 0.5, 0.5, -0.25, 0.5, 0.5, 0.25, -0.5, 0.5, 0.25,
    
      // Right face
      0.5, 0.5, -0.25, 0.5, 1.0, -0.25, 0.5, 1.0, 0.25, 0.5, 0.5, 0.25,
    ];
    
  
    // Now pass the list of positions into WebGL to build the
    // shape. We do this by creating a Float32Array from the
    // JavaScript array, then use it to fill the current buffer.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  
    return positionBuffer;
  }
  
  function initColorBuffer(gl) {
    const faceColors = [
      //Vertical Box
      [1.0, 1.0, 1.0, 1.0], // Front face: white
      [1.0, 0.0, 0.0, 1.0], // Back face: red
      [0.0, 1.0, 0.0, 1.0], // Top face: green
      [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
      [1.0, 1.0, 0.0, 1.0], // Right face: yellow
      [1.0, 0.0, 1.0, 1.0], // Left face: purple
      // Horizontal Box
      [0.5, 0.5, 0.5, 1.0], // Front face: сірий
      [1.0, 0.5, 0.0, 1.0], // Back face: оранжевий
      [0.0, 1.0, 1.0, 1.0], // Top face: бірюзовий
      [0.5, 0.0, 0.5, 1.0], // Bottom face: фіолетовий
      [0.0, 0.5, 1.0, 1.0] // Right face: небесно-блакитний
    ];
    
    // Convert the array of colors into a table for all the vertices.
    
    var colors = [];
    
    for (var j = 0; j < faceColors.length; ++j) {
      const c = faceColors[j];
      // Repeat each color four times for the four vertices of the face
      colors = colors.concat(c, c, c, c);
    }
    
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
  }
  
  function initIndexBuffer(gl) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  
    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.
  
    const indices = [
      // Vertical Box
      0,
      1,
      2,
      0,
      2,
      3, // front
      4,
      5,
      6,
      4,
      6,
      7, // back
      8,
      9,
      10,
      8,
      10,
      11, // top
      12,
      13,
      14,
      12,
      14,
      15, // bottom
      16,
      17,
      18,
      16,
      18,
      19, // right
      20,
      21,
      22,
      20,
      22,
      23, // left
      // Horizontal Box
      24,
      25,
      26,
      24,
      26,
      27, // front
      28,
      29,
      30,
      28,
      30,
      31, // back
      32,
      33,
      34,
      32,
      34,
      35, // top
      36,
      37,
      38,
      36,
      38,
      39, // bottom
      40,
      41,
      42,
      40,
      42,
      43, // right
    ];
  
    // Now send the element array to GL
  
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      gl.STATIC_DRAW,
    );
  
    return indexBuffer;
  }  

  function initTextureBuffer(gl) {
    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
  
    const textureCoordinates = [
      // Vertical Box
      // Front face
      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Back face
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,
      // Top face
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,
      // Bottom face
      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Right face
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,
      // Left face
      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    
      // Horizontal Box
      // Front face
      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Back face
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,
      // Top face
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,
      // Bottom face
      0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
      // Right face
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,
    ];
  
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(textureCoordinates),
      gl.STATIC_DRAW,
    );
  
    return textureCoordBuffer;
  }  

  function initNormalBuffer(gl) {
    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  
    const vertexNormals = [
      // Vertical Box
      // Front
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  
      // Back
      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  
      // Top
      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  
      // Bottom
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  
      // Right
      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
  
      // Left
      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,

      // Horizontal Box
      // Front
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  
      // Back
      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  
      // Top
      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  
      // Bottom
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  
      // Right
      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
  
      // Left
      //-1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
    ];
  
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(vertexNormals),
      gl.STATIC_DRAW,
    );
  
    return normalBuffer;
  }  

  export { initBuffers };
  