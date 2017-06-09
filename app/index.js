require('dotenv').config()

const pretty = require('prettyjson'),
  helper = require('./helpers')

const express = require('express'),
  app = express()

const bodyParser = require('body-parser'),
  cors = require('cors')


app.listen(process.env.LISTEN_PORT || 3001)

app.use(cors())
app.use(bodyParser.json())

app.post('/send-email', async(req,res) => {
  let schedule = req.body.schedule

  let email_text = `First Name: ${schedule.first_name} \n
Last Name: ${schedule.last_name} \n
Email: ${schedule.email} \n
Phone: ${schedule.phone} \n
Insurance Type: ${schedule.insurance_type} \n
Message: ${schedule.message} \n
`

  helper.mail(process.env.EMAIL_TO, process.env.EMAIL_FROM, process.env.EMAIL_SUBJECT, email_text)
    .then( response => {
      res.send( email_text )
    })
    .catch( err => {
      console.log(err)
      res.statusCode(500)
    })

})
