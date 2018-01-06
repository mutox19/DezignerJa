var Schemas = {};
Schemas.UserProfile = new SimpleSchema({
    picture: {
      type: String,
      optional: true,
      label: 'Profile Picture',
      defaultValue: 'http://res.cloudinary.com/est8/image/upload/v1458006137/pwroxhoctufiyqnvchrr.jpg',
      autoform: {
        afFieldInput: {
          type: 'cloudinary'
        }
      }
    },
    type: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    birthday: {
      type: Date,
      optional: true
    },
    bio: {
      type: String,
      optional: true,
      autoform: {
        rows: 4
      }
    },
    website: {
      type: String,
      optional: true
    },
    company: {
      type: String,
      optional: true
    },
    address: {
      type: String,
      optional: true
    }
  });

  Schemas.User = new SimpleSchema({
    username: {
      type: String
    },
    emails: {
         type: [Object],
         optional: true
     },
     "emails.$.address": {
       type: String,
       regEx: SimpleSchema.RegEx.Email
     },
     "emails.$.verified": {
       type: Boolean
     },
    createdAt: {
      type: Date
    },
    profile: {
      type: Schemas.UserProfile,
      optional: true
    },
    services: {
      type: Object,
      optional: true,
      blackbox: true
    },
    roles: {
        type: [String],
        optional: true
    },
    status: {
    type: Object,
    optional: true,
    blackbox: true
    }
  });

  Meteor.users.attachSchema(Schemas.User);
