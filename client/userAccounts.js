Template.userRegister.events({
    'submit form': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var firstName = $('[name=firstName]').val();
        var lastName = $('[name=lastName]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var address = $('[name=address]').val();
        Accounts.createUser({
         username: username,
         email: email,
         password: password,
         profile: {
          type: 'admin',
          firstName: firstName,
          lastName: lastName,
          address: address
         }
       }, function(error){
          if(error){
              sAlert.error(error.reason);
          } else {
            Router.go("/"); // Redirect user if registration succeeds
          }
       });
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

Template.userLogin.events(
{
  'click .btn-success': function(event)
  {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error)
    {
      if (error)
      {
        sAlert.error(error.reason);
      }
      else
      {
        Router.go("/"); // Redirect user if registration succeeds
      }
    });
  }
});
