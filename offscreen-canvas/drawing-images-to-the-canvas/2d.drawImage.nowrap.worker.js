// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.nowrap
// Description:Stretched images do not get pixels wrapping around the edges
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Stretched images do not get pixels wrapping around the edges");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/redtransparent.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    createImageBitmap(response).then(bitmap => {
        ctx.drawImage(bitmap, -1950, 0, 2000, 50);
        _assertPixelApprox(offscreenCanvas, 45,25, 0,255,0,255, "45,25", "0,255,0,255");
        _assertPixelApprox(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
        _assertPixelApprox(offscreenCanvas, 55,25, 0,255,0,255, "55,25", "0,255,0,255");
    }, t_fail);
}).then(t_pass, t_fail);

});
done();
