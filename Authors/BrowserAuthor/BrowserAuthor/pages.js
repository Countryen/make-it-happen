/*
* Save the page
*/
var page = {},
    buttonSave = document.querySelector("#savePage"),
    pageList = document.querySelector("div.listPages");

buttonSave.addEventListener("click", savePage);

function savePage() {
  page.id = document.querySelector("#pageId").value;
  page.text = document.querySelector("#pageText").value;
  page.option1 = document.querySelector("#option1Text").value;
  page.option2 = document.querySelector("#option2Text").value;
  page.target1 = document.querySelector("#target1Id").value;
  page.target2 = document.querySelector("#target2Id").value;
  
  var button = document.createElement("button");
  button.textContent = page.id;
  
  pageList.appendChild(button);
}