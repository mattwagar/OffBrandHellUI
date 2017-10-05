import Ember from 'ember';

export default Ember.Controller.extend({

    showDialog:false,

    selectedProfileTab:"aboutme",

    profiles: Ember.computed(function () {
        return [
            Ember.Object.create({
            id: "mmoore",
            pic: "assets/images/mmoore_profile_pic.jpg",
            name: 'Michael Moore',
            role: 'Producer',
            color: 'mmoore-color',
            icon: 'person',
            currentyear:4,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Senior",
            programSkill: 1,
            artSkill: 2,
            leadSkill: 3,
            comSkill: 2,
            orgSkill: 3, 
            coffee:4,
            skills:['Organic Modeling', 'Rigging', 'Animation', 'Level Design'],
            showDialog: false,
            myrole:"I am the producer for REMembrance, I manage production timelines and organization. I am also in the modeling/animation department.",
            aboutme:"Well hello, I am Michael Moore. I'm currently a junior in the GDAP program and am in an accelerated degree program for my Master's in Digital Media. I was in Navy Special Forces for 10 years. On a more exciting note, I love long walks on the beach with the love of my life... Zeus (my english Bulldog). Oh I also love scotch. That is all. "
        }),
        Ember.Object.create({
            id: "sgargiulo",
            pic: "assets/images/sgargiulo_profile_pic.jpg",
            name: 'Sebastiano Gargiulo',
            role: 'Technical Director',
            color: 'sgargiulo-color',
            icon: 'computer',
            currentyear:3,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Junior",
            programSkill: 1,
            artSkill: 2,
            leadSkill: 2,
            comSkill: 2,
            orgSkill: 3, 
            coffee:0,
            skills:['Organic Modeling', 'Rigging', 'Animation'],
            showDialog: false,
            myrole:"As Technical Director I establish how the development of the game progresses. I make sure the pipeline and tools are solid and ensure the development team is on the right track as efficiently as possible.",
            aboutme:"Huge love for video games, VFX, and astronomy, with a keen eye for what works and doesn't work in games. Pretty knowledgeable in computer hardware & software too."
        }),
            Ember.Object.create({
            id: "mwagar",
            pic: "assets/images/mwagar_profile_pic.jpg",
            name: 'Matthew Wagar',
            role: 'Programmer',
            color: 'mwagar-color',
            icon: 'code',
            currentyear:4,
            yearTitle:"Junior",
            years:[1,2,3,4,5],
            maxyear: 5,
            programSkill: 3,
            artSkill: 2,
            leadSkill: 2,
            comSkill: 1,
            orgSkill: 1, 
            coffee:1,
            skills:['Unity', 'Maya', 'C#', 'Java Script', 'Adobe Suite'],
            showDialog: false,
            myrole:"My responsibilities are programming, architecting, and implementing the key functionality in REMemberance. In addition, because of my web development experience, I have created this website from scratch using Ember JS. I also do small fun things like design the Off Brand Hell Logo.",
            aboutme:"I have a creative mind with a technical skillset. From game design to web development to data visualization, I am interested in any job with a creative edge. I am currently pursuing a BS in Computer Science with centrations in Game Programming & Development and Graphics."
        }),
        
        
        Ember.Object.create({
            id: "sdreisbach",
            pic: "assets/images/sdreisbach_profile_pic.jpg",
            name: 'Sierra Dreisbach',
            role: 'Concept Artist',
            color: 'sdreisbach-color',
            icon: 'create',
            currentyear:3,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Senior",
            programSkill: 1,
            artSkill: 3,
            leadSkill: 1,
            comSkill: 2,
            orgSkill: 3, 
            coffee:4,
            skills:['Basic Modeling', 'Adobe Suite', 'Unity'],
            showDialog: false,
            myrole:"I am focused mainly on the art creation part of the game. ",
            aboutme:"I'm a Game Design major at Drexel, who started off as a Graphic Design major. I'm from Allentown, Pennsylvania, and have been living in Philly for about 2 years. I enjoy using Adobe programs, but also love drawing by free hand. I work best late at night, usually around 2 am. I love coffee and cats. "
        }),

        Ember.Object.create({
            id: "jlipinski",
            pic: "assets/images/jlipinski_profile_pic.jpg",
            name: 'Joseph Lipinski',
            role: 'Programmer',
            color: 'jlipinski-color',
            icon: 'code',
            currentyear:4,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Junior",
            programSkill: 3,
            artSkill: 1,
            leadSkill: 3,
            comSkill: 3,
            orgSkill: 2, 
            coffee:4,
            skills:['Unity', 'Modeling', 'Animation'],
            showDialog: false,
            myrole:"I'm a programmer with experience in Unity and a multitude of languages.",
            aboutme:"I'm a BS/MS student of Computer Science. Code, coffee, video games, and table top games are my main jam."
        }),

        Ember.Object.create({
            id: "cbelser",
            pic: "assets/images/cbelser_profile_pic.jpg",
            name: 'Corwin Belser',
            role: 'Programmer',
            color: 'cbelser-color',
            icon: 'code',
            currentyear:5,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Senior",
            programSkill: 3,
            artSkill: 1,
            leadSkill: 2,
            comSkill: 3,
            orgSkill: 0, 
            coffee:2,
            skills:['C','Modeling', 'Texturing', 'Animation'],
            showDialog: false,
            myrole:"Assisting in story & design development.  Translating desired AI behavior into algorithms with implementations. Providing extra programming where needed.",
            aboutme:"Avid programmer interested both in DevOps and game developement.  Computer Science major at Drexel with concentrations in Game Programming & Development as well as Artificial Intelligence. Favorite programming language is the last one used (currently C)."
        }),

        Ember.Object.create({
            id: "clucas",
            pic: "assets/images/clucas_profile_pic.png",
            name: 'Chris Lucas',
            role: '2D/3D Artist',
            color: 'clucas_color',
            icon: 'create',
            currentyear:3,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Senior",
            programSkill: 2,
            artSkill: 3,
            leadSkill: 1,
            comSkill: 0,
            orgSkill: 1, 
            coffee:3,
            skills:['Rigging', 'Animation', 'Scripting'],
            showDialog: false,
            myrole:"Wherever art is needed I can pitch in, likely animating, rigging,  modeling, and texturing. I can also work with game design and sound.",
            aboutme:"I'm a Game Production major from Atlanta, GA. I really love gaming and game design, and I try to enjoy each thing that goes into it. While I can program, level design, make sound effects, etc, I usually find myself working with lighting and texturing on big projects. In my free time I like to pet dogs and watch really bad movies."
        }),

        Ember.Object.create({
            id: "nnam",
            pic: "assets/images/nnam_profile_pic.jpg",
            name: 'Noah Nam',
            role: 'Programmer',
            color: 'nnam_color',
            icon: 'code',
            currentyear:5,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Senior",
            programSkill: 3,
            artSkill: 1,
            leadSkill: 2,
            comSkill: 2,
            orgSkill: 1, 
            coffee:0,
            skills:['Unity', 'Photoshop', 'Video Editing'],
            showDialog: false,
            myrole:"Noah is a programmer. He'll be helping with animations too.",
            aboutme:"Noah is a Drexel University senior from California. Outside of classes, he's a member of the Entrepreneurial Game Studio and the Taekwondo club."
        }),
        
        
        
        ]
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
