var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

module.exports = {
  mail: function (to, from, subject, text) {

    let request =  sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [
              {
                email: to
              }
            ],
            subject: subject
          }
        ],
        from: {
          email: from
        },
        content: [
          {
            type: 'text/plain',
            value: text
          }
        ]
      }
    });

    return sg.API(request)
  }
}
