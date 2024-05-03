let books = [];

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editBook(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteBook(index));

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        bookList.appendChild(li);
    });
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        books.push({ title, author });
        renderBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    } else {
        alert('Please enter both title and author.');
    }
}

function editBook(index) {
    const title = prompt('Enter new title:');
    const author = prompt('Enter new author:');

    if (title && author) {
        books[index] = { title, author };
        renderBooks();
    } else {
        alert('Please enter both title and author.');
    }
}

function deleteBook(index) {
    const confirmDelete = confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
        books.splice(index, 1);
        renderBooks();
    }
}

// Initial rendering
renderBooks();
