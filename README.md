# Workshop-ThreeJS

## Objective

Recreate Earth in space.

> \#threejs \#3D \#scene \#camera \#render \#light \#geometry \#texture \#mesh

## Steps

### 1. Create a "*_src_*" folder with the following structure :

Level 1 | Level 2
---|---
index.html |
assets |
↳ | background_space.jpg
↳ | texture_earth.jpg
css |
↳ | style.css
scripts |
↳ | script.js
↳ | three.js


- "_index.html_" links to the "_style.css_", "_three.js_" and "_script.js_"
- "_style.css_" sets the body margin to 0
- "_three.js_" follow this [link](https://threejs.org) and download the code of three.js in our file
- "_script.js_" this file will contain all the needed code to draw in 3D

> **Work only in the "_script.js_" file.**

### 2. Create the Scene

- create 2 variables (`wpWidth` and `wpHeight`) which respectively reference the width and the height of the visible screen.
- create a `scene` variable with a space background. You can use free images providers like "Pexels" for example. Save your file in the "_*assets*_" folder.

### 3. Create the Camera

- create a `camera` variable which represents a three.js perspective camera, with a field of view of 45, an aspect ratio of the entire screen, a near plane of 1 and a far plane of 1000.
- set the camera 5 units far in the z-axis.

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

- aim to [this site](https://www.solarsystemscope.com/textures/) and download the earth map texture. Add it to the "_*assets*_" folder.
- create 3 variables : `textureEarth`, `geometry` and `material`.
- `textureEarth` uses the three.js TextureLoader().
- create a sphere and assign it to `geometry`. You can give it a radius of 1, 32 vertical and horizontal segments to make it smooth.
- assign a MeshLambertMaterial to the `material` variable and apply the `textureEarth` on it.
- now, create a `sphere` variable which refers to a Mesh object and give it `geometry` and `material` as arguments.
- finally, add the `sphere` to the `scene`.

### 6. Create Lights

- create a PointLight with a white color and a 1.5 intensity level and assign it to a `light` variable.
- set its position to (1, 2, 3).
- add it to the `scene`.
- then, you can add an AmbientLight to the `scene` with an `0xafafaf` color and an intensity of 0.15.

### 7. Make it real (rotation)

- minus the z `sphere` rotation to 0.4 once.
- make the `sphere` rotate on the y axis constantly.

## To go further

8. Add Sun

9. Add other planets

10. Make it real (rotations & lights)

