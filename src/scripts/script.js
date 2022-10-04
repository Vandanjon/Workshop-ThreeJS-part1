const wpWidth = window.innerWidth;
const wpHeight = window.innerHeight;

// ADD SCENE
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load("./assets/background_space.jpg");

// ADD CAMERA
const camera = new THREE.PerspectiveCamera(75, wpWidth / wpHeight, 1, 1000);
camera.position.z = 5;

// ADD RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(wpWidth, wpHeight);
document.body.appendChild(renderer.domElement);

// ADD PLANET EARTH
const textureEarth = new THREE.TextureLoader().load("./assets/texture_earth.jpg");
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial({ map: textureEarth });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// ADD LIGHTS
const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(1, 2, 3);
scene.add(light);
scene.add(new THREE.AmbientLight(0xafafaf, 0.15));


sphere.rotation.z += 0.4; //rotate Earth once

// Function Animate
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y -= 0.005; // rotate Earth constantly
    renderer.render(scene, camera);
};

animate();