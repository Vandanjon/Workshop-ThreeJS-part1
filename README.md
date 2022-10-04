# Workshop-ThreeJS

## Objective

Recreate Earth in space.

> \#texture \#geometry \#scene \#camera \#render \#light

## Steps

### 1. Create a "_src_" folder with the following structure :
Level 1 | Level 2
---|---
index.html |
assets |
↳ | background_space.jpg
↳ | texture_earth.jpg
css |
↳ | style.css
scripts |
↳ | three.js
↳ | script.js

- "_index.html_" with a link to the 3 others
- "_style.css_" to set the body margin to 0
- "_three.js_" follow this [link](https://threejs.org) and download the code of three.js in our file
- "_script.js_" this file will contain all the needed code to draw in 3D

> Work only in the "_script.js_" file.

### 2. Create the Scene

- create 2 variables (`wpWidth` and `wpHeight`) which respectively reference the width and the height of the visible screen.
- create a `scene` variable with a space background. You can use free images providers like "Pexels" for example.

### 3. Create the Camera

- create a `camera` variable which represents a three.js perspective camera, with a field of view of 45, an aspect ratio of the entire screen, a near plane of 1 and a far plane of 1000.
- set the camera 5 units far in the z-axis.
- make the camera pointing at (1,1,1).

### 4. Render - Create an animate Loop

- create a `renderer` variable which references a WebGL renderer.
- resize the canvas to full screen size.
- append the canvas to the body node.
- finally copy the following code at the end of your _script.js_ file to render your scene.

```
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();
```

### 5. Create our Planet




### 6. Create Lights

6. Make it real (rotation)

## To go further

7. Add Sun

8. Add other planets

9. Make it real (rotations)

10. Make it real (lights)

