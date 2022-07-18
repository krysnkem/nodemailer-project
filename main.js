// import nodemailer module
const nodemailer = require('nodemailer');
// import the  dotenv module to load values in the .env file
const {config} = require('dotenv');
config()


 async function main(){
    
    // create a transporter having the credetials of the host mail
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            type: 'OAUTH2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    //mailOptions object that holds the data of the mail 
    let mailOptions = {
        to: "krysnkem@gmail.com",
        subject: "Testing Nodemailer project",
        text: "Just testing the nodemailder project", // plain text body
        html: "<b>Hi from the nodemailer project</b>" // html body
    }

    //using the transporter to send the mail and check for error
    await transporter.sendMail(mailOptions, (err, data)=>{
        if(err) console.log(`Error ${err}`);
        else console.log("Email sent sucessfully")
    })

        // console.log("Message sent: %s", info.messageId);
      
}


module.exports= main