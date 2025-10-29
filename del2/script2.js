const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");
const container = document.createElement("section");

box1.style.backgroundColor = "red";
box1.textContent = "Box 1";
box2.style.backgroundColor = "yellow";
box2.textContent = "Box 2";
box3.style.backgroundColor = "green";
box3.textContent = "Box 3";

// box1.addEventListener("mouseover", () => {
//   box1.style.backgroundColor = "green";
// });
// box1.addEventListener("mouseout", () => {
//   box1.style.backgroundColor = "red";
// });

// återanvändbar funktion
const boxHover = (box, color) => {
  box.style.backgroundColor = color;
};

box1.addEventListener("mouseout", () => boxHover(box1, "red"));
box1.addEventListener("mouseover", () => boxHover(box1, "yellow"));
box2.addEventListener("mouseover", () => boxHover(box2, "green"));
box2.addEventListener("mouseout", () => boxHover(box2, "yellow"));
box3.addEventListener("mouseover", () => boxHover(box3, "red"));
box3.addEventListener("mouseout", () => boxHover(box3, "green"));

document.body.appendChild(container);
container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);
