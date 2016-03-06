import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      var title = this.get('title'); //this getting the title value from the new template
      var description = this.get('description');
      var date = this.get('date');

      //create new task
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      //SAVE task
      newTask.save();

      //CLEAR PROPERTIES
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
      
    }
  }
});
