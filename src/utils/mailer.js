const nodemailer = require('nodemailer')
const config = require('../../config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'ariagt191000@gmail.com',
        pass: config.api.emailPass
    }
})

module.exports = transporter
