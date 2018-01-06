/*Template.jewelry.helpers({
  jewelry: function() {
    return Jewelry.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 8
    });
  }
});
*/


Template.jewelry.helpers({
  jewelry: function()
  {
    if(Session.get('jewelrytype') != null || Session.get('jewelryprice') != null)
    {
      if(Session.get('jewelrytype') != null)
      {
        return Jewelry.find({category: Session.get('jewelrytype')}, { sort: { createdAt: -1 }, limit: 8 });
      }
      else if(Session.get('jewelryprice') != null)
      {
        return Jewelry.find({price:{$lte: Session.get('jewelryprice')}}, { sort: { createdAt: -1 }, limit: 8 });
      }

    }
    else
    {
      return Jewelry.find({}, {
        sort: {
          createdAt: -1
        },
        limit: 8
      });
    }

  }
});



Template.jewelry.events({
  'click #jewls': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelryprice", undefined)
    Session.set("jewelrytype", 'Jewelry')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #brace': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelryprice", undefined)
    Session.set("jewelrytype", 'Bracelet')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #rings': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelryprice", undefined)
    Session.set("jewelrytype", 'Rings')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #necklace': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelryprice", undefined)
    Session.set("jewelrytype", 'Necklace')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under100': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelrytype", undefined)
    Session.set("jewelryprice", 100)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under300': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelrytype", undefined)
    Session.set("jewelryprice", 300)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under600': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelrytype", undefined)
    Session.set("jewelryprice", 600)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under1000': function(event)
  {
    //var test = this.createdBy;
    Session.set("jewelrytype", undefined)
    Session.set("jewelryprice", 1000)
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
