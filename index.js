//Constructor for book class.
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Function that switches the boolean value of the read attribute.
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

//Constants
const titleValue = document.getElementById('bookTitle');
const authorValue = document.getElementById('bookAuthor');
const pagesValue = document.getElementById('pages');
const readValue = document.getElementById('read');
const container = document.querySelector('.library');
const newBtn = document.querySelector('.newBtn');
const exit = document.querySelector(".closeButton");
const form = document.getElementById("form");

//Declare array.
const myLibrary = [];

//Library count.
let index = 0;

//Add event listener for clicking the new book button.
newBtn.addEventListener('click', function (){
    document.querySelector(".formContainer").style.display = "flex";
});

//Add event listener to remove popup
exit.addEventListener("click", function(e){
    e.stopPropagation();
    document.querySelector(".formContainer").style.display = "none";
})

//Add event listener for form submit
form.addEventListener("submit", newBook);

//Function to prompt user for new info.
function newBook(e) {
    e.preventDefault();

    addBook = new Book(titleValue.value, authorValue.value, pages.value, readValue.checked)

    myLibrary.push(addBook);

    displayLibrary();

    index++;
}

// Function to Display one book on the webpage
function displayBook(book){
    //Constant for new div.
    const librarySpot = document.createElement('div');

    //Create read button.
    const readBtn = document.createElement("button");
 
    //Style the library spot
    librarySpot.classList.add(`${index}`)
    librarySpot.style.display = "flex";
    librarySpot.style.flexDirection = "column";
    librarySpot.style.backgroundColor = "#F8F9FA"
    librarySpot.style.borderRadius = "10px"
    librarySpot.style.boxShadow = "2px 2px 2px lightgrey"
 
    container.appendChild(librarySpot);

    //Create new text node
    let titleNode = document.createElement("p");
    titleNode.textContent = `${book.title}`
    librarySpot.append(titleNode);

    //Create new text node
    let authorNode = document.createElement("p");
    authorNode.textContent = `${book.author}`
    librarySpot.append(authorNode);

    //Create new text node
    let pagesNode = document.createElement("p");
    pagesNode.textContent = `${book.pages}`
    librarySpot.append(pagesNode);

    if(book.read == true) {
        readBtn.style.backgroundColor = "#98ff98"
        readBtn.textContent = "Read"
    }
    else{
        readBtn.style.backgroundColor = "#FFCCCB"
        readBtn.textContent = "Not read"
    }

    librarySpot.appendChild(readBtn);
    readBtn.value = index;

    //Add event listener for clicking the new book button.
    readBtn.addEventListener("click", toggleColor);
}

//function to display the entire library.
function displayLibrary () {
    //Constant for new div.
    const librarySpot = document.querySelector('.test');

    removeAllChildNodes(container);
    
    myLibrary.forEach(displayBook);
}

//Function to remove all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function toggleColor(){
    let position = this.value;

    myLibrary[position].toggleRead();

    if(myLibrary[position].read == true) {
        this.style.backgroundColor = "#98ff98";
        this.textContent = "Read"; 
    }
    else if (myLibrary[position].read == false){
        this.style.backgroundColor = "#FFCCCB";
        this.textContent = "Not read";     
    }
}

let test = new Book("test", "test", 100, false);