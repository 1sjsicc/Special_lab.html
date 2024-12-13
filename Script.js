function showMessage() {
    const messageDiv = document.getElementById('message');
    // Toggle the message visibility when the card is clicked
    if (messageDiv.style.display === "none" || messageDiv.style.display === "") {
        messageDiv.style.display = "block";
    } else {
        messageDiv.style.display = "none";
    }
}

