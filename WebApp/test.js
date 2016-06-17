var canvas, ctx;
var prevX, prevY;
var mousePressed = false;
var thickness = 5;
var greyness = 0;

function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.rect(0, 0, 1500, 600);
	ctx.fillStyle = 'white';
	ctx.fill();

	$('#canvas').mousedown(function(e) {
		if (MODE === 'DRAW') {
			draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
		} else if (MODE === 'ERASE') {
			erase(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
		}
		mousePressed = true;
	});

	$('#canvas').mousemove(function(e) {
		if (mousePressed) {
			if (MODE === 'DRAW') {
				draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
			} else if (MODE === 'ERASE') {
				erase(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);	
			}
		}
	});

	$('#canvas').mouseup(function(e) {
		mousePressed = false;
	});
}

function getColour(greyness) {
	return 'rgb(' + greyness + ',' + greyness + ',' + greyness + ')';
}

function draw(x, y, pressed) {
	if (pressed) {
		ctx.beginPath();
		ctx.strokeStyle = getColour(greyness);
		ctx.lineWidth = thickness;
		ctx.lineJoin = 'round';
		ctx.moveTo(prevX, prevY);
		ctx.lineTo(x, y);
		ctx.closePath();
		ctx.stroke();
	}
	prevX = x;
	prevY = y;
}

function erase(x, y, pressed) {
	if (pressed) {
		ctx.fillStyle = 'white';
		ctx.fillRect(x, y, -thickness, -thickness);
		ctx.fillRect(x, y, thickness, -thickness);
		ctx.fillRect(x, y, -thickness, thickness);
		ctx.fillRect(x, y, thickness, thickness);
	}
}

function clearCanvas() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.beginPath();
	ctx.rect(0, 0, 1500, 600);
	ctx.fillStyle = 'white';
	ctx.fill();
}