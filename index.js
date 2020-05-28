const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.port || 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./public'));
app.post('/post', async (req, res) => {
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  let status;
  if (req.body.email == '' || req.body.name == '' || req.body.email == '') {
    status = 'Please fill out all field in the form';
  } else if (validateEmail(req.body.email) == false) {
    status = 'your email is invalid';
  } else {
    //send confirmation email to myself and client's email

    let autoReply = {
      from: process.env.email,
      to: req.body.email,
      subject: 'DO NOT REPLY - You just sent a message on nguyennhat.work',
      //text: 'This is an automated email, do not reply to this email.',
      html: `<div><p> Hello ${req.body.name},
      I just received the following message from you </p>
      <cite>${req.body.message}</cite>
      <p>I will reply to you as soon as possible. Thank you for your patience. If this is urgent matter, call me at +84 (902) 239-717.</p><br/><p>Nguyễn Hữu Minh Nhật</p></div>`,
    };

    let notifyMe = {
      from: process.env.email,
      to: process.env.email,
      subject: `A NEW MESSAGE FROM ${req.body.name} - ${req.body.email}`,
      html: `<div><cite>${req.body.message}</cite></div>`,
    };
    function mailRes(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }
    transporter.sendMail(autoReply, mailRes);
    transporter.sendMail(notifyMe, mailRes);

    status = 'ok';
  }
  res.json({ status: status });
});

app.listen(PORT, () => {
  console.log(`The portfolio-app is starting on port ${PORT}`);
});
