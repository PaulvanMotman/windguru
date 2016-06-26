var sendgrid_username = process.env.SENDGRID_USERNAME;
var sendgrid_password = process.env.SENDGRID_PASSWORD;
var to                = ['example@example.com']


var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
var email      = new sendgrid.Email();

email.addTo(to);
email.setFrom(to);
email.setSubject('Good surf on its way!');
email.setText('Check out the waves on Wednesday!');
email.setHtml('<strong>Check out the waves on Wednesday!</strong>');
email.addHeader('X-Sent-Using', 'SendGrid-API');
email.addHeader('X-Transport', 'web');
email.addFile({path: './resources/waves.png', filename: 'waves.png'});

sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});
