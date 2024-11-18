import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "../css/styles.css";
import Typed from "typed.js";

import dockerLogo from "../assets/images/general/docker.svg";
import cssLogo from "../assets/images/general/css.svg";
import htmlLogo from "../assets/images/general/html.svg";
import jsLogo from "../assets/images/general/js.png";
import figmaLogo from "../assets/images/general/figma.svg";
import expressLogo from "../assets/images/general/expressLogo.png"; 
import nodesjLogo from "../assets/images/general/nodejs.svg";
import postgressLogo from "../assets/images/general/PostgresSQL.svg";
import pythonLogo from "../assets/images/general/python.png";
import javaLogo from "../assets/images/general/java.png";
import cLogo from "../assets/images/general/letter-c.png";
import gitLogo from "../assets/images/general/git.png";

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
document.getElementById("canvas").style.height = window.innerHeight/10;
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = true;
controls.maxPolarAngle = Math.PI / 2;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 7;
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



const textContainer = document.querySelector(".landing-column-1__hero-text");
console.log(textContainer);
function updateText() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 769) {
    textContainer.textContent = "A lifelong learner and problem-solver";
  } else if (screenWidth < 1284) {
    textContainer.textContent =
      "A lifelong learner and problem-solver who thrives on tackling challenges and pushing boundaries. I believe in the power of teamwork to enhance learning and address complex problems. Check out my projects below!";
  } else {
    textContainer.textContent =
      "Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.";
  }
}

const typed = new Typed("#career", {
  strings: [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Developer",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay:3000,
  loop: true,
});

const certificateShowAllButton=document.querySelector(".certificate-column__button");
const certificateList = Array.from(document.querySelectorAll(".certificate-download")).slice(2);

let currentScrollY = window.scrollY;
certificateShowAllButton.addEventListener("click",function(){
  const isShowAll = certificateList[0].classList.contains("show-all");
  if(certificateList[0].classList.contains("show-all") ){
    currentScrollY = window.scrollY;
  }
  certificateList.forEach((projectCard)=>{
    if(isShowAll){
      projectCard.classList.remove("show-all");
    }else{
      projectCard.classList.add("show-all");
    }
  })
  certificateShowAllButton.textContent = certificateList[0].classList.contains("show-all") ? "SHOW ALL" : "SHOW LESS";
    window.scrollTo(0, currentScrollY);

})

const projectShowAllButton=document.querySelector(".project__column__button");
const projectList = Array.from(document.querySelectorAll(".project__list__profile")).slice(2);

let currentScrollY2 = window.scrollY;
projectShowAllButton.addEventListener("click",function(){
  const isShowAll = projectList[0].classList.contains("show-all");
  if(projectList[0].classList.contains("show-all") ){
    currentScrollY2 = window.scrollY;
  }
  projectList.forEach((projectCard)=>{
    if(isShowAll){
      projectCard.classList.remove("show-all");
    }else{
      projectCard.classList.add("show-all");
    }
  })
  projectShowAllButton.textContent = projectList[0].classList.contains("show-all") ? "SHOW ALL" : "SHOW LESS";
    window.scrollTo(0, currentScrollY2);

})

const modal = document.getElementById("project-info-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".btn-info").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const description = button.getAttribute("data-description");
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "flex";
  });
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


window.addEventListener("load", updateText);
window.addEventListener("resize", updateText);
