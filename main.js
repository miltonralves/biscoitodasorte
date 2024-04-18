const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const imgClick = document.querySelector("#imgClick");
const btnClick = document.querySelector("#btnClick");
const imgSorte = document.querySelector(".sorte");

imgClick.addEventListener("click", handleImgClick);
btnClick.addEventListener("click", handleBtnClick);

function handleImgClick() {
  toggleScreen();
}

function handleBtnClick() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  imgSorte.classList.toggle("hide");
}
