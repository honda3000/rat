const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});



let sound = new Audio('./images/optimuSound.mp3');
function repro(){
  sound.play();
 
}
document.addEventListener('DOMContentLoaded',repro,false);

playBtn.addEventListener('click', ()=>{
  sound.play();
});
pauseBtn.addEventListener('click', ()=>{
  sound.pause();
});