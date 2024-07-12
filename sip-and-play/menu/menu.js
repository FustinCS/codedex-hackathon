import './menu.css';

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function createCoffee() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.webgl'),
        alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500,500);
    renderer.setClearColor(0xF4E2C1, 1);
    camera.position.set(2, 2, 2);

    let light = new THREE.PointLight( 0xffffff, 0.9 );
    light.intensity = 40;
    camera.add( light );
    scene.add( camera );

    let mesh;
    const loader = new GLTFLoader().setPath('../assets/');
    loader.load('coffee_shop_cup.glb', (gltf) => {
        mesh = gltf.scene;
        scene.add(mesh);
    });

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.target.set(0, 1, 0); // Adjust the target as needed
    orbit.update();

    animate();

    function animate() {
        requestAnimationFrame(animate);

        orbit.update();
        if (mesh) {
            mesh.rotation.y += 0.05;
        }

        renderer.render(scene, camera);
    }    
}


function createSpecialty() {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.webgl-two'),
        alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(500,500);
    renderer.setClearColor(0xF4E2C1, 1);
    camera.position.set(1, 3, 2);

    let light = new THREE.PointLight( 0xffffff, 0.9 );
    light.intensity = 40;
    camera.add( light );
    scene.add( camera );

    let mesh;
    const loader = new GLTFLoader().setPath('../assets/');
    loader.load('cafe_latte_with_art.glb', (gltf) => {
        mesh = gltf.scene;
        scene.add(mesh);
    });

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.target.set(0, 1, 0); // Adjust the target as needed
    orbit.update();

    animate();

    function animate() {
        requestAnimationFrame(animate);

        orbit.update();
        if (mesh) {
            mesh.rotation.y += 0.05;
        }

        renderer.render(scene, camera);
    }
}

createCoffee();
createSpecialty();