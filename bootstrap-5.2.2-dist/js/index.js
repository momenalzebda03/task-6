var tag_header = document.querySelectorAll(".active_hover");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      tag_header[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 800) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 6000 / goal);
}

var tag_header1 = document.querySelectorAll(".a_hover");
for (let i = 0; i < tag_header1.length; i++) {
  var chekd = tag_header1[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header1.length; i++) {
      tag_header1[i].classList.remove("active1");
    }
    this.classList.add("active1");
  });
}
