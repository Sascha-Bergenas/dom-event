const box = document.getElementById("box");
let x = 0,
  y = 0;

box.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") x += 10; // börjar på x = 0, + 10, och fortsätter sedan lägga på + 10 vid varje keydown
  if (event.key === "ArrowLeft") x -= 10;
  if (event.key === "ArrowUp") y -= 10;
  if (event.key === "ArrowDown") y += 10;

  box.style.transform = `translate(${x}px, ${y}px)`;
});
