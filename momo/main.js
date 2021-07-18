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

//화면을 스크롤할때 홈화면의 투명도 조절

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//화면을 스크롤 다운할경우 스크롤업 버튼이 등장
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  //화면의 homeheight의 절반정도를 내려오면 스크롤업 버튼이 등장
  if (window.scrollY > homeHeight / 2) {
    // arrowUp에 있는 클래스를 추가
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//버튼 클릭시 화면 최상단으로 스크롤 이동
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//사용자 지정 유틸리티 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  //상단텝의 버튼을 눌렀을때 부드럽게 그 섹션으로 이동하게 한다.
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
