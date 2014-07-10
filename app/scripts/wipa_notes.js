Models

A model is a constructor with a method (Backbone uses the Extend() method) to add properties (data) that are useful for apps.

Backbone models are for encapsulating entities that are associated with data. They provide accessor and mutator access to the data through get() and set() methods.

allows other parts of the system to be notified when things change

// Create a new model by passing in some data
var person = new Backbone.Model({ name: 'Bob', age: '30' })

// Access the data
person.get('name')
//-> returns 'Bob'

// Observe the data for changes using the event methods that
// the model has inherited
person.on('change', function () {
  console.log('Something about this person changed')
})
Views

View objects are associated with a fragment of DOM. They are designed to be tied to models (data) that needs to be presented to the user.

Views are both presentational and interactive.

Each Backbone.View, upon creation gets its own 'root' DOM element. They come with a render() method, which is by default a noop.

You have to extend Backbone.View with your own methods and implement render in the way that you want to.

var v = new Backbone.View()
$('body').append(v.$el)
//-> Appends the default root element, a, to the document body
In order to acheive anything useful, the view needs to be extended:

 // Extend a View with a custom render
// function that writes the current date
var Clock = Backbone.View.extend(
  { render: function () {
      this.$el.empty().append(new Date)
    }
  })
Collections

Animal => Zoo :: Model => Collection

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Me',
        location: 'Atlanta',
        awesome: true
    },

    initialize: function(){
        var name = this.get('name');
        console.log(name + " just entered this world.");
    }

});
Now whenever you instantiate a new instance of 'Person', you access the attributes object by the .get() method.

Person is a model constructor, people is a collection constructor.

var People = Backbone.Collection.extend({ model: Person });

var all_people = new People();

all_people.fetch()
all_people;
fetch would return all the Person instances inside the People collection. 'all_people' is an instance of the People collection.

Backbone View

Used to reflect what your app's data model looks like

var personView = Backbone.View.extend({
    el: $('.hero-unit'),
    template: function(model){ return 'hello jack'; }
    initialize: function () { this.render(); },
    render: function () { this.$el.html(this.template);}
});
'this' refers to the instance of whatever you're creating.

you send your model data to a view

step 1 create model and collection step 2 create view(s) that contains your template, events,initialize function, render function, etc. (content to display on page and under what circumstances)