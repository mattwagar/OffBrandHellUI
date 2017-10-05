import Ember from 'ember';

export default Ember.Controller.extend({

    showDialog:false,

    selectedProfileTab:"aboutme",

    profiles: Ember.computed(function () {
        return [Ember.Object.create({
            id: "mwagar",
            pic: "assets/images/mwagar_profile_pic2.jpg",
            name: 'Matthew Wagar',
            role: 'Programmer',
            color: 'mwagar-color',
            icon: 'code',
            currentyear:4,
            years:[1,2,3,4,5],
            maxyear: 5,
            programSkill: 3,
            artSkill: 2,
            leadSkill: 2,
            comSkill: 1,
            orgSkill: 1, 
            showDialog: false,
            myrole:"My responsibilities are programming, architecting, and implementing the key functionality in REMemberance. In addition, because of my web development experience, I have created this website from scratch using Ember JS. I also designed the Off Brand Hell Logo as well as aid in the creative choices for the game.",
            aboutme:"I have a creative mind with a technical skillset. From game design to web development to data visualization, I am interested in any job with a creative edge. I am currently pursuing a BS in Computer Science with a Concentration in Game Design."
        })]
    }),

    actions: {
        closeDialog(profile) {
            profile.set('showDialog', false);
        },
        openDialog(profile){
            profile.set('showDialog', true);

            //HACK fixes weird visual bug (sometimes)
            $(`#${profile.get('id')}`).removeClass('md-focused');
        }
    }
});
