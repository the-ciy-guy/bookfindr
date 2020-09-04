const input = document.getElementById('book_input');
input.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase(); // get input value
    // console.log(searchString);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}`)
    .then(book => book.json())
    .then(response => {
        let bookArray = response.items;
        showBooks(bookArray);
    })
    .catch(err => console.log(err));
});

function showBooks(bookArray) 
{
    const bookList = document.querySelector('.book_list');
    
    let output = ``;
    bookArray.forEach((items) => {
            
        output += `<li class=grids><a href="${items.volumeInfo.previewLink}">
        <img class=grid_one src="${items.volumeInfo.imageLinks.thumbnail}">
        <div class="grid_two">
        <h1>${items.volumeInfo.title}</h1>
        <p>${items.volumeInfo.authors}</p>
        </div>
        </a>
        </li>`;
    });
    bookList.innerHTML = output;
}
