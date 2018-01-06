import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish("cart-items", function()
  {
    return Cart.Items.find({});
  });
  
  Meteor.publish("allUsers", function()
  {
    return Meteor.users.find({});
  });

Meteor.publish("sandal", function()
{
  return Sandals.find({});
});

Meteor.publish("clothes", function()
{
  return Clothes.find({});
});

Meteor.publish("handbags", function()
{
  return Handbags.find({});
});

Meteor.publish("jewelry", function()
{
  return Jewelry.find({});
});
Meteor.publish("products", function()
{
  return Products.find({});
});


Meteor.publish("Cart-userOrders", function () {
	check(arguments, [Match.Any]);
	if(this.userId){
		return [
			Cart.Items.find({userId:this.userId})
		];
	}
	this.ready();
});

Meteor.publish("Cart-deviceOrders", function(deviceId){
	check(arguments, [Match.Any]);
	if(deviceId){
		return [
			Cart.Items.find({deviceId:deviceId})
		];
	}
	this.ready();
});

});
