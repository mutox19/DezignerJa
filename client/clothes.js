/*Template.clothes.helpers({
  clothes: function() {
    return Clothes.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 8
    });
  }
});*/



Template.clothes.helpers({
  clothes: function()
  {
    if(Session.get('clothestype') != null || Session.get('clothesprice') != null)
    {
      if(Session.get('clothestype') != null)
      {
        return Clothes.find({category: Session.get('clothestype')}, { sort: { createdAt: -1 }, limit: 8 });
      }
      else if(Session.get('clothesprice') != null)
      {
        return Clothes.find({price:{$lte: Session.get('clothesprice')}}, { sort: { createdAt: -1 }, limit: 8 });
      }

    }
    else
    {
      return Clothes.find({}, {
        sort: {
          createdAt: -1
        },
        limit: 8
      });
    }

  }
});



Template.clothes.events({
  'click #dress': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothesprice", undefined)
    Session.set("clothestype", 'Dress')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #blouse': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothesprice", undefined)
    Session.set("clothestype", 'Blouse')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #coats': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothesprice", undefined)
    Session.set("clothestype", 'Coats')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #shirts': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothesprice", undefined)
    Session.set("clothestype", 'Shirts')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #pants': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothesprice", undefined)
    Session.set("clothestype", 'Pants')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #shorts': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothesprice", undefined)
    Session.set("clothestype", 'Shorts')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under100': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothestype", undefined)
    Session.set("clothesprice", 100)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under300': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothestype", undefined)
    Session.set("clothesprice", 300)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under600': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothestype", undefined)
    Session.set("clothesprice", 600)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under1000': function(event)
  {
    //var test = this.createdBy;
    Session.set("clothestype", undefined)
    Session.set("clothesprice", 1000)
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
