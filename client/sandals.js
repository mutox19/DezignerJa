
/*Template.sandals.helpers({
  'sandals': function()
  {
      return Sandals.find({category: 'receiving'});
  }
});
*/



Template.sandals.helpers({
  sandals: function()
  {
    if(Session.get('shoetype') != null || Session.get('shoeprice') != null)
    {
      if(Session.get('shoetype') != null)
      {
        return Sandals.find({category: Session.get('shoetype')}, { sort: { createdAt: -1 }, limit: 8 });
      }
      else if(Session.get('shoeprice') != null)
      {
        return Sandals.find({price:{$lte: Session.get('shoeprice')}}, { sort: { createdAt: -1 }, limit: 8 });
      }

    }
    else
    {
      return Sandals.find({}, {
        sort: {
          createdAt: -1
        },
        limit: 8
      });
    }

  }
});


Template.sandals.events({
  'click #heels': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoetype", 'Heels')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #sandalslink': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoeprice", undefined)
    Session.set("shoetype", 'Sandals')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #slippers': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoeprice", undefined)
    Session.set("shoetype", 'Slippers')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #boots': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoeprice", undefined)
    Session.set("shoetype", 'Boots')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under100': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoetype", undefined)
    Session.set("shoeprice", 100)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under300': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoetype", undefined)
    Session.set("shoeprice", 300)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under600': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoetype", undefined)
    Session.set("shoeprice", 600)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under1000': function(event)
  {
    //var test = this.createdBy;
    Session.set("shoetype", undefined)
    Session.set("shoeprice", 1000)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #all': function(event)
  {

      Object.keys(Session.keys).forEach(function(key)
      {
        Session.set(key, undefined);
      });
      Session.keys = {} // remove session keys

  },
  'click .btn-success': function (event)
  {
     Router.go('/login');
  }


});
