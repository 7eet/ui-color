var myData = JSON.parse(colors);

var root = document.getElementById("root");
var row = document.createElement("div");
row.className="row";

for (let colr of myData) {
  let hexCode = colr["hexCode"];

  let col = addColumn();

  let card = addCard(hexCode);
  let text = addText(hexCode);

  col.appendChild(card);
  col.appendChild(text);

  row.appendChild(col);
  // console.log(colr["hexCode"])
}

root.appendChild(row);


function addColumn() {
  const col = document.createElement("div");
  col.className = "block col";
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