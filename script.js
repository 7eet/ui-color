var myData = JSON.parse(colors);

var root = document.getElementById("root");
var grid = document.createElement("div");
grid.className="grid";

for (let colr of myData) {
  let hexCode = colr["hexCode"];

  let col = addColumn();

  let card = addCard(hexCode);
  let text = addText(hexCode);

  col.appendChild(card);
  col.appendChild(text);

  grid.appendChild(col);
}

root.appendChild(grid);


function addColumn() {
  const col = document.createElement("div");
  col.classList.add("grid-item");
  return col;
}

function addCard(color) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = `${color}`;
  return card;
}

function addText(color) {
  const div = document.createElement("div");
  div.className =  "color-text";

  const p = document.createElement("p");
  p.innerText = `${color}`;

  div.appendChild(p);
  return div;
}