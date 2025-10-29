const h2 = document.createElement("h2"); // deklarerar h2-element som variabel med namnet 'h2'

h2.textContent = "Min rubrik för dagen."; // variabelns textvärde = "text"
h2.style.color = "#1e3a8a"; // variabels style färg = 'färg'

document.body.appendChild(h2); // skapar element i html body.

//--

const whatWeather = document.createElement("p");
whatWeather.id = "p"; //Sätter ett Id på p elementet

whatWeather.textContent = "Beskriv vädret idag";
whatWeather.style.color = "#110d01ff";

document.body.appendChild(whatWeather);

// --

const div = document.createElement("div");

div.textContent = "Det här är en färgad ruta";
div.style.backgroundColor = "#10b981";

document.body.appendChild(div);

// --

const paragraph = document.getElementById("p"); // hittar element med id 'p' och sparar i variabeln paragraph

paragraph.textContent = "Ändrad text";

// --

const backgroundButton = document.createElement("button");
const addButton = document.createElement("button");
const removeButton = document.createElement("button");
const changeButton = document.createElement("button");

backgroundButton.textContent = "Byt bakgrund"; // text på knappen

// lägger till event på knappen som lyssnar till click (mus-klick)
backgroundButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0f2fe"; // ändrar färgen på body
});

addButton.textContent = "Lägg till stycke";

// event som gör ett p-element med text
addButton.addEventListener("click", () => {
  const p = document.createElement("p"); // deklarerar element till variabel
  p.textContent = "Jag sov några timmar i natt"; // ger variabeln 'p' ett text värde
  document.body.appendChild(p); // lägger till elementet i HTML
});

removeButton.textContent = "Ta bort senaste stycke";
removeButton.id = "remove"; // ger removeButton Id = 'remove'

const removeLastP = document.getElementById("remove"); // deklarerar id = 'remove' i variabel removeLastP

// event som tar bort sista p-elementet i HTML
removeButton.addEventListener("click", () => {
  const lastP = document.body.lastElementChild; // deklarerar lastP som lastChild (sista barnet)
  document.body.removeChild(lastP); // tar bort variabeln lastP, sista p-elementet.
});

changeButton.textContent = "Ändra Rubrik.";

// event som ändrar texten i h2
changeButton.addEventListener("click", () => {
  const newTitle = document.querySelector("h2"); // deklarerar ny variabel med första h2 elementet som hittas
  newTitle.textContent = "Ny rubrik"; // Ändrar texten i variabeln med elementet första h2
});

document.body.appendChild(backgroundButton); // skriver ut i HTML
document.body.appendChild(addButton);
document.body.appendChild(removeButton);
document.body.appendChild(changeButton);
