
// TODO: Use pointer events
// TODO: Add dynamic box-shadow based on cursor position
// TODO: Add config pane to disable glow effects
// TODO: Add parallax effect background

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotationFactor = 10;
    const rotateX = (y - centerY) / rotationFactor;
    const rotateY = (centerX - x) / rotationFactor;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
  });

  card.addEventListener("mouseleave", (e) => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
});