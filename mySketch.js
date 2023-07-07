angle = 0
function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);

}

function draw() {
	background(100)
	noStroke()
	push()
	translate(-8,0,0)
	fill("blue")
	sphere(10)
	pop()
	push()
	translate(8,0,0)
	fill("red")
	sphere(10)
	pop()
	
	
	
	//First shell
	push()
	rotateX(angle)
	rotateY(angle)
	rotateZ(angle)
	torus(50,1,50)
	push()
	rotateZ(angle*4)
	translate(50,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ((angle*4)-9.5)
	translate(50,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	
	pop()
	
	//Second shell
	push()
	rotateX(angle*1.3)
	rotateY(angle*1.3)
	rotateZ(angle*1.3)
	torus(100,1,50)
	push()
	rotateZ(angle*4-9.4-9.5)
	translate(100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ((angle*4)-9.6-9.5)
	translate(100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ(angle*4-9.4)
	translate(100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ((angle*4)-9.6)
	translate(100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	
	push()
	rotateZ((angle*4)-14.15)
	translate(100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ((angle*4)-14.35)
	translate(100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ((angle*4)-14.15)
	translate(-100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	push()
	rotateZ((angle*4)-14.35)
	translate(-100,0,0)
	fill("yellow")
	sphere(5)
	pop()
	
	//Third shell
	push()
	rotateX(angle/2)
	rotateY(angle/2)
	rotateZ(angle/2)
	torus(200,1,50)
	
	push()
	rotateZ((angle*4)-18.9)
	translate(200,0,0)
	fill("yellow")
	sphere(5)
	pop()

	push()
	rotateZ((angle*4)-19.1)
	translate(200,0,0)
	fill("yellow")
	sphere(5)
	pop()

	push()
	rotateZ((angle*4)-9.4)
	translate(200,0,0)
	fill("yellow")
	sphere(5)
	pop()

	push()
	rotateZ((angle*4)-9.6)
	translate(200,0,0)
	fill("yellow")
	sphere(5)
	pop()


	push()
	rotateZ((angle*4)-14.15)
	translate(200,0,0)
	fill("yellow")
	sphere(5)
	pop()

	push()
	rotateZ((angle*4)-14.35)
	translate(200,0,0)
	fill("yellow")
	sphere(5)
	pop()

	push()
	rotateZ((angle*4)-14.15)
	translate(-200,0,0)
	fill("yellow")
	sphere(5)
	pop()

	push()
	rotateZ((angle*4)-14.35)
	translate(-200,0,0)
	fill("yellow")
	sphere(5)
	pop()


	pop()
	angle+=0.01
}