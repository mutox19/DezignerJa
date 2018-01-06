Router.route('/', {
  waitOn: function() {
  //return Meteor.subscribe('soccerres');
},
  action: function() {
    this.render('homepage');
  },
  onAfterAction: function() {
    document.title = 'Home - Dezign Chic JA';
  }
});

//about routes
Router.route('/about', {
  waitOn: function() {
  //return Meteor.subscribe('soccerres');
},
  action: function() {
    this.render('about');
  },
  onAfterAction: function() {
    document.title = 'About Us - Dezign Chic JA';
  }
});


//Route for user login page
Router.route('/login', {
  waitOn: function() {
  //return Meteor.subscribe('soccerres');
},
  action: function() {
    this.render('userLogin');
  },
  onAfterAction: function() {
    document.title = 'Login - Dezign Chic JA';
  }
});
//Route for user register page
Router.route('/register', {
  waitOn: function() {
    //return Meteor.subscribe('soccerres');
},
  action: function() {
    this.render('userRegister');
  },
  onAfterAction: function() {
    document.title = 'Register User Account - Dezign Chic JA';
  }
});

Router.route('/contact', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('contact');
  },
  onAfterAction: function() {
    document.title = 'Contact Us - Dezign Chic JA';
  }
});


Router.route('/sandals', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('sandals');
  },
  onAfterAction: function() {
    document.title = 'Sandals - Dezign Chic JA';
  }
});

Router.route('/jewelry', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('jewelry');
  },
  onAfterAction: function() {
    document.title = 'jewelry - Dezign Chic JA';
  }
});

Router.route('/handbags', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('handbags');
  },
  onAfterAction: function() {
    document.title = 'Handbags - Dezign Chic JA';
  }
});


Router.route('/clothes', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('clothes');
  },
  onAfterAction: function() {
    document.title = 'Handbags - Dezign Chic JA';
  }
});


Router.route('/checkout', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('products');
  },
  onAfterAction: function() {
    document.title = 'Check Out - Dezign Chic JA';
  }
});


Router.route('/profile', {
  waitOn: function() {
    //Meteor.subscribe('favorites');
  },
  action: function() {
    this.render('profile');
  },
  onAfterAction: function() {
    document.title = 'Your Profile - Dezign Chic JA';
  }
});

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
});

/*
Router.route('/cart', {
  waitOn: function() {
    //Meteor.subscribe('products');
  },
  action: function() {
    this.render('cart');
  },
  onAfterAction: function() {
    document.title = 'Cart - Dezign Chic JA';
  }
});*/
