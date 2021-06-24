const express = require('express')
const path = require('path')
const sendemail = require('./utils/sendEmail')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('contact')
})

app.get('/sent', (req, res) => {
    res.render('sent')
})

app.post('/sendemail', (req, res) => {
    const { name, surname, email } = req.body

    const from = 'davidtoro65@hotmail.com'
    const to = 'leo63321616@gmail.com'
    const subject = "New Contact Request"

    const output = `
        <p> you have a new contact request </p>
        <h3> contact details </h3>
        <ul>
            <li> Name :${name} </li>
            <li> Surname :${surname} </li>
            <li> Email :${email} </li>
        </ul>
    `
    sendemail(to, from, subject, output)
    res.redirect("/sent");


})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))