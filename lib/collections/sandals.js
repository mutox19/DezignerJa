Sandals = new Mongo.Collection("sandal");

var Schemas = {};

Schemas.Sandals = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    category: {
        type: String,
        label: "Category",
        max: 100
    },
    Brand: {
        type: String,
        label: "Brand",
        max: 100
    },
    price: {
      type: Number,
      label: "Price of Sandal",
      optional: true,
      regEx:
    /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/
  },
    createdAt: {
      type: Date,
        autoValue: function() {
          if (this.isInsert) {
            return new Date();
          }
        }
    },
    image: {
    type: String,
      autoform: {
        afFieldInput: {
          type: 'cloudinary'
        }
      }
    }
});

Sandals.attachSchema(Schemas.Sandals);
