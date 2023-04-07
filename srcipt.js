const textView = document.getElementById("typical");
const toSelect = document.querySelectorAll("[data-forSelect]");
const btn = document.querySelector("[btn]");
const navbar = document.querySelector("[navbar]");
const navbar_btn = document.querySelectorAll("[navbar-btn]");
const resume = document.querySelector("[resume-card]");
const form = document.querySelector("[form]");
let x = 0;
let z = 0;

(function () {
  emailjs.init("user_NOmaxiUt7C5WnlrHsLiD1");
})();

toSelect.forEach((element, index) => {
  element.addEventListener("click", () => {
    toSelect.forEach(ele => {
      ele.classList.remove("selected");
    });
    element.classList.add("selected");
    resume.style.transform = `translateY(-${index * 350}px)`;
  });
});

navbar_btn.forEach(element => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("show-navbar");
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();
  btn.classList.add("animating");
  btn.disable = true;
  const data = {
    form_name: document.querySelector("[contact-name]").value,
    reply_to: document.querySelector("[contact-email]").value,
    message: document.querySelector("[contact-msg]").value,
  };
  emailjs
    .send("service_qmd9ghs", "template_qatb9ua", data)
    .then(function (res) {
      console.log(res);
    });
});

let text = [
  "Ethusiastic Dev",
  "Full Stack Developer",
  "MERN Developer",
  "React Developer",
  "Cross Platform",
  "Web Developer",
  "NodeJS Developer",
  "Cloud Engineer",
  "Back-end Devloper",
  "Software Engineer",
];

let curr = [];
let i = 0;
let j = 0;
let time = 50;
let deleting = false;

const loop = () => {
  time = 50;
  textView.innerText = curr.join("");
  if (i === text[j].length) {
    deleting = true;
    time = 1000;
  }
  if (!deleting && i < text[j].length) {
    curr.push(text[j][i]);
    i++;
  }
  if (deleting) {
    curr.pop();
    i--;
    if (curr.length === 0) {
      deleting = false;
    }
  }
  if ((i === 0) & !deleting) {
    curr = [];
    j++;
  }
  if (j === text.length) {
    j = 0;
  }
  setTimeout(loop, time);
};
loop();
