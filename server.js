const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 1323;
const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contactpageshilohportfolio@gmail.com',
        pass: 'thisSomethingnew1!'
    }
});

app.post('/sendmail', function(req, res) {
    console.log(req.body);
    var mailOptions = {
        from: 'contactpageshilohportfolio@gamil.com',
        to: 'shilohballards@gmail.com',
        subject: 'Contact Page Submission',
        text: req.body
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send("POST Successful");
});

app.post('/test', function(req, res) {
    console.log(req.body);
    res.send('Test Successful');
});

// starting server
app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});
