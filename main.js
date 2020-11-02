// form event listener
window.onload = function() {
    document.getElementById('email-form').addEventListener('submit', sendMail);
}

async function sendMail(event) {

    // emails body
    let emailBody = document.getElementById("email-body").value;

    // structure email
    let email = {
        title: 'Contact Page Submission',
        body: emailBody
    }
    console.log(emailBody);
    event.preventDefault();
    
    await fetch('http://localhost:1323/sendmail', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-type': 'application/json'
        }
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

