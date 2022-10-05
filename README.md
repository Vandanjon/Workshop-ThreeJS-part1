# Workshop-ThreeJS
> \#threejs \#3D \#scene \#camera \#render \#light \#geometry \#texture \#mesh

## Objective - Another Earth

Up early, you now have the power to create a new Earth. But, how exactly do we do that?


## Steps

### :file_folder: 1. An organization of dreams

Creating a planet is not a job to be taken lightly. We'll need some organization.
First, let's create a folder to hold our entire project. We'll call it the "***project-earth***".
We may be a god, but we're not necessarily subtle.
We will need:
- a file that will serve as an entry point for the browser. Call it "*index.html*".
- a folder that will contain the images of our little universe. Let's call it "***assets***".
- a "***scripts***" folder for our two js files. The first one, three.js, will contain the code of three.js (subtlety when you hold us). The second one is our code to generate our universe.

Here is a little diagram that summarizes it all:

Create a "*_src_*" folder with the following structure :

top level | sub-level
---|---
| index.html
assets |
↳ (contains) | background_space.jpg
↳ (contains) | texture_earth.jpg
css |
↳ (contains) | style.css
scripts |
↳ (contains) | script.js
↳ (contains) | three.js


### :trophy: STEP 1 DONE. Good Job :trophy:

### :file_folder: 2. An organization of dreams

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

- increment the z `sphere` rotation to 0.4 once.
- make the `sphere` rotate on the y axis constantly.

## To go further

8. Add Sun

9. Add other planets

10. Make it real (rotations & lights)

