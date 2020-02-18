// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.alpha.5
// Description:Shadows of shapes with alpha components are drawn correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Shadows of shapes with alpha components are drawn correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = 'rgba(64, 0, 0, 0.5)';
ctx.shadowColor = '#00f';
ctx.shadowOffsetY = 50;
ctx.fillRect(0, -50, 100, 50);
_assertPixelApprox(offscreenCanvas, 50,25, 127,0,127,255, "50,25", "127,0,127,255");
t.done();

});
done();
