//Create a new list
var i = 0;
function createNewList() {
 var listName = document.createList.listInput.value;
 i++;
var listCreated = '<div id="item' + i + '"><input type="checkbox" />' + listName + '</div>';
document.getElementById("createNewList").innerHTML += listCreated;

 alert(listName + " List Has Been Created");
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


