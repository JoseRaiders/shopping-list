// select the elements
// cache them in a variable so document.XXX
// doesn't have to be repeated each time
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// function declarations - doesn't run until an action has been taken
function inputLength() {
  return input.value.length;
}

function createListElement() {
  let text = input.value;
  let checkbox = document.createElement("li");
  checkbox.innerHTML =
    "<input type='checkbox'>" + "<label>" + text + "</label>";
  ul.appendChild(checkbox);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// event.which is enter/return keydown
function addListAfterKeydown(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

// if these actions happen, then run functions
button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);
