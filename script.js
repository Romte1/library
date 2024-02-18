const myLibrary = [];
const newBook = document.querySelector(".addBook");
const bookAdder = document.querySelector('.bookAdder');
const content = document.querySelector('.content');


newBook.addEventListener('click', () =>{

    //this verifies if the form is already showing in the page so we avoid creating duplicated forms!
    if (document.querySelector('.bookForm')) {
        return
    }

    let div = document.createElement('div');
    div.className = 'bookForm';

    let title = document.createElement('p');
    title.textContent = 'Add new book!';

    //BOOK TITLE FIELD
    let lblBookTitle = document.createElement('label');
    lblBookTitle.textContent = 'Title';
    lblBookTitle.setAttribute('for', 'name');

    let iptBookTitle = document.createElement('input');
    iptBookTitle.setAttribute('id', 'name');
    iptBookTitle.setAttribute('class','name');


    //BOOK AUTHOR FIELD
    let lblBookAuthor = document.createElement('label');
    lblBookAuthor.textContent = 'Author';
    lblBookAuthor.setAttribute('for', 'author');

    let iptBookAuthor = document.createElement('input');
    iptBookAuthor.setAttribute('id', 'author');
    iptBookAuthor.setAttribute('class','author');


    //BOOK PAGES FIELD
    let lblBookPages = document.createElement('label');
    lblBookPages.textContent = 'Pages';
    lblBookPages.setAttribute('for', 'pages');

    let iptBookPages = document.createElement('input');
    iptBookPages.setAttribute('type', 'number');
    iptBookPages.setAttribute('id', 'pages');
    iptBookPages.setAttribute('class','pages');


    //BOOK READ OR NOT READ FIELD
    let lblBookStatus = document.createElement('label');
    lblBookStatus.textContent = 'Read?';
    lblBookStatus.setAttribute('for', 'status');

    let iptBookStatus = document.createElement('select');
    iptBookStatus.setAttribute('id', 'status');
    iptBookStatus.setAttribute('class','status');

    let optionYes = document.createElement('option');
    optionYes.text = 'Yes';
    let optionNo = document.createElement('option');
    optionNo.text = 'No';

    iptBookStatus.add(optionYes);
    iptBookStatus.add(optionNo);
    optionNo.selected = true;


    //REQ VALIDATION SPAN (ONLY SHOWS WHEN FIELDS AREN'T FILLED)
    let reqSpan = document.createElement('span');


    //BUTTON TO FINALLY ADD THE BOOK TO THE PAGE
    let btnAddBook = document.createElement('button');
    btnAddBook.setAttribute('class', 'formAddBook')
    btnAddBook.textContent = "Add this book!";


    //ADDING ALL THE RECENT CREATED FIELDS AND BUTTONS TO THE PAGE
    div.appendChild(title);

    div.appendChild(lblBookTitle);
    div.appendChild(iptBookTitle);

    div.appendChild(lblBookAuthor);
    div.appendChild(iptBookAuthor);

    div.appendChild(lblBookPages);
    div.appendChild(iptBookPages);

    div.appendChild(lblBookStatus);
    div.appendChild(iptBookStatus);

    div.appendChild(reqSpan);

    div.appendChild(btnAddBook);

    bookAdder.appendChild(div);

    btnAddBook.addEventListener('click', () => {
        if ( iptBookTitle.value === '' || iptBookAuthor.value === '' || iptBookPages.value === '') {
            reqSpan.textContent = '*Make sure to fill all fields!';
            return
        }

        let title = iptBookTitle.value;
        let author = iptBookAuthor.value;
        let pages = iptBookPages.value;
        let status = iptBookStatus.value;

        div.remove();

        var newBook = new Book(title, author, pages, status);
        myLibrary.push(newBook);

        updateBooks(myLibrary.length-1);

        console.table(myLibrary);


    });

})

//THIS IS THE OBJECT CONSTRUCTOR
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//HERE IS WHERE WE UPDATE THE DOM TO SHOW THE NEW BOOK THAT JUST GOT ADDED TO THE LIBRARY

function updateBooks(elementNumber) {
    // for (let i = 0; i < myLibrary.length; i++) {
    // }
        let cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card');

        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        p1.textContent = `Title: ${myLibrary[elementNumber].title}`;
        p2.textContent = `Author: ${myLibrary[elementNumber].author}`;
        p3.textContent = `Pages: ${myLibrary[elementNumber].pages}`;
        p4.textContent = `Read?: ${myLibrary[elementNumber].status}`;
        
        cardDiv.appendChild(p1);
        cardDiv.appendChild(p2);
        cardDiv.appendChild(p3);
        cardDiv.appendChild(p4);
        

        content.appendChild(cardDiv);
        



        //alert (myLibrary[i].title);
        
    
}








// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }