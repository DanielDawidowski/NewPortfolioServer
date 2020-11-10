const { sendEmailWithNodemailer } = require("../helpers/email");
 
exports.contactForm = (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
 
  const emailData = {
    from: email, // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
    to: process.env.GMAIL_USER, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
    subject: `Wiadomość od ${name}` ,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4>Wiadomość od ${name}</h4>
        <p>Imię: ${name}</p>
        <p>Email: ${email}</p>
        <p>Wiadomość: ${message}</p>
        <hr />
    `,
  };
 
  sendEmailWithNodemailer(req, res, emailData);
};


