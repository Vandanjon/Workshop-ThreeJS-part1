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


// Function Animate
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();