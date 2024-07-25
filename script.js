const submit = document.getElementById('submit');

submit.addEventListener('click', showdetails);

function showdetails() {
    
    
    // Fetch the values from the input fields
    const client = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (client === "" || email === "" || message === "") {
        alert('Please fill in all fields.');
    } else {
        console.log('Name:', client);
        console.log('Email:', email);
        console.log('Message:', message);
    }
    
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
