import Ember from 'ember';

export default Ember.Route.extend({
    redirect(model, transition) {
        console.log(transition);
        if (transition.targetName === "app.blog.index") {
            this.controllerFor('app').transitionToRoute('app.blog.archive');
            // this.transitionTo('app.blog.archive'); // Implicitly aborts the on-going transition.
        }
    },

    model() {
        return Ember.RSVP.hash({
            posts: Ember.$.get("https://www.googleapis.com/blogger/v3/blogs/1010553031835188559/posts?key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg", function (response) {
                return;
            })
        })
    }

});
