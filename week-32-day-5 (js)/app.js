console.log("page was refreshed");


//getElementById - returns the node by its id

var banner = document.getElementById('page-banner');
console.log(banner);

// var elements = document.getElementsByClassName('title') //returns a html collection
// console.log(elements);

// console.log(Array.isArray(elements));
// console.log(Array.isArray(Array.from(elements)));

// Array.from(elements).forEach(function(el) {
//     console.log(el)
// });

// for(let i=0;i<elements.length;i++) {
//     console.log(elements[i]);
// }

// var list_items = document.getElementsByTagName('li'); //returns a html collection

// Array.from(list_items).forEach(function(el) {
//     console.log(el);
// });

// let wrapper = document.querySelector('#page-banner');
// console.log(wrapper);

// let first_book = document.querySelector('#book-list li'); //Returns only 1 element/node
// console.log(first_book);

// let books = document.querySelectorAll('#book-list li'); //Returns all li nodes inside book-list
// console.log(books);

// let books_names = document.querySelectorAll('#book-list li .name'); //Returns a node list

/*
# is for ID as in getElementById
li is for the tag -> getElemensByTagName
. is for class names
*/

// books_names.forEach(function(el) {
//     console.log(el.textContent);
// });

// books_names.forEach(function(el) {
//     console.log(el.innerHTML);
//     el.innerHTML += ' <strong>(book title 1)</strong>';
//     // el.innerHTML = el.innerHTML + ' (book title 2)'
// });

// const p = document.createElement('p');
// p.innerHTML='I\'m a <strong>newly</strong> added HTML element';
// p.id="new-id";
// p.className='title';


// var book_list = document.getElementById('book-list');
// book_list.appendChild(p);

// var h2 = document.querySelector('#book-list h2');

// h2.addEventListener('click', function(event) { 
//     console.log('hi'); 
//     console.log(event);
// })

// var alinkelement = document.getElementById('a-link');
// console.log(alinkelement);

// alinkelement.addEventListener('click', function(event) {
//     console.log("someone clicked the zebra link");
//     event.preventDefault();
//     console.log("no zebras for you");

// })


var form = document.getElementById('add-book');

form.addEventListener('submit', function(event) { 
    console.log('submit event fired'); 
    event.preventDefault();
    let book_list = document.querySelector('#book-list ul'); // ul
    let new_book_element = document.querySelector('#new-book-name');
    let new_book_name = new_book_element.value;

//     book_list.innerHTML =  book_list.innerHTML + `<li>
//     <span class="name">${new_book_name}</span>
//     <span class="delete">delete</span>
//   </li>`;

    //create elements
    const li = document.createElement('li'); // <li></li>
    const name_span = document.createElement('span');
    const delete_span = document.createElement('span');


    //add text content
    name_span.textContent=new_book_name;
    delete_span.textContent='delete';

    //add class name
    // name_span.classList.add('name');
    name_span.className='name';
    delete_span.className='delete';


    //append it to the dom
    li.appendChild(name_span);
    li.appendChild(delete_span);
    book_list.appendChild(li);

    new_book_element.value='';
    console.log('book added successfully'); 
});


// const list_items = document.querySelectorAll('#book-list ul li .delete');

// Array.from(list_items).forEach(function(delete_span) {
//     delete_span.addEventListener('click', function(event) {
//         console.log('delete button was clicked');
//         console.log(event.target);
//         btn_that_was_clicked = event.target;
//         li = btn_that_was_clicked.parentElement;
//         console.log('li', li)
//         li_parent = li.parentElement;
//         console.log('li_parent', li_parent)
//         li_parent.removeChild(li);
//     });
// })

const list = document.querySelector('#book-list ul');

//delete the book
list.addEventListener('click', function(event) {
    if(event.target.className=='delete') {
        const li = event.target.parentElement;
        list.removeChild(li);
    }
});


//searching the books
const search_input = document.querySelector('#search-books input');

search_input.addEventListener('keyup', function(event) {
    console.log('input was changed');
    const search_term = search_input.value.toLowerCase();
    const books = document.querySelectorAll('#book-list ul li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent.toLowerCase();
        if(title.includes(search_term)) {
            book.classList.remove('hidden');
        } else {
            book.classList.add('hidden');
        }
    });
})