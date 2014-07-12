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


var PantsView = Backbone.View.extend({
 
  template: function(model){
    return _.template($('#pant_list').html());
  },
 
  el: $('.hero-unit ul'),
 
  initialize: function(){
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
  },
 
  render: function(){
    this.$el.html( this.template(this.collection) )
  }
 
});

// Fetching the data & creating my view
all_pants.fetch().done(function () {
  new PantsView( { collection: all_pants } );
});
 
// New instance of pant model injecting brand name, repeated as variable (lowercase)
var r13 = new Pant({ brand: 'R13' });
//I also used this line in the console to commit new instances to DB 
all_pants.add(r13).save();
 
 
// I could also do some updating to my view. 
var sizeConversion = all_pants.findWhere({brand: "R13"});
// This should override the default value '8' for key 'size'
sizeConversion.set('size', 29);
sizeConversion.destroy();
