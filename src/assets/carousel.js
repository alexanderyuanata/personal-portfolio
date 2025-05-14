const carousel = document.getElementById("certificate-container");

window.onmousedown = e => {
  if (carousel.contains(e.target)){
    console.log("User pressed on carousel");
    carousel.dataset.mouseDown = e.clientX;
  }
}

window.onmousemove = e => {
  if (carousel.dataset.mouseDown === "0") return;

  const mouseMovement = parseFloat(carousel.dataset.mouseDown) - e.clientX;
  carousel.scrollLeft += mouseMovement;

  carousel.dataset.mouseDown = e.clientX;
};

window.onmouseup = () => {
  carousel.dataset.mouseDown = "0";
  carousel.dataset.carouselProgress = carousel.dataset.progress;
}