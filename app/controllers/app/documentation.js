import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDoc:"gdd",

    selectedSell:"sell1",
    selectedScrum:"scrum10",

    actions:{
        mutate(obj, key){
            this.set(obj, key);
        }
    }
});
