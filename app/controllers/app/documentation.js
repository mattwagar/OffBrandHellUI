import Ember from 'ember';

export default Ember.Controller.extend({
    selectedDoc:"gdd",

    selectedSell:"sell3w",
    selectedScrum:"scrum10w",

    actions:{
        mutate(obj, key){
            this.set(obj, key);
        }
    }
});
