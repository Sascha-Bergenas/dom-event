const items = document.querySelectorAll("li"); // li
const itemLista = document.getElementById("itemLista"); //ul
const button = document.getElementById("button"); // button

// vid dubbelklick ska valt item tas bort

// items.addEventListener("dblclick", () => {
//   items.remove("li");
// });

button.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = "Ny text";

  itemLista.appendChild(listItem);
});
