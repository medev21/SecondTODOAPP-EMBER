import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      var title = this.get('title'); //this getting the title value from the new template
      var description = this.get('description');
      var date = this.get('date');

      alert(description);

    }
  }
});
