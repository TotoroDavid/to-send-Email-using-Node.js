const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(
    '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'
)

const msg = {
    to: 'leo63321616@gmail.com',
    from: 'davidtoro65@hotmail.com',
    subject: 'testing node email service',
    text: 'this is awesome email sent from node app'
}

sgMail.send(msg, function(err, info) {
    if (err) {
        console.log('email not sent')
    } else {
        console.log('email sent success')
    }
})