//............................MODEL..........................//

//I am setting up my model for pants
var Pant = Backbone.Model.extend ({

//These properties (keys: values) will be attibuted to all instances of Pants model by default 
  defaults: {
    brand: '',
    size: 8,
    instock: true
  },
 
//A model's unique identifier is stored under the id attribute. If you're directly communicating with a backend (CouchDB, MongoDB) that uses a different unique key, you may set a Model's idAttribute to transparently map from that key to id.
  idAttribute: "_id",
 
//When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model. If you define an initialize function, it will be invoked when the model is created. 
  initialize: function () {
    var brand = this.get('brand');
    console.log( brand + ' designed these pants.');
  }
 
});



//............................COLLECTION..........................//

//This is the initial set-up of the collection called Closet 
var Closet = Backbone.Collection.extend ({

//This is where we declare the model and DB our collection is based off of
  model: Pant,
  url: "http://tiy-atl-fe-server.herokuapp.com/collections/laura"
 
});


//............................INSTANCE..........................//

// Closet Collection Instance gets new lowercase variable name
var all_pants = new Closet();

