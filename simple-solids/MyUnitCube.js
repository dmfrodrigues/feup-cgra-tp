/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0.5,		//0 - 0x
			0.5, 0.5, 0.5,		//1 - 0y
			0.5, 0.5, 0.5,		//2 - 0z

			-0.5, 0.5, 0.5,		//3 - 1x
			-0.5, 0.5, 0.5,		//4 - 1y
			-0.5, 0.5, 0.5,		//5 - 1z

			-0.5, -0.5, 0.5,	//6 - 2x
			-0.5, -0.5, 0.5,	//7 - 2y
			-0.5, -0.5, 0.5,	//8 - 2z

			0.5, -0.5, 0.5,		//9 - 3x
			0.5, -0.5, 0.5,		//10 - 3y
			0.5, -0.5, 0.5,		//11 - 3z
			
			0.5, 0.5, -0.5,		//12 - 4x
			0.5, 0.5, -0.5,		//13 - 4y
			0.5, 0.5, -0.5,		//14 - 4z

			-0.5, 0.5, -0.5,	//15 - 5x
			-0.5, 0.5, -0.5,	//16 - 5y
			-0.5, 0.5, -0.5,	//17 - 5z

			-0.5, -0.5, -0.5,	//18 - 6x
			-0.5, -0.5, -0.5,	//19 - 6y
			-0.5, -0.5, -0.5,	//20 - 6z

			0.5, -0.5, -0.5,	//21 - 7x
			0.5, -0.5, -0.5,	//22 - 7y
			0.5, -0.5, -0.5		//23 - 7z
		];

		//Normals
		this.normals = [
			1, 0, 0,		//0 - 0x
			0, 1, 0,		//1 - 0y
			0, 0, 1,		//2 - 0z

			-1, 0, 0,		//3 - 1x
			0, 1, 0,		//4 - 1y
			0, 0, 1,		//5 - 1z

			-1, 0, 0,	//6 - 2x
			0, -1, 0,	//7 - 2y
			0, 0, 1,	//8 - 2z

			1, 0, 0,		//9 - 3x
			0, -1, 0,		//10 - 3y
			0, 0, 1,		//11 - 3z
			
			1, 0, 0,		//12 - 4x
			0, 1, 0,		//13 - 4y
			0, 0, -1,		//14 - 4z

			-1, 0, 0,	//15 - 5x
			0, 1, 0,	//16 - 5y
			0, 0, -1,	//17 - 5z

			-1, 0, 0,	//18 - 6x
			0, -1, 0,	//19 - 6y
			0, 0, -1,	//20 - 6z

			1, 0, 0,	//21 - 7x
			0, -1, 0,	//22 - 7y
			0, 0, -1		//23 - 7z
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0*3+2, 1*3+2, 2*3+2,
            2*3+2, 3*3+2, 0*3+2,
            6*3+2, 5*3+2, 4*3+2,
            4*3+2, 7*3+2, 6*3+2,
            2*3+0, 1*3+0, 5*3+0,
            5*3+0, 6*3+0, 2*3+0,
            0*3+0, 3*3+0, 7*3+0,
            7*3+0, 4*3+0, 0*3+0,
            2*3+1, 6*3+1, 7*3+1,
            7*3+1, 3*3+1, 2*3+1,
            0*3+1, 4*3+1, 5*3+1,
            5*3+1, 1*3+1, 0*3+1
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

