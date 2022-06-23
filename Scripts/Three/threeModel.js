import * as THREE from './three.module.js';
import {GLTFLoader} from './GLTFLoader.js';


var scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
);
camera.position.set(0, 5, 10)
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer({antialiasing:true});
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();
var obj;

loader.load('../Resources/3DModel/TreeStump.gltf', function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene);
});

scene.background = new THREE.Color(0xB0B0B);
var light = new THREE.AmbientLight(0xFFFFFF);
var dirLight = new THREE.DirectionalLight(0x560000, 3);
scene.add(light);
scene.add(dirLight);
camera.position.set(0, 2.5, 4);

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
