Cart.subscriptionHandles = {
	userOrders:Meteor.subscribe("Cart-userOrders")
};

Tracker.autorun(function(){
	if(!Session.equals('Cart-deviceId', undefined))
		Cart.subscriptionHandles.deviceOrders = Meteor.subscribe("Cart-deviceOrders", Session.get('Cart-deviceId'));
});

Tracker.autorun(function(){
	if(!Meteor.userId() && Session.equals('Cart-deviceId', undefined)){
		var deviceId = amplify.store("Cart-deviceId");
		if(!deviceId){
			deviceId = Random.id();
			amplify.store("Cart-deviceId", deviceId);
		}
		Session.set('Cart-deviceId', deviceId);
	}else if(Meteor.userId()){
		Cart.Items.find({
			userId:{$exists:false},
			deviceId: Session.get('Cart-deviceId')
		},{fields:{userId:1,deviceId:1}}).forEach(function(order){
			Cart.Items.update({
				_id:order._id
			},{
				$set:{userId:Meteor.userId()},
				$unset:{deviceId:1}
			},function(error){
				if(error)
					console.log(error);
			});
		});
		Session.set('Cart-deviceId', undefined);
	}
});

Session.setDefault('Cart-itemCount', 0);
Session.setDefault('Cart-itemTotal', 0);
Tracker.autorun(function(){
	var query = {};
	if(Meteor.userId())
		query.userId = Meteor.userId();
	else
		query.deviceId = Session.get('Cart-deviceId');

	var total = 0;
	var items = Cart.Items.find(query, {fields: {price: 1}});
	items.forEach(function(item){
		total += item.price;
	});

	Session.set('Cart-itemTotal', Math.floor(total*100)/100);
	Session.set('Cart-itemCount', items.count());
});

Template.CartAddItemButton.events({
	'click .add-item':function(event, template){
		event.preventDefault();

		//TODO - need to take an attribute hash and send in all values
		var item = this;
		if(item._id){
			item.productId = item._id;
			delete item._id;
		}
		if(!Meteor.userId()){
			item.deviceId = Session.get('Cart-deviceId');
			//maybe her add a session to get the not logged in user address
		}else{
			item.userId = Meteor.userId();
		}

		Cart.Items.insert(item);

	}
});

Template.CartSummary.helpers({
	'itemCount':function(){
		return Session.get('Cart-itemCount');
	},
	'itemTotal':function(){
		return Session.get('Cart-itemTotal');
	},
	'itemsInCart':function(){
		return !Session.equals('Cart-itemCount', 0);
	}
});


var StripeCheckoutHandler;

Template.CartPayNow.events({
	'click #pay-now':function(event, template){
		event.preventDefault();
		Session.set('userItems',Cart.Items.find({userId:Meteor.userId()}).fetch());
var customerOrder = Session.get('Cart-itemCount') + ' items ($' + Session.get("Cart-itemTotal") + ')' + Math.floor(Session.get("Cart-itemTotal") * 100);
	Session.set('customerOrder', customerOrder);
		StripeCheckoutHandler.open({
	      description: Session.get('Cart-itemCount') + ' items ($' + Session.get("Cart-itemTotal") + ')',
	      amount: Math.floor(Session.get("Cart-itemTotal") * 100)
	    });

	}
});

Template.CartPayNow.rendered = function(){
	StripeCheckoutHandler = StripeCheckout.configure({
	    key: Meteor.settings.public.stripe,
	    token: function(token) {
	      Meteor.call("CartPayForItems", token, Session.get('Cart-deviceId'), function(error, result) {
		      if (error) {
		        alert(JSON.stringify(error));
		      }else{
		      	alert("Payment Complete");
						var currentShopper = Cart.Items.find({userId:this.userId}).fetch();

						var userfirstName = Meteor.user().profile.firstName;
						var userAddress = Meteor.user().profile.address;
						var email = Meteor.user().emails[0].address;
						var itemOrdered = JSON.stringify(Session.get('userItems'));
						var newObj = JSON.parse(itemOrdered);


						var itemArr = new Array();
						$.each(Session.get('userItems'), function(key, value) {
								//console.log(key, value);
								itemArr.push(key,value);
							});
						/*for(var i=0;i<itemOrdered.length;i++){
							var obj = itemOrdered[i];
							console.log(obj);
							/*for(var key in obj){
								var attrName = key;
								var attrValue = obj[key];

							}
						}*/

						console.log(newObj.price +  " " + email +" " + Meteor.user().profile.firstName +" "+ Meteor.user().profile.address + " " + Session.get('customerOrder') +" "  + itemOrdered  );
						//var userfirstName = Meteor.user().profile.firstName;
						//Meteor.call('sendOrder',userfirstName,'dan_307@hotmail.com','sheena_325456@hotmail.com','New Customer Order', itemOrdered, userAddress, Session.get('customerOrder'));
						//call the send email method and send email to client with shopping details
		      }
		     });
	    }
	  });
};

/*
Router.route('/cart', function () {
  this.render('CartItems', {
    data: function () {
    	var query = {};
		if(Meteor.userId())
			query.userId = Meteor.userId();
		else
			query.deviceId = Session.get('Cart-deviceId');

		return {
    		items:Cart.Items.find(query),
    		hasItems:!Session.equals('Cart-itemCount', 0),
    		itemCount:Session.get('Cart-itemCount'),
			itemTotal:Session.get('Cart-itemTotal')
    	};
    }
  });
});*/

Template.CartItem.events({
	'click .remove':function(event, template){
		event.preventDefault();
		if(confirm("Are You Sure?"))
			Cart.Items.remove({_id:this._id});
	}
});
