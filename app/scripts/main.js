//http://tiy-atl-fe-server.herokuapp.com/collections/laura

// Fetching the data & creating my view
all_students.fetch().done(function () {
  new StudentView( { collection: all_students } );
});
 
// I could also create a new student
var bob = new Student({ name: 'Bob' });
all_students.add(bob).save();
 
 
// I could also do some updating to my view
var s = all_students.findWhere({name: "NAME"});
s.set('location', 'Idaho');
s.destroy();