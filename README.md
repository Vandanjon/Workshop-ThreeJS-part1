# Workshop-ThreeJS
> \#threejs \#3D \#scene \#camera \#render \#light \#geometry \#texture \#mesh

# Objective - Another Earth

Up early, you now have the power to create a new Earth. But, how exactly do we do that?


## Steps

## :file_folder: STEP 1. An organization of dreams

Creating a planet is not a job to be taken lightly. We'll need some organization.
First, let's create a folder to hold our entire project. We'll call it the "***project-earth***".
We may be a god, but we're not necessarily subtle.
We will need:
- a file that will serve as an entry point for the browser. Call it "*index.html*".
- a folder that will contain the images of our little universe. Let's call it "***assets***".
- a "***js***" folder for our two js files. The first one, three.js, will contain the code of three.js (subtlety when you hold us). The second one is our code to generate our universe.

Here is a little diagram that summarizes it all:

top level | sub-level
---|---
| index.html
assets |
↳ (contains) | background_space.jpg (not here yet)
↳ (contains) | texture_earth.jpg (not here yet)
js |
↳ (contains) | script.js
↳ (contains) | three.js


### :trophy: STEP 1 DONE :white_check_mark::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star: :trophy:


## :pencil2: STEP 2. Dusty men

As "*index.html*" will be the main entry point in our site, we need to make him able to reach all the other files.
To do so, add the following code in it:


>_```index.html```_
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>My first three.js app</title>
		<style>body { margin: 0; }</style>
	</head>
    
	<body>
		<script src="js/three.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>
```

Okay, our command center is operational.
Now we need to find tools to build our universe. Oh, sure, we could do everything by hand, but God forbid, we also like it easier.
So we'll ask three.js to help us. To do so, we'll go to [their site](https://threejs.org) and then, in the code section on the left of the main page, we'll click on the download link.
After it, copy/paste the code in our "*three.js*" file.

After all this hard work, we are ready now to build our world in the "*script.js*" file, but in the next step.

### :trophy: STEP 2 DONE :white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star::eight_pointed_black_star: :trophy:


## STEP 3. Interstellar

As we're in space, let's think in 3D.
A bit of theory:

In 3D, we need a scene that will contain all our elements.
To see these elements, we will also need a camera.
Finally, we will have to make a "rendering", that is to say convert the 3D elements into a 2D display for our screens.

To do this, we will use the properties of the THREE object.

All following codes will be in our "*script.js*" file.

First of all, let's create the scene:


>_```script.js```_
```
const scene = new THREE.Scene();
```

Now the camera:


>_```script.js```_
```
const wpWidth = window.innerWidth;
const wpHeight = window.innerHeight;

const camera = new THREE.PerspectiveCamera(75, wpWidth / wpHeight, 1, 1000);
camera.position.z = 5;
scene.add(camera);
```
First, we decide to create 2 variables to shorten our code. They respectively reference the width and the height of the visible screen.

Then, between orthographic and perspective camera, we choose the second one. Anyway, those cameras will see a frustrum of our scene. Give it a field of view of 45, an aspect ratio of the entire screen, a near plane of 1 and a far plane of 1000.

We will finally put the camera 5 units far in the z-axis and add it to the scene.
It is really important that, each time we create anything, we add it to the scene.


>_```script.js```_
```
const renderer = new THREE.WebGLRenderer();
renderer.setSize(wpWidth, wpHeight);
document.body.appendChild(renderer.domElement);
```

For the last part, we create our renderer. Three.js is capable to use several engines, but we decide here to use the WebGL one.
We resize the canvas to full screen size and we append the canvas to the body node.

Now, we almost have all needed stuff to have a visual. But to render effectively our scene and objects, we must create a loop to update our visual according to the permanent calculations from 3D to 2D.


>_```script.js```_
```
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();
```

AAnnnnnd, tadaaaa !

Ok, you just see a black screen. A little bit disappointing, I grant you that.

But if you look carefully the code in the browser (F12), you might see the new canvas tag that was just added to the page.

Time for tuning:
First, download a background map to decorate our space system. We chose to pick a free asset from Pexels, renamed it "*background_space.jpg*" and added it in the "***assets***" folder.


>_```script.js```_
```
scene.background = new THREE.TextureLoader().load("./assets/background_space.jpg");
```
A bit more shinier right?

Congrats,
### :trophy: STEP 3 DONE :white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star::eight_pointed_black_star: :trophy:


## STEP 4. The day the Earth stood still

We're finally ready to add our planet. In fact, it's just a sphere with a texture. To build something in 3D, you need a "geometry" (here, a sphere) and a "material" (here, another .jpg image from [this site](https://www.solarsystemscope.com/textures/)).


>_```script.js```_
```
const textureEarth = new THREE.TextureLoader().load("./assets/texture_earth.jpg");
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshLambertMaterial({ map: textureEarth });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
```

WAIT! All of this... for that?

In fact, we build a real Earth Doppelganger, but we can't see it because we're in the dark. The space background misleads us. We need to light it up.


>_```script.js```_
```
const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(1, 2, 3);
scene.add(light);
scene.add(new THREE.AmbientLight(0xafafaf, 0.15));
```

First, we add a white light point, set its position and add it to the scene. Then, for a smoother ambiance, we add an ambient light directly added to the scene.

### :trophy: STEP 4 DONE :white_check_mark::white_check_mark::white_check_mark::white_check_mark::eight_pointed_black_star: :trophy:


## STEP 5. After Earth

To make our Earth more realistic, and as it is a bit tilted on its axis, rotate this:


>_```script.js```_
```
sphere.rotation.z -= 0.3;
```

We can even add a real rotation in our ```animate``` loop. Add this line in the loop:


>_```script.js```_
```
sphere.rotation.y -= 0.005;
```

Well done, we have used our new power pretty well. Let's take a nap in front of our new world.

### :trophy: STEP 5 DONE :white_check_mark::white_check_mark::white_check_mark::white_check_mark::white_check_mark::white_check_mark: :trophy:


## To go further

- Add Sun
- Add other planets
- Make it even more real (rotations & lights)

