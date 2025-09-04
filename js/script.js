// 스크롤 이벤트 처리
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header_container");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 스크롤이 100px 이상 내려가면 헤더 배경을 투명하게
  if (scrollTop > 100) {
    header.classList.add("header_scrolled");
  } else {
    header.classList.remove("header_scrolled");
  }
});
