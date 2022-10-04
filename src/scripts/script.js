const wpWidth = window.innerWidth;
const wpHeight = window.innerHeight;

// ADD SCENE
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load("./background_space.jpg");

// ADD CAMERA
const camera = new THREE.PerspectiveCamera(75, wpWidth / wpHeight, 1, 1000);
camera.position.z = 5;