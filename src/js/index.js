import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "../css/styles.css";

import dockerLogo from "../assets/images/Docker.svg";
import cssLogo from "../assets/images/css.svg";
import htmlLogo from "../assets/images/html.svg";
import jsLogo from "../assets/images/js.png";
import figmaLogo from "../assets/images/figma.svg";
import expressLogo from "../assets/images/expressLogo.png";
import nodesjLogo from "../assets/images/nodejs.svg";
import postgressLogo from "../assets/images/PostgresSQL.svg";
import pythonLogo from "../assets/images/python.png";
import javaLogo from "../assets/images/java.png";
import cLogo from "../assets/images/letter-c.png";
import gitLogo from "../assets/images/git.png";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
});
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enablePan = true;
controls.minDistance = 5;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI / 2;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 10;
renderer.setClearColor(0x141819);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const logos = [
  dockerLogo,
  cssLogo,
  figmaLogo,
  htmlLogo,
  jsLogo,
  expressLogo,
  nodesjLogo,
  postgressLogo,
  pythonLogo,
  javaLogo,
  cLogo,
  gitLogo,
];

const golfBalls = [];
const ballGeometry = new THREE.SphereGeometry(0.9, 64, 64);
const textureLoader = new THREE.TextureLoader();

logos.forEach((logo, index) => {
  const texture = textureLoader.load(logo);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  const ballMaterial = new THREE.MeshStandardMaterial({
    opacity: 0.9,
    color: 0xffffff,
    map: texture,
    roughness: 0.6,
    metalness: 0.1,
  });

  const golfBall = new THREE.Mesh(ballGeometry, ballMaterial);

  const angle = (index / logos.length) * Math.PI * 2;
  golfBall.position.x = Math.cos(angle) * 4;
  golfBall.position.y = Math.sin(angle) * 4;

  scene.add(golfBall);
  golfBalls.push(golfBall);
});

function animate() {
  requestAnimationFrame(animate);

  golfBalls.forEach((ball) => {
    ball.rotation.y += 0.01;
    ball.rotation.x += 0.01;
  });

  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          clearFormFields();
          alert("Form submitted successfully!");
        } else {
          throw new Error("Form submission failed.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Form submission failed. Please try again later.");
      });
  });

document
  .getElementById("github-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/Mnqanqeni", "_blank");
  });

const textContainer = document.querySelector(".landing-column-1__hero-text");
console.log(textContainer);
function updateText() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 320) {
    textContainer.textContent =
      "Hi, I'm Bayu, a full-stack developer. Take a look at my projects!";
  } else if (screenWidth <  1284) {
    textContainer.textContent =
    "A lifelong learner and problem-solver who thrives on tackling challenges and pushing boundaries. I believe in the power of teamwork to enhance learning and address complex problems. Check out my projects below!";
  } else {
    textContainer.textContent =
      "Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.";
  }
}

window.addEventListener("load", updateText);
window.addEventListener("resize", updateText);
