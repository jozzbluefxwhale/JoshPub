export const Drunkards  = new Mongo.Collection('drunkies');

if(Meteor.isServer) {
    Drunkards.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}

Drunkards.attachSchema(SimpleSchema({
        id:{
            type  : Number,
            label : "Drunkies"
        },

        name:{
            type  : String,
            label : "Name",
            max   : 50
        },

        last_name:{
            type  : String,
            label : "Lastname",
            max   : 50
        },

        user_id:{
            type  : String,
            label : "User ID",
            max   : 50
        },

        password:{
            type   : String,
            label  : "User password",
            max    : 20
        },

        email:{
            type   : String,
            label  : "User email",
        }
}));