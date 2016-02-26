//Create a new list
function hiddenItems() {

  document.getElementById("itemTextField").style.visibility = "hidden";
}

function createNewList() {
 var listName = document.createList.listInput.value;
 alert(listName + " List Has Been Created");
 document.getElementById("itemTextField").style.visibility = "visible";
}

//Add items to list
function addItem(item) {



  alert(item + " Just Added");
}

//Remove items from list
function removeItem(item) {
  alert(item + " Has Been Removed");
}

//Update the quantity from list
function updateQuantity(item) {
  alert(item + " Quantity Has Been Updated");
}

//print the list
function printItems() {
  alert("Items Printed");
}


