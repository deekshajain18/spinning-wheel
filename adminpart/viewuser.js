function deleteUser(button) {
    // Assuming the user row is the parent element of the button
    var userRow = button.parentElement.parentElement;
    // Remove the user row from the table
    userRow.remove();
    // You can also add additional logic here to send an HTTP request to your backend to delete the user from the database
}

