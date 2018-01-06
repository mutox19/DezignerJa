Template.contact.events({

  'click .btn-success': function(e)
    {
      e.preventDefault();
      /*$("#wrapper").toggleClass("toggled");*/
      var firstName = $('[name=firstN]').val();
      var lastName = $('[name=lastN]').val();
      var email = $('[name=email]').val();
      var subject = $('[name=subject]').val();
      var description = $('[name=message]').val();

      if(email != "" && subject != "" && description != "")
      {
        Meteor.call('sendEmail',firstName + " " + lastName,'dan_307@hotmail.com',email,subject,description);
        alert("Your Message has been sent, Thank You!");
        $('[name=firstN]').val("");
        $('[name=lastN]').val("");
        $('[name=email]').val("");
        $('[name=subject]').val("");
        $('[name=message]').val("");
      }
    }
});

sAlert.config(
{
  effect: '',
  position: 'bottom',
  timeout: 4000,
  html: false,
  onRouteClose: true,
  stack: true,
  offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
  beep: false
});
