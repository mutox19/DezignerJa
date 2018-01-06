Cart = {};

Cart.Items = new Mongo.Collection('cart-items');

Cart.Items.allow({
  insert: function(userId, doc) {
    return (userId && doc && userId === doc.userId) || (!userId && doc && doc.deviceId && !doc.userId);
  },
  update: function(userId, doc, fieldNames, modifier) {
    return (userId && doc && userId === doc.userId) || (doc && doc.deviceId && !doc.userId);
  },
  remove: function(userId, doc) {
    return (userId && doc && userId === doc.userId) || (doc && doc.deviceId && !doc.userId);
  },
  fetch: ['userId','deviceId']
});




if(Meteor.isServer){
	if( Meteor.settings.private.stripe){
		Stripe = StripeAPI(Meteor.settings.private.stripe);
		 var wrappedStripeChargeCreate = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges);
	}else{
		console.log('ERROR - stripe secret key not found in settings');
	}
}else{
	if(!Meteor.settings || !Meteor.settings.public || !Meteor.settings.public.stripe)
		console.log('ERROR - stripe public key not found in settings');
}

Meteor.methods({
	CartPayForItems:function(token, deviceId){
		this.unblock();
		var items, result;
		if(this.userId)
			items = Cart.Items.find({userId:this.userId});
		else
			items = Cart.Items.find({deviceId:deviceId});

		if(Meteor.isServer){
			var total = 0;
			items.forEach(function(item){
				total += item.price;
			});
			var result = wrappedStripeChargeCreate({
				card: token.id,
				currency: "USD",
				amount:Math.floor(total*100)
			});
		}

		items.forEach(function(item){
			Cart.Items.remove({_id:item._id});
		});

		return result;
	}
});
