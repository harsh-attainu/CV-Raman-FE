//getElementById - returns the node by its id

// var banner = document.getElementById('page-banner');
// console.log(banner);

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

// h2.addEventListener('click', function(e) { 
//     console.log('hi'); 
//     console.log(e.target);
// })


// var form = document.querySelector('#add-book');


// form.addEventListener('submit', async function(event) { 
//     console.log('form was submitted'); 
//     event.preventDefault();
//     let book_list = document.querySelector('#book-list ul');
//     let new_book_element = document.querySelector('#new-book-name');
//     let new_book_name = new_book_element.value;
//     book_list.innerHTML += `<li>
//     <span class="name">${new_book_name}</span>
//     <span class="delete">delete</span>
//   </li>`;
//   new_book_element.value='';
// });


// console.log("page was refreshed");