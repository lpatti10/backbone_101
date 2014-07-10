//I am setting up my model for pants
var Pants = Backbone.Model.extend ({

//These properties will be attibuted to all instances of Pants model by default 
  defaults: {
    brand: '',
    size: '',
    instock: true
  },
 
//A model's unique identifier is stored under the id attribute. If you're directly communicating with a backend (CouchDB, MongoDB) that uses a different unique key, you may set a Model's idAttribute to transparently map from that key to id.
  idAttribute: "_id",
 
//When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model. If you define an initialize function, it will be invoked when the model is created. 
  initialize: function () {
    var designer = this.get('brand');
    console.log( designer + ' designed these pants.');
  }
 
});
 
// var JSStudents = Backbone.Collection.extend ({
 
//   model: Student,
  url: "http://tiy-atl-fe-server.herokuapp.com/collections/laura"
 
// });
 
// // Student Collection Instance
// var all_students = new JSStudents();