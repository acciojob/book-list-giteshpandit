//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new row
    const row = document.createElement('tr');

    // Insert cells
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
    `;

    // Append row to table
    document.getElementById('book-list').appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event delegation to handle delete button click
document.getElementById('book-list').addEventListener('click', removeBook);

function removeBook(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to remove this book?')) {
            const row = e.target.parentElement.parentElement;
            document.getElementById('book-list').removeChild(row);
        }
    }
}

