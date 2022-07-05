var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manishamahale1720@gmail.com',
    pass: 'Vaibhav@17',
  },
})

var mailOptions = {
  from: 'manishamahale1720@gmail.com',
  to: 'manishamahale177@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
})
