import Ember from 'ember';

export default Ember.Controller.extend({

    selectedRoute: Ember.computed.reads("model.routeName"),

    actions: {
        selectRoute(routeName){
            this.set('selectedRoute', routeName);
        }
    }
});
