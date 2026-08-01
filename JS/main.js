const words = ["Freelance", "Developer"];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing");

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWord, 100);
  } else {
    setTimeout(deleteWord, 1000);
  }
}

function deleteWord() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(deleteWord, 50);
  } else {
    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

    setTimeout(typeWord, 200);
  }
}

typeWord();

//start services

AOS.init();

// 2. Counter Animation Logic
const counters = document.querySelectorAll(".counter");
const speed = 120;

function startCounter(counter) {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = Math.min(count + inc, target);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
}

const sectionCounters = document.querySelector("#counters");
let started = false;

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !started) {
      counters.forEach((counter) => startCounter(counter));
      started = true;
    }
  },
  {
    threshold: 0.4,
  },
);

if (sectionCounters) {
  observer.observe(sectionCounters);
}

//end services

// start portfolio

var curIndex = 0;
var imgs = document.querySelectorAll(".item .img img");
var plusIcons = document.querySelectorAll(".fa-circle-plus");

var box = document.querySelector(".box");
var boxImg = document.querySelector(".box-img");
var exit = document.querySelector(".fa-circle-xmark");
var next = document.querySelector(".fa-angle-right");
var prev = document.querySelector(".fa-angle-left");

for (let i = 0; i < plusIcons.length; i++) {
  plusIcons[i].onclick = function () {
    box.classList.remove("d-none");
    var imgsrc = imgs[i].getAttribute("src");
    boxImg.style.backgroundImage = `url(${imgsrc})`;
    curIndex = i;
  };
}

next.onclick = function () {
  curIndex++;
  if (curIndex == imgs.length) {
    curIndex = 0;
  }

  var imgsrc = imgs[curIndex].getAttribute("src");
  boxImg.style.backgroundImage = `url(${imgsrc})`;
};

prev.onclick = function () {
  curIndex--;
  if (curIndex == -1) {
    curIndex = imgs.length - 1;
  }

  var imgsrc = imgs[curIndex].getAttribute("src");
  boxImg.style.backgroundImage = `url(${imgsrc})`;
};

exit.onclick = function () {
  box.classList.add("d-none");
};

// end portfolio

//contact section

// const form = document.getElementById("contactForm");
// const statusEl = document.getElementById("formStatus");
// const submitBtn = document.getElementById("submitBtn");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   e.stopPropagation();

//   if (!form.checkValidity()) {
//     form.classList.add("was-validated");
//     statusEl.style.display = "none";
//     return;
//   }

//   form.classList.add("was-validated");
//   submitBtn.disabled = true;
//   submitBtn.textContent = "Sending...";
//   statusEl.style.display = "none";

//   setTimeout(function () {
//     saveMessageRecord();

//     submitBtn.disabled = false;
//     submitBtn.textContent = "Send Message";
//     statusEl.textContent = "Success";
//     statusEl.className = "fw-semibold text-success mb-2";
//     statusEl.style.display = "block";
//     form.reset();
//     form.classList.remove("was-validated");
//   }, 1200);
// });

// function saveMessageRecord() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;
//   const timestamp = new Date().toLocaleString("en-GB");

//   const newRecord = {
//     date: timestamp,
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//   };

//   let allMessages = JSON.parse(localStorage.getItem("saved_messages")) || [];
//   allMessages.push(newRecord);

//   localStorage.setItem("saved_messages", JSON.stringify(allMessages));

//   console.log("تم حفظ الرسالة بنجاح في LocalStorage!");
// }
