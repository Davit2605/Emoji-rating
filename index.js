const emojisEl = document.querySelectorAll(".far");
const starsEl = document.querySelectorAll(".fa-star");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

selectStar(0);
starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    selectStar(index);
  });
});

function selectStar(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });
  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
