Template.recentProducts.helpers({
  recentHandbag: function() {
    return Handbags.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 1
    });
  },
  recentJewelry: function() {
    return Jewelry.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 1
    });
  },
  recentClothes: function() {
    return Clothes.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 1
    });
  },
  recentSandals: function() {
    return Sandals.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 1
    });
  }

});

Template.handbags.helpers({
  handbags: function()
  {
    if(Session.get('handbagtype') != null || Session.get('handbagprice') != null)
    {
      if(Session.get('handbagtype') != null)
      {
        return Handbags.find({category: Session.get('handbagtype')}, { sort: { createdAt: -1 }, limit: 8 });
      }
      else if(Session.get('handbagprice') != null)
      {
        return Handbags.find({price:{$lte: Session.get('handbagprice')}}, { sort: { createdAt: -1 }, limit: 8 });
      }

    }
    else
    {
      return Handbags.find({}, {
        sort: {
          createdAt: -1
        },
        limit: 8
      });
    }

  }/*,
  recentHandbag: function()
  {
    return Handbags.find({}, { sort: { createdAt: -1 }, limit: 3 });
  }*/

});



Template.handbags.events({
  'click #handbagLink': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagprice", undefined)
    Session.set("handbagtype", 'Handbag')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #purse': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagprice", undefined)
    Session.set("handbagtype", 'Purse')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #fannyPack': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagprice", undefined)
    Session.set("handbagtype", 'Fanny Pack')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #duffle': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagprice", undefined)
    Session.set("handbagtype", 'Duffle Bag')
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under100': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagtype", undefined)
    Session.set("handbagprice", 100)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under300': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagtype", undefined)
    Session.set("handbagprice", 300)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under600': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagtype", undefined)
    Session.set("handbagprice", 600)
    //return Sandals.find({category: 'heels'}, {sort: { createdAt: -1}, limit: 8 });
  },
  'click #under1000': function(event)
  {
    //var test = this.createdBy;
    Session.set("handbagtype", undefined)
    Session.set("handbagprice", 1000)
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
