import Ember from 'ember';

export default Ember.Route.extend({

    model(params){
        return {
            post_id: params.post_id
        };
    }
});
