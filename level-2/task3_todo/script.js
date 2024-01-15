const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //Add cross button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //empty the input after adding task
  inputBox.value = "";
  saveData(); // when ever we add new item it call this function to store it lically
}

// deletion functionality
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//  To save items in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// Reload the saved items when we refresh or reload page
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
