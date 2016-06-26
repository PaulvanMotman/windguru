// Storing username and password in variables.

var sendgrid_username = process.env.SENDGRID_USERNAME;
var sendgrid_password = process.env.SENDGRID_PASSWORD;

// You can fill in your email here. In a working app this could point to an array of all the emails linked to a certain surf spot!
var to                = ['example@example.com']

// Requiring sendgrid
var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);

// Setting up a new email.
var email      = new sendgrid.Email();

email.addTo(to);
email.setFrom(to);
email.setSubject('Good surf on its way!');
email.setText('Check out the waves on Wednesday!');
email.setHtml('<strong>Check out the waves on Wednesday!</strong>');
email.addHeader('X-Sent-Using', 'SendGrid-API');
email.addHeader('X-Transport', 'web');

// Data here could point to the windguru API.
email.addFile({path: './resources/waves.png', filename: 'waves.png'});

// Sending the mail.
sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});
