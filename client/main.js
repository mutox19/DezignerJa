import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './homepage.html';

Template.navbar.events(
{
  'click .logout': function(event)
  {
    event.preventDefault();

    Meteor.logout();
    Router.go('/');
  }
});

Template.navbar.helpers({
  'userLogged': function()
  {
    var user = Meteor.userId();

      console.log(user);
      if(user)
      {
        return true;
      }
      else
      {
          return false;
      }
  }
});



Template.CartItems.helpers({
  'cartTable': function()
  {
    return Cart.Items.find({});
  }
});

/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
