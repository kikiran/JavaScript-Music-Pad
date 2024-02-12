function removeTransition(e) {
  console.log("key", e);

  if (e.propertyName !== "transform") return;

  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
const keys = document.querySelectorAll(".key");
console.log("key", keys);

keys.forEach((key) =>
  key.addEventListener("webkitTransitionEnd", removeTransition)
);

window.addEventListener("keydown", playSound);
