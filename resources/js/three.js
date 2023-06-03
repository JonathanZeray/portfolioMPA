import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const canvas = document.getElementById("canvas");
const loadingManager = new THREE.LoadingManager();
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.querySelector(".progress-bar-container");

loadingManager.onProgress = function(url, loaded, total) {
    progressBar.value = (loaded / total) * 100;
}

loadingManager.onLoad = function() {
  setTimeout(() => {
    progressBarContainer.style.display = "none";
  }, 300);
}

// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 145, 220);

// SCENE
const scene = new THREE.Scene();

// LOAD SCENE FROM SPLINE.
const loader = new SplineLoader(loadingManager);
loader.load(
  'https://prod.spline.design/lYNdMHQwfB-ROVwl/scene.splinecode',
  (splineScene) => {
    scene.add(splineScene);
  }
);


// RENDERER
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth / 2.8, window.innerHeight / 2.8);
renderer.setAnimationLoop(animate);
renderer.outputColorSpace = THREE.SRGBColorSpace;


// SCENE SETTINGS
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color('#f5f5f5');
renderer.setClearAlpha(1);

const light = new THREE.AmbientLight( 0x404040, 3 );
scene.add(light);


// ORBIT CONTROLS.
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.25; // 1.5
controls.maxPolarAngle = Math.PI/2.5; // FOR DISABLING VERTICAL PAN BELOW "GROUND".
controls.minPolarAngle = Math.PI/5;
controls.maxDistance = 400;
controls.minDistance = 300;

// Eventlistener for when window gets resized. 
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
  camera.left = window.innerWidth / - 2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / - 2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 2.8, window.innerHeight / 2.8);
}

function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}