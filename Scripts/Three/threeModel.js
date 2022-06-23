import * as THREE from './three.module.js';
import {GLTFLoader} from './GLTFLoader.js';


var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
);

const renderer = new THREE.WebGLRenderer({antialiasing:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();
var obj;

loader.load('../Resources/3DModel/TreeStump.gltf', function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene);
});

scene.background = new THREE.Color(0xB0B0B);
var light = new THREE.HemisphereLight(0xffffff, 0xffffff, 3.5);
scene.add(light);
camera.position.set(0, 1, 4);

function animate(){
    requestAnimationFrame(animate);
    if(obj) obj.rotation.y += 0.005;
    renderer.render(scene, camera);
}

//Resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
};


animate();
