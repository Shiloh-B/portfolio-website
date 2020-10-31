/*
function sendMail() {
    const xhttp = new XMLHttpRequest();
    let emailBody = document.getElementById("email-body").value;

    xhttp.onload = function() {
        console.log(xhttp.responseText);
    }
    xhttp.open("POST", "http://localhost:1323/", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`content=${emailBody}`);
}
*/

// form event listener
window.onload = function() {
    document.getElementById('email-form').addEventListener('submit', sendMail);
}

async function sendMail(event) {

    let emailBody = document.getElementById("email-body").value;
    console.log(emailBody);
    event.preventDefault();
    
    await fetch('http://localhost:1323/sendmail', {
        method: 'POST',
        body: emailBody
    }).then((response) => {
        return response.text();
    }).then((text) => {
        console.log(text);
    });


}

function testPost() {
    fetch('/test', {
        method: 'POST',
        body: 'test',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        }
    }).then((res) => {
        return res.text();
    }).then((text) => {
        console.log(text);
    });
}

