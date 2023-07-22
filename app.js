// created by DeLordRoyal
// pls upvote

document.addEventListener("DOMContentLoaded", function(){
   
// var btns = document.querySelectorAll("#book-list .delete")

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;

//        li.parentNode.removeChild(li)
//     })
// })

// delete books
const list = document.querySelector("#book-list ul");

list.addEventListener("click", function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    };
});

// add books
const addForm =document.forms["add-book"];
addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    // console.log(value)
    
    // if value is not an empty string create the element
    if(value != ''){
        // create elemment
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBook = document.createElement('span');        
        
        //add class name
        bookName.className = 'name';
        deleteBook.className = 'delete'
        
        //append to dom
        li.appendChild(bookName);
        li.appendChild(deleteBook);
        list.appendChild(li);   
        
        // add content 
        deleteBook.textContent = 'delete';
        bookName.textContent = value;
        
        // Clear input Field
        value == '';
        }
        
    });

// hide books
const hideBox = document.querySelector('#hide')
    hideBox.addEventListener("change", function(e) {
    if(hideBox.checked){
        list.style.display='none';
    }else {
        list.style.display ='initial'
    };
    });

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
    const demo = document.querySelector('#demo')
    searchBar.addEventListener("keyup", function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
            demo.innerText = "";
        }else{
            book.style.display = 'none';
            demo.textContent = "No Result Found";
        };
    });
    });

// tabs content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll(".panel");
    tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            };
        });
    }
        });
    });

// created by DeLordRoyal