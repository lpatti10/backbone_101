var StudentView = Backbone.View.extend({
 
  template: function(model){
    return _.template($('#student_list').html());
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