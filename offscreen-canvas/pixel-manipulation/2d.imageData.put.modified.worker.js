// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.put.modified
// Description:putImageData() puts modified image data correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("putImageData() puts modified image data correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
ctx.fillStyle = '#f00';
ctx.fillRect(45, 20, 10, 10)
var imgdata = ctx.getImageData(45, 20, 10, 10);
for (var i = 0, len = imgdata.width*imgdata.height*4; i < len; i += 4)
{
    imgdata.data[i] = 0;
    imgdata.data[i+1] = 255;
}
ctx.putImageData(imgdata, 45, 20);
_assertPixelApprox(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
