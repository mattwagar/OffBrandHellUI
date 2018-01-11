import Ember from 'ember';

export default Ember.Controller.extend({

    posts: Ember.computed('model.posts', function(){
        let response = this.get('model.posts').responseJSON.items;
        return response;
    })
    // posts: Ember.computed(function () {
    //     return [
    //         Ember.Object.create({
    //             id:"1",
    //             pic: "assets/images/blog/level_design1_square.png",
    //             title: 'Level Design Structure and Layout of Remembrance',
    //             icon: 'extension',
    //             author: 'Matthew Wagar',
    //             date: '11/1/2017',
    //             showDisplay: false,
    //             text: [
    //             `In Remembrance, there are many mechanics to consider when creating a level. Some of the major mechanics are passing through walls, enemy pathing, and memento nests. The player should think about all of these options in both the explore and escape phase of the level.`,
    //             ``,
    //             `In my process of designing a level, I followed a few key principles:`,
    //             `1. Keep the path to and from the memento non-linear, to encourage strategy and emergent gameplay`,
    //             `2. Offer strategies that can be used to win, but aren’t necessary to win`,
    //             `3. Allow the level to be difficult enough that the player may need to redo it, but not so difficult that they can’t make progress`,
    //             ``,
    //             `By following these key principles, to create a multipath level, I started with a single path and branched out. On this single path, I put in enemies that would force the player to go off the beaten path. On this off beaten path, the player can then explore, and understand their surroundings, so then when they pick up the memento they can mentally forge a path back to the safe room.`,
    //             ``,
    //             `In the explore phase, doors are somewhat irrelevant, other than to lure enemies. This is because you aren’t holding the memento, and you can freely pass through walls. However in the escape phase, doors create an imaginary maze that the player must work around to safely bring the memento to the goal room.`
    //             ]
    //         })
    //     ];
    // }),

    // actions: {
    //     togglePost(post){
    //         post.set("showDisplay", !post.get('showDisplay'));
    //     }
    // }
});
