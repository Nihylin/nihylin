(function () {
  var canvas = document.getElementById("canvas");
  var gl = canvas.getContext("webgl", { antialias: true });
  if (!gl) return;

  var V = [
    -1.052, 1.333, -0.07, -0.864, 0.456, 0.07, -1.052, 1.333, 0.07, -0.864,
    0.456, -0.07, -0.864, -0.301, -0.07, -0.864, -0.301, 0.07, -1.052, -1.333,
    -0.07, -1.052, -1.333, 0.07, -0.21, -0.928, -0.07, -0.21, -0.928, 0.07,
    -0.131, -0.381, -0.07, -0.131, -0.381, 0.07, 0.246, -0.946, -0.07, 0.246,
    -0.946, 0.07, 1.052, -1.333, -0.07, 1.052, -1.333, 0.07, 0.864, -0.456,
    -0.07, 0.864, -0.456, 0.07, 0.864, 0.301, 0.07, 0.864, 0.301, -0.07, 1.052,
    1.333, -0.07, 1.052, 1.333, 0.07, 0.21, 0.928, -0.07, 0.21, 0.928, 0.07,
    0.131, 0.381, -0.07, 0.131, 0.381, 0.07, -0.246, 0.946, -0.07, -0.246,
    0.946, 0.07, -0.824, 1.06, -0.07, -0.353, 0.824, -0.07, -0.824, 1.06, 0.07,
    -0.353, 0.824, 0.07, 0.353, -0.236, -0.07, 0.353, -0.236, 0.07, 0.353,
    0.353, -0.07, 0.353, 0.353, 0.07, 0.294, 0.412, -0.07, 0.294, 0.412, 0.07,
    0.353, 0.824, -0.07, 0.353, 0.824, 0.07, 0.824, 1.06, -0.07, 0.824, 1.06,
    0.07, 0.648, 0.294, -0.07, 0.648, 0.294, 0.07, 0.707, 0.236, -0.07, 0.707,
    0.236, 0.07, 0.707, -0.471, -0.07, 0.707, -0.471, 0.07, 0.824, -1.06, -0.07,
    0.824, -1.06, 0.07, 0.353, -0.824, -0.07, 0.353, -0.824, 0.07, -0.353,
    0.236, -0.07, -0.353, 0.236, 0.07, -0.353, -0.353, -0.07, -0.353, -0.353,
    0.07, -0.294, -0.412, -0.07, -0.294, -0.412, 0.07, -0.353, -0.824, -0.07,
    -0.353, -0.824, 0.07, -0.824, -1.06, -0.07, -0.824, -1.06, 0.07, -0.648,
    -0.294, -0.07, -0.648, -0.294, 0.07, -0.707, -0.236, -0.07, -0.707, -0.236,
    0.07, -0.707, 0.471, -0.07, -0.707, 0.471, 0.07,
  ];

  var T = [
    0, 1, 2, 0, 3, 1, 3, 4, 1, 1, 4, 5, 4, 6, 5, 5, 6, 7, 6, 8, 7, 7, 8, 9, 8,
    10, 9, 9, 10, 11, 10, 12, 11, 11, 12, 13, 12, 14, 13, 13, 14, 15, 14, 16,
    15, 15, 16, 17, 16, 18, 17, 16, 19, 18, 19, 20, 18, 18, 20, 21, 20, 22, 21,
    21, 22, 23, 22, 24, 23, 23, 24, 25, 24, 26, 25, 25, 26, 27, 26, 0, 27, 27,
    0, 2, 28, 29, 30, 30, 29, 31, 29, 32, 31, 31, 32, 33, 32, 34, 33, 33, 34,
    35, 34, 36, 35, 35, 36, 37, 36, 38, 37, 37, 38, 39, 38, 40, 39, 39, 40, 41,
    40, 42, 41, 41, 42, 43, 42, 44, 43, 43, 44, 45, 44, 46, 45, 45, 46, 47, 46,
    48, 47, 47, 48, 49, 48, 50, 49, 49, 50, 51, 50, 52, 51, 51, 52, 53, 52, 54,
    53, 53, 54, 55, 54, 56, 55, 55, 56, 57, 56, 58, 57, 57, 58, 59, 58, 60, 59,
    59, 60, 61, 60, 62, 61, 61, 62, 63, 62, 64, 63, 63, 64, 65, 64, 66, 65, 65,
    66, 67, 66, 28, 67, 67, 28, 30, 6, 4, 60, 58, 8, 60, 60, 8, 6, 4, 62, 60, 4,
    64, 62, 54, 10, 56, 56, 10, 58, 58, 10, 8, 10, 50, 12, 4, 3, 64, 3, 66, 64,
    12, 48, 14, 50, 48, 12, 54, 52, 10, 3, 28, 66, 3, 0, 28, 46, 16, 48, 48, 16,
    14, 28, 26, 29, 29, 26, 24, 0, 26, 28, 24, 34, 32, 36, 34, 24, 46, 44, 16,
    42, 19, 44, 44, 19, 16, 22, 38, 24, 24, 38, 36, 22, 40, 38, 42, 40, 19, 22,
    20, 40, 40, 20, 19, 32, 29, 24, 52, 50, 10, 5, 7, 61, 9, 59, 61, 9, 61, 7,
    63, 5, 61, 65, 5, 63, 11, 55, 57, 11, 57, 59, 11, 59, 9, 51, 11, 13, 1, 5,
    65, 67, 1, 65, 49, 13, 15, 49, 51, 13, 53, 55, 11, 30, 1, 67, 2, 1, 30, 17,
    47, 49, 17, 49, 15, 27, 30, 31, 27, 31, 25, 27, 2, 30, 35, 25, 33, 35, 37,
    25, 45, 47, 17, 18, 43, 45, 18, 45, 17, 39, 23, 25, 39, 25, 37, 41, 23, 39,
    41, 43, 18, 21, 23, 41, 21, 41, 18, 31, 33, 25, 51, 53, 11,
  ];

  var vs = [
    "attribute vec3 aPos;",
    "attribute vec3 aNormal;",
    "uniform mat3 uRot;",
    "uniform vec2 uScale;",
    "varying vec3 vNormal;",
    "varying vec3 vView;",
    "void main() {",
    "  vec3 v = uRot * aPos + vec3(0.0, 0.0, -6.0);",
    "  vNormal = uRot * aNormal;",
    "  vView = v;",
    "  float d = -v.z;",
    "  float n = 1.0, f = 20.0;",
    "  gl_Position = vec4(v.xy * uScale, (f + n) / (f - n) * d - 2.0 * f * n / (f - n), d);",
    "}",
  ].join("\n");

  var fs = [
    "precision mediump float;",
    "varying vec3 vNormal;",
    "varying vec3 vView;",
    "float env(vec3 r) {",
    "  float e = mix(0.05, 0.6, smoothstep(-0.6, 1.0, r.y));",
    "  e += 1.6 * smoothstep(0.55, 0.8, r.y);",
    "  e += 1.2 * pow(max(dot(r, normalize(vec3(1.0, 0.3, 0.6))), 0.0), 24.0);",
    "  e += 0.8 * pow(max(dot(r, normalize(vec3(-1.0, 0.1, 0.5))), 0.0), 24.0);",
    "  e += 0.55 * smoothstep(0.2, 0.95, r.z);",
    "  return e;",
    "}",
    "void main() {",
    "  vec3 n = normalize(vNormal);",
    "  if (!gl_FrontFacing) n = -n;",
    "  vec3 v = normalize(-vView);",
    "  vec3 r = reflect(-v, n);",
    "  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);",
    "  float c = 0.3 + env(r) * (0.8 + 0.3 * fres);",
    "  gl_FragColor = vec4(vec3(pow(min(c, 1.0), 1.0 / 2.2)), 1.0);",
    "}",
  ].join("\n");

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  var prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);
  var data = new Float32Array(T.length * 6);

  for (var i = 0; i < T.length; i += 3) {
    var a = T[i] * 3,
      b = T[i + 1] * 3,
      c = T[i + 2] * 3;
    var e1x = V[b] - V[a],
      e1y = V[b + 1] - V[a + 1],
      e1z = V[b + 2] - V[a + 2];
    var e2x = V[c] - V[a],
      e2y = V[c + 1] - V[a + 1],
      e2z = V[c + 2] - V[a + 2];
    var nx = e1y * e2z - e1z * e2y,
      ny = e1z * e2x - e1x * e2z,
      nz = e1x * e2y - e1y * e2x;
    var l = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
    nx /= l;
    ny /= l;
    nz /= l;
    var corners = [a, b, c];
    for (var k = 0; k < 3; k++) {
      var o = (i + k) * 6,
        p = corners[k];
      data[o] = V[p];
      data[o + 1] = V[p + 1];
      data[o + 2] = V[p + 2];
      data[o + 3] = nx;
      data[o + 4] = ny;
      data[o + 5] = nz;
    }
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  var aPos = gl.getAttribLocation(prog, "aPos");
  var aNormal = gl.getAttribLocation(prog, "aNormal");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(aNormal);
  gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 24, 12);
  var uRot = gl.getUniformLocation(prog, "uRot");
  var uScale = gl.getUniformLocation(prog, "uScale");
  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(0x13 / 255, 0x13 / 255, 0x13 / 255, 1);
  var rot = [1, 0, 0, 0, 1, 0, 0, 0, 1];

  function mul(a, b) {
    var o = [];
    for (var col = 0; col < 3; col++)
      for (var row = 0; row < 3; row++)
        o[col * 3 + row] =
          a[row] * b[col * 3] +
          a[3 + row] * b[col * 3 + 1] +
          a[6 + row] * b[col * 3 + 2];
    return o;
  }

  function rotate(dx, dy) {
    var cy = Math.cos(dx),
      sy = Math.sin(dx),
      cx = Math.cos(dy),
      sx = Math.sin(dy);
    var ry = [cy, 0, -sy, 0, 1, 0, sy, 0, cy];
    var rx = [1, 0, 0, 0, cx, sx, 0, -sx, cx];
    rot = mul(rx, mul(ry, rot));
  }

  var pending = false;

  function request() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(draw);
  }

  function draw() {
    pending = false;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.round(canvas.clientWidth * dpr),
      hgt = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== hgt) {
      canvas.width = w;
      canvas.height = hgt;
      gl.viewport(0, 0, w, hgt);
    }
    var aspect = w / hgt,
      f = 2.75;
    gl.uniform2f(
      uScale,
      aspect >= 1 ? f / aspect : f,
      aspect >= 1 ? f : f * aspect,
    );
    gl.uniformMatrix3fv(uRot, false, rot);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, T.length);
  }

  var lastX,
    lastY,
    dragging = false;

  canvas.addEventListener("pointerdown", function (e) {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    rotate((e.clientX - lastX) * 0.01, (e.clientY - lastY) * 0.01);
    lastX = e.clientX;
    lastY = e.clientY;
    request();
  });

  function stop() {
    dragging = false;
  }

  canvas.addEventListener("pointerup", stop);

  canvas.addEventListener("pointercancel", stop);

  window.addEventListener("resize", request);

  request();
})();
