const newBook = document.querySelector(".addBook");
const bookAdder = document.querySelector('.bookAdder');


newBook.addEventListener('click', () =>{

    if (document.querySelector('.bookForm')) {
        return
    }

    let div = document.createElement('div');
    div.className = 'bookForm';

    let title = document.createElement('p');
    title.textContent = 'Add new book!';


    let lblBookTitle = document.createElement('label');
    lblBookTitle.textContent = 'Title';
    lblBookTitle.setAttribute('for', 'name');

    let iptBookTitle = document.createElement('input');
    iptBookTitle.setAttribute('id', 'name');
    iptBookTitle.setAttribute('class','name');


    let lblBookAuthor = document.createElement('label');
    lblBookAuthor.textContent = 'Author';
    lblBookAuthor.setAttribute('for', 'author');

    let iptBookAuthor = document.createElement('input');
    iptBookAuthor.setAttribute('id', 'author');
    iptBookAuthor.setAttribute('class','author');


    let lblBookPages = document.createElement('label');
    lblBookPages.textContent = 'Pages';
    lblBookPages.setAttribute('for', 'pages');

    let iptBookPages = document.createElement('input');
    iptBookPages.setAttribute('id', 'pages');
    iptBookPages.setAttribute('class','pages');


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

    let btnAddBook = document.createElement('button');
    btnAddBook.setAttribute('class', 'formAddBook')
    btnAddBook.textContent = "Add this book!";

    div.appendChild(title);

    div.appendChild(lblBookTitle);
    div.appendChild(iptBookTitle);

    div.appendChild(lblBookAuthor);
    div.appendChild(iptBookAuthor);

    div.appendChild(lblBookPages);
    div.appendChild(iptBookPages);

    div.appendChild(lblBookStatus);
    div.appendChild(iptBookStatus);

    div.appendChild(btnAddBook);

    bookAdder.appendChild(div);

    btnAddBook.addEventListener('click', () => {
        div.remove();
    });

})







// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }