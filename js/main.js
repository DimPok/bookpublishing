const collapsibles = document.querySelectorAll(".headernavigator");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("headernavigator--expanded");
  })
);