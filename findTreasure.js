var mapCanvas = document.getElementById("map");
		
		$("#map").click(function(event) {
		clicks++;
		var distance = getDistance(event, target);
		drawCircle(distance);
		var distanceHint = getDistanceHint(distance);
		$("#distance").text(distanceHint);
		if (distance < 30) {
			drawCross();
			alert("Клад найден! Победа");
		}
		});

		var width = 500;
		var height = 400;
		var clicks = 0;

		var ctx = mapCanvas.getContext('2d');
		var img1 = new Image();
		img1.src = "http://cdn8.openculture.com/wp-content/uploads/2015/11/01225913/NarniaMap-e1324285473899.jpg"
		img1.onload = function() {
			ctx.drawImage(img1, 0, 0);
		};

		var getRandomNumber = function(size) {
			return Math.floor(Math.random()*size);
		};

		var getDistance = function(event, target) {
			var diffX = event.offsetX - target.x;
			var diffY = event.offsetY - target.y;
			return Math.sqrt(diffX*diffX + diffY*diffY);
		};

		var getDistanceHint = function(distance) {
			if (distance<50) {
			return "Вы чувствуете запах золота!";
			} else if  (distance <100) {
			return "Уже близко";
			} else if (distance<200) {
			return "Вы на верном пути";
			} else {
			return "Очень далеко";
			}
		};

		var target = {
		x: getRandomNumber(width),
		y: getRandomNumber(height)
		};

		var drawCircle = function (distance) {
			if (distance < 50) {
				ctx.fillStyle = "green";	
			} else if  (distance < 100) {
				ctx.fillStyle = "yellow";
			} else if (distance < 200) {
				ctx.fillStyle = "blue";
			} else {
				ctx.fillStyle = "black";
			}
			var x = event.offsetX;
			var y = event.offsetY;
			ctx.beginPath();
			ctx.arc(x, y, 5, 0, Math.PI * 2, false);
			ctx.fill();
		};

		var drawCross = function () {
			ctx.strokeStyle = "red";	
			ctx.lineWidth = 4;
			var x = event.offsetX;
			var y = event.offsetY;
			ctx.beginPath();
			ctx.moveTo(x-7, y-7);
			ctx.lineTo(x+7, y+7);
			ctx.moveTo(x+7, y-7);
			ctx.lineTo(x-7, y+7);
			ctx.stroke();
		};

		
 	