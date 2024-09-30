// Initialize an array to store elements
let elementsArray = [];

// Function to add element to the array
function addElement() {
  const inputBox = document.getElementById("inputBox");
  const element = inputBox.value;
  
  if (element) {
    elementsArray.push(element);
    alert(`Added: ${element}`);
  } else {
    alert("Please enter a value.");
  }
  
  inputBox.value = ""; // Clear the input box
}

// Function to delete the last element from the array
function deleteLastElement() {
  if (elementsArray.length > 0) {
    const removedElement = elementsArray.pop();
    alert(`Deleted: ${removedElement}`);
  } else {
    alert("No elements to delete.");
  }
}

// Function to display the contents of the array
function displayElements() {
  const displayArea = document.getElementById("displayArea");
  displayArea.innerHTML = ""; // Clear the display area
  
  if (elementsArray.length > 0) {
    elementsArray.forEach((element, index) => {
      displayArea.innerHTML += `<p>${index + 1}. ${element}</p>`;
    });
  } else {
    displayArea.innerHTML = "<p>No elements to display.</p>";
  }
}