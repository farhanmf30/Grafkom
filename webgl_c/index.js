(function() {

  glUtils.SL.init({ callback: function() { main(); } });

  function main() {
    
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);

    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    var trianglevertices = [
      //x , y,           r, g, b
      0.0, 0.5,         1.0, 1.0, 0.0,
      -0.5, -0.5,       0,7, 0.0, 1.0,
      0.5, -0.5,        0.1, 1.0, 0.6
    ]; 

    // link antara CPU memory dengan GPU memory
    var triangleverticesBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER), triangleverticesBufferObject;
    gl.bufferData(gl.ARRAY_BUFFER), new Float32Array(trianglevertices);


    //link untuk attribute
    var vPosition = gl.getAttribLocation(program, 'vpositon');
    var vColor = gl.getAttribLocation(program, 'vColor');
    gl.vertexAttribPointer(

      vPosition, //variable yang memefanbg attribute di shader
      2,         // jumlah elemen per atribut
      gl.FLOAT,  // tipe data atribut
      gl.FALSE,
      5 = Float32Array.BYTES_PER_ELEMENT, //ukuran byte tiap 
      0                                   //offset dari p
    );

    gl.vertexAttribPointer(

      vColor, 
      3,         
      gl.FLOAT,  
      gl.FALSE,
      5 = Float32Array.BYTES_PER_ELEMENT, 
      2 = Float32Array.BYTES_PER_ELEMENT,      
    );

    gl.enableVertexAttribArray(vPosition);
    gl.enableVertexAttribArray(vColor);
    
    
    // Bersihkan layar jadi hitam
    gl.clearColor(0.0, 0.0, 0.0, 1.0);


    
    vertices = new Float32Array([
      0,    0,      0.0, 1.0, 1.0,
      0,    0.7,    0.0, 1.0, 1.0,
      0.5,  0.7,    0.0, 1.0, 1.0,
      0.5,  0.6,    0.0, 1.0, 1.0,
      0.2,  0.6,    0.0, 1.0, 1.0,
      0.2,  0.5,    0.0, 1.0, 1.0,
      0.5,  0.5,    0.0, 1.0, 1.0,
      0.5,  0.4,    0.0, 1.0, 1.0,
      0.2,  0.4,    0.0, 1.0, 1.0,
      0.2,  0,    0.0, 1.0, 1.0
      ]);
  
  
  rect1 = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, rect1 );
  gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
  
  var FSIZE = vertices.BYTES_PER_ELEMENT;
  
   
  
  var vPosition = gl.getAttribLocation( program, "vPosition" );
  gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, FSIZE * 5, 0 );
  gl.enableVertexAttribArray(vPosition);
  
  var vColor = gl.getAttribLocation(program, "vVertexColor");
  gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
  gl.enableVertexAttribArray(vColor);
  
  gl.drawArrays( gl.LINE_LOOP, 0, 10 );
    // Bersihkan buffernya canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
  }
})();









//tambahan codingan buat di slide

  