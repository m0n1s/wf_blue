function SUI(){
    this.angleToRadians = function(angle){
        return angle * (Math.PI / 180);
    };
    this.getEndPoint = function(start, angle, length){
        return {
            "x": (start.x + (Math.sin( this.angleToRadians(angle)) * length )),
            "y": (start.y - (Math.cos( this.angleToRadians(angle)) * length ))
        };
    };
    this.drawMarks = function(ctx, center, count, style){
        style = {
            "length": (typeof style.length === 'undefined')?15:style.length,
            "width": (typeof style.width === 'undefined')?2:style.width,
            "color": (typeof style.color === 'undefined')?"black":style.color,
            "offset": (typeof style.offset === 'undefined')?0:style.offset
        };
        var angle = 360 / count;
        for(var i = 0; i< count; i++){
            this.drawHand(ctx, center, i * angle, style);
        }  
    };
    this.drawHand = function(ctx, center, angle, style){
        style = {
            "length": (typeof style.length === 'undefined')?15:style.length,
            "width": (typeof style.width === 'undefined')?2:style.width,
            "color": (typeof style.color === 'undefined')?"black":style.color,
            "offset": (typeof style.offset === 'undefined')?0:style.offset
        };
       
        var midPoint = center;
        if(style.offset > 0 ){ 
            midPoint = this.getEndPoint(center, angle, style.offset);
        }
        console.log("mid x" + midPoint.x + "mid y" + midPoint.y);
        var endPoint = this.getEndPoint(midPoint, angle, style.length);
        console.log("end x" + endPoint.x + "end y" + endPoint.y);
        ctx.save();
        ctx.lineWidth = style.width;
        ctx.strokeStyle = style.color;
        ctx.beginPath();
        ctx.moveTo(midPoint.x, midPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
        ctx.restore();
    };
}

module.exports = new SUI();