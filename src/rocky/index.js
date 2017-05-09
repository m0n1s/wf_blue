var rocky = require("rocky");
var sui = require("./sui");

var screen = {
    "w": 180,
    "h": 180,
    "center": {
        "x": 90,
        "y": 90
    }
};
var style = {
    "bg": "#0000FF"
};


var styleMinute = {
    "length": 60,
    "width": 4,
    "color": "white",
    "offset": 20
};
var styleHour = {
    "length": 45,
    "width": 4,
    "color": "white",
    "offset": 35
};
var styleMarks = {
    "length": 10,
    "width": 2,
    "color": "white",
    "offset": 80
};
var styleMarksBig = {
    "length": 10,
    "width": 4,
    "color": "white",
    "offset": 80
};

function drawRequest(event){
  rocky.requestDraw();

}

var ctx = null;
var date = null;
//rocky.on('minutechange', drawRequest);
//rocky.on('hourchange', drawRequest);
//rocky.on('daychange', drawRequest);
rocky.on('secondchange', drawRequest);

rocky.on("draw", function(event ){
    ctx = event.context;
    ctx.beginPath();
    ctx.fillStyle = style.bg;
    ctx.fillRect(0, 0, screen.w, screen.h);
    ctx.closePath();
    date = new Date();
    //var angleSeconds = date.getSeconds() * 6;
    var angleMinutes = date.getMinutes() * 6;
    var angleHours = (date.getHours()%12)*30 + angleMinutes/12;
    sui.drawMarks(ctx, screen.center, 4, styleMarksBig);
    sui.drawMarks(ctx, screen.center, 12, styleMarks);
    sui.drawHand(ctx, screen.center, angleMinutes, styleMinute);
    sui.drawHand(ctx, screen.center, angleHours, styleHour);
    console.log("should drawn");
});