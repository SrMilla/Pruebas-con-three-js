//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import *  as THREE from 'https://unpkg.com/three/build/three.module.js';
const container = document.querySelector('#game-container');
//import *  as THREE from 'https://unpkg.com/three/build/three.module.js';
//import *  as THREE from 'https://unpkg.com/three/build/three.module.js';

// escena
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

// Cámara
const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 15);
//mono

/*const loader =new GLTFLoader();
loader.load('../2.glb',function(gltf){
    scene.add(gltf.scene);
});*/
// Mesh
/*const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
    color: 'teal'
});
const box_mesh = new THREE.Mesh(geometry, material);
scene.add(box_mesh);*/
//const loader = new GLTFLoader();
// camera.lookAt(box_mesh.position);

// Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);
renderer.render(scene, camera);

