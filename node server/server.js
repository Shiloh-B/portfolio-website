const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 1323;
const app = express();

app.use(cors());
app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contactpageshilohportfolio@gmail.com',
        pass: 'thisSomethingnew1!'
    }
});


// routes
app.post('/sendmail', function(req, res) {
    console.log(req.body);
    var mailOptions = {
        from: 'contactpageshilohportfolio@gmail.com',
        to: 'shilohballards@gmail.com',
        subject: req.body.title,
        text: req.body.body
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
    console.log(`Server listening at port: ${port}`);
});
