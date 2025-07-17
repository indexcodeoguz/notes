const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true"); //özel özellik ekelmek icin attribute//
  img.src = "images/delete.jpg";
  notesContainer.appendChild(inputBox).appendChild(img); // inputboxu notes containere ekle sonra inputboxa img yi ekle imgnin kaynağı img delete.jpg//
  saveData();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove(); //  eğer click hedefi tagNamesi eşitse IMG ye parent elemenitiyle birlikte sil//
    saveData();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", notesContainer.innerHTML);
}
function showData() {
  notesContainer.innerHTML = localStorage.getItem("data");
}
showData();
