document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.15}s`;
  });
});
