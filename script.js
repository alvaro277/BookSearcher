// Click handler for search button
let input = document.getElementById("search-bar");

const captureSearchValue = () => {
  let value = input.value;
  return value;
};

// Filter books based on search input
const filterBooks = (string,array) => {
  let flattenedBooks = flattenObjectValuesIntoArray(books);
  console.log(flattenedBooks);
  let filteredBooks = flattenedBooks.filter( book => book.filter( b => b.includes(string)));
  console.log(filteredBooks);
  return filteredBooks;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (listOfBooks) => {
  let HTMLBooks = listOfBooks.map( book => structureBookAsHtml(book));
  return HTMLBooks;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  let value = captureSearchValue();
  let filteredBooks = filterBooks(value,books);
  structureBooksAsHtml(filteredBooks);
}

// Grab search button from the DOM
let searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
