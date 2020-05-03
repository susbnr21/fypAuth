// Email Verification
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'susbhps475@gmail.com',
           pass: 'justdoit475'
       }
   });
   const mailOptions = {
    from: 'susbhps475@gmail.com', // sender address
    to: 'susbh99360@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });