Waro  = new Mongo.Collection('waro');

if(Meteor.isServer) {
    Waro.allow({
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

Waro.attachSchema(new SimpleSchema({
    name: {
        type  : String,
        label : "Brand",
        max   : 100
    },
    type: {
        type  : String,
        label : "Type",
        allowedValues: ['Cerveza', 'Vino', 'Whiskey','Tequila', 'Vodka', 'Whiskey', 'Ron']
    },
    description:{
        type  : String,
        label : "Description",
        max   : 1000
    },
    qa:{
        type  : Number,
        label : "Quantity Available",
        optional: true
    },
    prove:{
        type   :Number,
        label  :"Displayed or Not",
        optional: true,
        allowedValues: [0,1]
    },
    as:{
        type     :Number,
        label    :"Amount Sold",
        optional : true
    }
}));