import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return Ember.RSVP.hash({
            post: Ember.$.get(`https://www.googleapis.com/blogger/v3/blogs/1010553031835188559/posts/${params.post_id}?key=AIzaSyAlS7uOny5TTTmpMla3QNRU8Hy0KLEZqSg`, function (response) {
                console.log(response);
                return response;
            })
        })
    }
});
