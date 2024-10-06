// Array of top ten books
let books = [
    "Harry Potter",
    "Lord Of The Rings",
    "The Witcher Series",
    "Enders Game",
    "Ready Player One",
    "Dark Matter",
    "Hobbit",
    "For the win",
    "The Cradle",
    "Leviathan Wakes"
];

// Function to display books in ascending order
function topToBottom() {
    let sortedBooks = [...books].sort();
    displayBooks(sortedBooks);
}

// Function to display books in descending order
function bottomToTop() {
    let sortedBooks = [...books].sort().reverse();
    displayBooks(sortedBooks);
}

// Utility function to display the books in the original order
function displayOriginalOrder() {
    displayBooks(books);
}

// Utility function to update HTML with sorted books
function displayBooks(sortedBooks) {
    const bookListElement = document.getElementById('bookList');
    bookListElement.innerHTML = sortedBooks.map(book => `<li>${book}</li>`).join('');
}

// Initially display books in original order
window.onload = () => {
  displayOriginalOrder();
}