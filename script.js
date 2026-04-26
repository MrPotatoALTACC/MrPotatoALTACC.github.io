const panels = document.querySelectorAll(".panel");
let index = 0;
let locked = true;
let scrollAccum = 0;

const SCROLL_THRESHOLD = 500; // tune this

document.body.classList.add("locked");

const showPanel = (i) => {
  panels.forEach(p => p.classList.remove("active"));
  panels[i].classList.add("active");
};

window.addEventListener("wheel", (e) => {
  if (!locked) return;

  scrollAccum += e.deltaY;

  if (scrollAccum > SCROLL_THRESHOLD) {
    if (index < panels.length - 1) {
      showPanel(++index);

      if (index === panels.length - 1) {
        locked = false;
        document.body.classList.remove("locked");
      }
    }
    scrollAccum = 0; // reset after trigger
  }
});