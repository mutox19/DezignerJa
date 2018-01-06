Template.products.helpers({
  'userDetz': function()
  {
    return Meteor.users.find({_id: Meteor.userId()}).fetch();
  }
});


Template.products.onRendered(function() {

  var user = Meteor.users.find({_id: Meteor.userId()}).fetch();

  //$('[name=firstName]').val(user.profile.firstName);
    /*$('[name=message]').val("");
      $('[name=message]').val("");
        $('[name=message]').val("");
          $('[name=message]').val("");*/
  console.log(user);
});


Template.CartItems.events({
  'click #remove': function(){
    Cart.Items.remove({_id:this._id});
    console.log("clicked " + this._id );
  }
});


/*
Template.CartItems.events({
  'click .listingGet': function(event) {
    var test = this.createdBy;
    Session.set("test", test)

  }
});*/
