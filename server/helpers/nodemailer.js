const nodemailer = require('nodemailer')

function sendMail(email, subject, message){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'desertfox.pet@gmail.com',
            pass: 'desertFox08' // naturally, replace both with your real credentials or an application-specific password
        }
    });
    const mailOptions = {
        from: 'desertfox.pet@gmail.com',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendMail