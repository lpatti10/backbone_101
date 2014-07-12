
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
