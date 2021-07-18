"use strict";

//상단바 투명하게 만들고 이동시 색깔이 변화해서 같이 이동하게 만들기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//상단바 메뉴 클릭시 그에 해당하는 섹션으로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

//contact me 버튼 이벤트

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  //상단텝의 버튼을 눌렀을때 부드럽게 그 섹션으로 이동하게 한다.
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
