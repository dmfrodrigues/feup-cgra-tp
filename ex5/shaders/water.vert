attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform float timeFactor;

uniform sampler2D uSampler2;
uniform float normScale;

void main() {

	vec4 color = texture2D(uSampler2,aTextureCoord);

	float height_increase = color.r;

	vec3 offset = vec3(0,0,0);
	
	if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
		offset=aVertexNormal*normScale*0.1*sin(timeFactor);
	

	vec3 inc_vec = vec3(0.0,0.0,height_increase);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset + inc_vec*0.07, 1.0);

	vTextureCoord = aTextureCoord;
}