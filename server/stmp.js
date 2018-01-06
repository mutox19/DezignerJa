import { Email } from 'meteor/email'

//process.env.MAIL_URL = "smtp://postmaster@sandboxf5ad9f04e9ed4ecb8cb4af4f81a43216.mailgun.org:93b0d5cdc81dcbaa5129cd7e502690a2@smtp.mailgun.org:587";
process.env.MAIL_URL = 'smtp://DezignChicJa:password12@smtp.sendgrid.net:587';

Meteor.methods({
  'sendEmail': function (firstName, to, from, subject, text) {
    check([firstName, to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //console.log(to + from + subject);
    Email.send({
      firstName: firstName,
      to: to,
      from: from,
      subject: subject,
      html: text + ' Sent From ' + firstName
    });
  },

  'sendOrder': function (firstName, to, from, subject, text, address, itemCountOrder ) {
    check([firstName, to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //console.log(to + from + subject);
    Email.send({
      firstName: firstName,
      to: to,
      from: from,
      subject: subject,
      address: address,
      itemCountOrder: itemCountOrder,
      html: 'Customer Address: ' + address + '<br>' + 'Customer Orders: ' + text + '<br>' + 'total orders: ' + itemCountOrder
    });
  }

});


//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
