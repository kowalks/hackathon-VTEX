var img;
var cx, cy;
var s;
var choose1, choose2, choose3, slider;
var sx, sy;
var ans = [0, 0, 0, 0]
var pc;
var indMax;
var icon;


function preload() {
	img = loadImage('img/empresa.png');
	pc = [loadImage('pc/0.png'), loadImage('pc/1.png'), loadImage('pc/2.png'), loadImage('pc/3.png'), loadImage('pc/4.png')];
	icon = [loadImage('icon/1.png'), loadImage('icon/2.png'), loadImage('icon/3.png'), loadImage('icon/4.png'), loadImage('icon/B.png'), loadImage('icon/Bn.png'), loadImage('icon/S.png'), loadImage('icon/N.png'), loadImage('icon/F.png')];
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	cx = windowWidth / 2;
	cy = windowHeight / 2;
	if (windowWidth < windowHeight)
		s = windowWidth;
	else
		s = windowHeight;
	sx = cx;
	sy = cy;
}

var screen = -1;

function draw() {
	background(229, 252, 194);
	image(img, windowWidth - 80, 10, 10 * 6.4, 10);
	choose1 = false;
	choose2 = false;
	choose3 = false;
	slider = false;
	noStroke();
	var distance;

	if (screen == -1) {
		screenInit();
		distance = dist(mouseX, mouseY, cx, cy);
		if (distance < s / 8)
			choose1 = true;
		else
			choose1 = false;
	}
	if (screen == 0) {
		screen0();
		distance = dist(mouseX, mouseY, cx - 10 - s / 4, cy);
		if (distance < s / 8)
			choose1 = true;
		distance = dist(mouseX, mouseY, cx, cy);
		if (distance < s / 8)
			choose2 = true;
		distance = dist(mouseX, mouseY, cx + 10 + s / 4, cy);
		if (distance < s / 8)
			choose3 = true;
	}
	if (screen == 1) {
		screen1();
		distance = dist(mouseX, mouseY, cx - 10 - s / 4, cy);
		if (distance < s / 8)
			choose1 = true;
		distance = dist(mouseX, mouseY, cx, cy);
		if (distance < s / 8)
			choose2 = true;
		distance = dist(mouseX, mouseY, cx + 10 + s / 4, cy);
		if (distance < s / 8)
			choose3 = true;
	}
	if (screen == 2) {
		screen2();
		distance = dist(mouseX, mouseY, cx - 10 - s / 8, cy);
		if (distance < s / 8)
			choose1 = true;
		distance = dist(mouseX, mouseY, cx + 10 + s / 8, cy);
		if (distance < s / 8)
			choose2 = true;
	}
	if (screen == 3) {
		screen3();
		distance = dist(mouseX, mouseY, cx - 10 - s / 4, cy);
		if (distance < s / 8)
			choose1 = true;
		distance = dist(mouseX, mouseY, cx, cy);
		if (distance < s / 8)
			choose2 = true;
		distance = dist(mouseX, mouseY, cx + 10 + s / 4, cy);
		if (distance < s / 8)
			choose3 = true;
	}
	if (screen == 4) {
		screen4();
		distance = dist(mouseX, mouseY, sx, sy);
		if (distance < s / 8) {
			slider = true;
		}
		distance = dist(mouseX, mouseY, windowWidth - 80, windowHeight - s / 4);
		if (distance < s / 8) {
			choose1 = true;
		}
	}

	if (screen == 5) {
		makeScore();
		screen5();
	}
}

function makeScore() {
	var score = [0, 0, 0];

	// PC tipo 0
	if (ans[0] == 1)
		score[0]++;
	if (ans[1] == 3)
		score[0]++;
	if (ans[2] == 1)
		score[0]++;
	if (ans[3] == 3)
		score[0]++;
	if (ans[4] > 0.7)
		score[0]++;

	// PC tipo 1

	if (ans[0] == 2)
		score[1]++;
	if (ans[1] == 3)
		score[1]++;
	if (ans[2] == 2)
		score[1]++;
	if (ans[3] == 1)
		score[1]++;
	if (ans[4] < 0.5)
		score[1]++;

	// PC tipo 2

	if (ans[0] == 3)
		score[2]++;
	if (ans[1] == 2)
		score[2]++;
	if (ans[2] == 1)
		score[2]++;
	if (ans[3] == 2)
		score[2]++;
	if (ans[4] >= 0.5)
		score[2]++;

	// PC tipo 3

	if (ans[0] == 2)
		score[2]++;
	if (ans[1] == 2)
		score[2]++;
	if (ans[2] == 2)
		score[2]++;
	if (ans[3] == 1)
		score[2]++;
	if (ans[4] < 0.6)
		score[2]++;

	// PC tipo 4

	if (ans[0] == 3)
		score[2]++;
	if (ans[1] == 1)
		score[2]++;
	if (ans[2] == 1)
		score[2]++;
	if (ans[3] == 2)
		score[2]++;
	if (ans[4] >= 0.5)
		score[2]++;

	indMax = 0;
	var max = 0;

	for (var i = 0; i < 3; i++) {
		if (ans[i] > max) {
			indMax = i;
			max = ans[i];
		}
	}
}

/*function makeScore() {
	var score = [0, 0, 0];

	// PC tipo 1
	if (ans[0] == 2)
		score[0]++;
	if (ans[1] == 2)
		score[0]++;
	if (ans[2] == 2)
		score[0]++;
	if (ans[3] == 2)
		score[0]++;
	if (ans[4] < 0.7)
		score[0]++;

	// PC tipo 2

	if (ans[0] == 1)
		score[1]++;
	if (ans[1] == 1)
		score[1]++;
	if (ans[2] == 1)
		score[1]++;
	if (ans[3] == 1)
		score[1]++;
	if (ans[4] > 0.6)
		score[1]++;

	// PC tipo 3

	if (ans[0] == 3)
		score[2]++;
	if (ans[1] == 3)
		score[2]++;
	if (ans[2] == 3)
		score[2]++;
	if (ans[3] == 3)
		score[2]++;
	if (ans[4] < 0.3)
		score[2]++;


	indMax = 0;
	var max = 0;

	for (var i = 0; i < 3; i++) {
		if (ans[i] > max) {
			indMax = i;
			max = ans[i];
		}
	}
}*/

function screenInit() {
	textAlign(CENTER, CENTER);
	textSize(width / 30);
	text('Vamos começar sua busca por notebook personlizada!\n Aperte o botão para começar', cx, cy - 1.1 * s / 4);
	fill(157, 224, 173);
	ellipse(cx, cy, s / 4, s / 4);
	imageMode(CENTER);
	image(icon[0], cx + s / 80, cy, s / 8, s / 8);
}

function screen0() {
	textAlign(CENTER, CENTER);
	textSize(width / 20);
	text('Qual a finalidade?', cx, cy - 1.3 * s / 4)
	textSize(width / 30);

	text('Lazer', cx, cy - 0.7 * s / 4);
	text('Escritório', cx + 10 + s / 4, cy - 0.7 * s / 4);
	text('Gaming', cx - 10 - s / 4, cy - 0.7 * s / 4);

	fill(157, 224, 173);
	ellipse(cx, cy, s / 4, s / 4);
	ellipse(cx + 10 + s / 4, cy, s / 4, s / 4);
	ellipse(cx - 10 - s / 4, cy, s / 4, s / 4);

	imageMode(CENTER);
	image(icon[1], cx - 10 - s / 4, cy, s / 8, s / 8);
	image(icon[2], cx + 10 + s / 4, cy, s / 8, s / 8);
	image(icon[3], cx, cy, s / 8, s / 8);
}

function screen1() {
	textAlign(CENTER, CENTER);
	textSize(width / 20);
	fill(157, 224, 173);
	text('Escolha a cor:', cx, cy - 1.3 * s / 4)
	textSize(width / 30);
	text('Cinza', cx, cy - 0.7 * s / 4);
	text('Preto', cx + 10 + s / 4, cy - 0.7 * s / 4);
	text('Branco', cx - 10 - s / 4, cy - 0.7 * s / 4);

	fill(157, 224, 173);
	ellipse(cx, cy, s / 4, s / 4);
	ellipse(cx + 10 + s / 4, cy, s / 4, s / 4);
	ellipse(cx - 10 - s / 4, cy, s / 4, s / 4);

	fill(100);
	ellipse(cx, cy, s / 8, s / 8);
	fill(0);
	ellipse(cx + 10 + s / 4, cy, s / 8, s / 8);
	fill(255);
	ellipse(cx - 10 - s / 4, cy, s / 8, s / 8);

}

function screen2() {
	textAlign(CENTER, CENTER);
	textSize(width / 20);
	text('Com Bluetooth?', cx, cy - 1.0 * s / 4);

	fill(157, 224, 173);
	ellipse(cx - 10 - s / 8, cy, s / 4, s / 4);
	ellipse(cx + 10 + s / 8, cy, s / 4, s / 4);

	image(icon[4], cx - 10 - s / 8, cy, s / 8, s / 8);
	image(icon[5], cx + 10 + s / 8, cy, s / 8, s / 8);

}

function screen3() {

	textAlign(CENTER, CENTER);
	textSize(width / 20);
	text('Qual a faixa de valor?', cx, cy - 1.3 * s / 4);
	textSize(width / 30);
	//text('Lazer', cx, cy - 0.7*s/4 );
	//text('Escritório', cx + 10 + s/4, cy - 0.7*s/4 );
	//text('Gaming', cx - 10 - s/4, cy - 0.7*s/4 );


	imageMode(CENTER);

	fill(157, 224, 173);
	ellipse(cx, cy, s / 4, s / 4);
	image(icon[6], cx + s / 38, cy, s / 17, s / 17);
	image(icon[6], cx - s / 38, cy, s / 17, s / 17);

	ellipse(cx + 10 + s / 4, cy, s / 4, s / 4);
	image(icon[6], cx + 10 + s / 4, cy, s / 17, s / 17);
	image(icon[6], cx + 10 + s / 4 + s / 19, cy, s / 17, s / 17);
	image(icon[6], cx + 10 + s / 4 - s / 19, cy, s / 17, s / 17);

	ellipse(cx - 10 - s / 4, cy, s / 4, s / 4);
	image(icon[6], cx - 10 - s / 4, cy, s / 17, s / 17);

}

function screen4() {

	textAlign(CENTER, CENTER);
	textSize(width / 20);
	text('Uso:', cx, cy - 1.2 * s / 4);
	textSize(width / 35);
	text('Netflix e\nRedes sociais', s / 3 - 10, cy - 50);
	text('Edição de vídeo\ne alta perfomance', s / 3 - 10 + 20 + windowWidth - 2 * s / 3, cy - 50);

	fill(69, 173, 168);
	rect(s / 3 - 10, cy - 5, 20 + windowWidth - 2 * s / 3, 10, 5);
	fill(157, 224, 173);
	ellipse(sx, sy, s / 16, s / 16);
	ellipse(windowWidth - 80, windowHeight - s / 4, s / 8, s / 8);

	image(icon[7], s / 3 - 10, cy + 50, s / 17, s / 17);
	image(icon[8], s / 3 - 10 + 20 + windowWidth - 2 * s / 3, cy + 50, s / 17, s / 17);

	image(icon[0], windowWidth - 80, windowHeight - s / 4, s / 14, s / 14);
}

function screen5() {
	image(pc[indMax], cx - 25, cy - 25, 50, 50);
}

function mousePressed() {
	if (screen == -1) {
		if (choose1 == true) {
			screen++;
			return;
		}
	}
	if (screen == 0) {
		if (choose1 == true) {
			screen++;
			ans[0] = 1;
			return;
		}
		if (choose2 == true) {
			screen++;
			ans[0] = 2;
			return;
		}
		if (choose3 == true) {
			screen++;
			ans[0] = 3;
			return;
		}
	}
	if (screen == 1) {
		if (choose1 == true) {
			screen++;
			ans[1] = 1;
			return;
		}
		if (choose2 == true) {
			screen++;
			ans[1] = 2;
			return;
		}
		if (choose3 == true) {
			screen++;
			ans[1] = 3;
			return;
		}
	}
	if (screen == 2) {
		if (choose1 == true) {
			screen++;
			ans[2] = 1;
			return;
		}
		if (choose2 == true) {
			screen++;
			ans[2] = 2;
			return;
		}

	}
	if (screen == 3) {
		if (choose1 == true) {
			screen++;
			ans[3] = 1;
			return;
		}
		if (choose2 == true) {
			screen++;
			ans[3] = 2;
			return;
		}
		if (choose3 == true) {
			screen++;
			ans[3] = 3;
			return;
		}
	}
	if (screen == 4) {
		slider = true;
		if (choose1 == true) {
			ans[4] = (sx - s / 3 + 10) / (20 + windowWidth - 2 * s / 3);
			screen++;
			return;
		}
	}
}

function mouseDragged() {
	if (slider == true && mouseX > s / 3 && mouseX < windowWidth - s / 3) {
		sx = mouseX;
	}
}



function dist(x, y, a, b) {
	var ret = sqrt((x - a) * (x - a) + (y - b) * (y - b))
	return sqrt(ret);
}
