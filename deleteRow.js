function deleteRow(button) {
    // Get the row containing the button
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}