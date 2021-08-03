const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express()

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "metellusserge@gmail.com",
      pass: "fweaaswag305",
    },
});
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


router.post('/send', async (req, res, next) => {
    console.log(req.body)
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: email,
    to: 'metellusserge@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  }

  contactEmail.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5000)