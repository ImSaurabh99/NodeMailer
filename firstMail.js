var nodeMailer = require('nodemailer')
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure: false,
    requireTLS: true,
    auth:{
        user:'SaurabhShukla9009@gmail.com',
        pass:'Iitjee2017'
    }
});
var mailOptions={
    from:'SaurabhShukla9009@gmail.com',
    to:'sandeepkannaujiya.123@gmail.com',
    subject:'Mail from node.js',
    text:'Finally learned to send the mail using node.js.....Deewar pot denge, Gaddha khod denge......Learnt to send fucking mail using node'
}
transport.sendMail(mailOptions, function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn("Email has been sent", info.response);
    }
})