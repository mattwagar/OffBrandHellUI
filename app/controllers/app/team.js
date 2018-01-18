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
            role: 'Technical Director',
            color: 'mwagar-color',
            icon: 'extension',
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
            myrole:"I am very much a jack of all trades when it comes designing, modeling, programming, and marketing for this project. My main role is creating clever level designs that encourage emergent gameplay. However, marketting-wise I also created this website from scratch using Ember JS and designed the Off Brand Hell logo.",
            aboutme:"I have a creative mind with a technical skillset. From game design to web development to data visualization, I am interested in any job with a creative edge. I am currently pursuing a BS in Computer Science with concentration in Game Programming & Development. Also I foster cats, and yes, my heart breaks every time they're taken from me. I'm on my 8th cat since I've started."
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
            myrole:`I like to mostly stick to art related projects.  Last term I did more concept and orthographic art work, and a lot of texturing as well. I feel I'm most helpful in that area. I'm also cool with doing any kind of "graphic design-y" related projects, including logos, UI design, menu design, etc. Also video editing is cool.`,
            aboutme:"Hey! I'm Sierra, a 21 year old student at Drexel University, majoring in Game Design. I love video games, and whole heartedly believe a game can become a beautiful work of art. I enjoy working with the Adobe Suite, as well as using my hands to draw, paint etc. When I'm not at school, you can find me taking orders at Drexel's on-campus ramen restaurant. I usually like to do my projects late at night, because that's when I work best. I love coffee and cats, and I have a strong passion for sparkling water."
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
            comSkill: 2,
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

        Ember.Object.create({
            id: "jswanick",
            pic: "assets/images/jswanick_profile_pic.jpg",
            name: 'Jimmy Swanick',
            role: 'Programmer / Concept Artist',
            color: 'jswanick_color',
            icon: 'code',
            currentyear:5,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Senior",
            programSkill: 3,
            artSkill: 3,
            leadSkill: 2,
            comSkill: 3,
            orgSkill: 0,
            coffee:3,
            skills:['Unity', 'Photoshop', 'Maya', 'Mudbox', 'Level Design'],
            showDialog: false,
            myrole:"I illustrate, I program in Unity, I build web apps, I perform arcane source control rituals, and I play way too many games.",
            aboutme:"I'm an illustrator, musician, writer, programmer, communicator, viewer of anime, crafter of shitty jokes, and player of so, so, so many games. I'm a jack of all trades and a master of reaching intermediate level of each of them (maybe) before finding a new hobby and getting distracted.\n"+
            "I'm down for pretty much every genre of game - wonky indies you can play in an afternoon,  competitive strategy games, AAA rpgs, a whole lot of party games,  and even ancient DOS games - so please forgive me interupting every twenty seconds to point out a relevant game I just remembered.\n"+
            "I'm in it for the variety and the adventure. <3"
        }),

        Ember.Object.create({
            id: "jharvey",
            pic: "assets/images/jharvey_profile_pic.jpg",
            name: 'John Harvey',
            role: 'Level Designer',
            color: 'jharvey_color',
            icon: 'extension',
            currentyear:3,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Junior",
            programSkill: 2,
            artSkill: 2,
            leadSkill: 2,
            comSkill: 2,
            orgSkill: 2,
            coffee:2,
            skills:['Unity', 'Maya', 'Mudbox', 'Level Design'],
            showDialog: false,
            myrole:"Last quarter I was on Design, but after seeing how the team works I'm stepping down to more modeling focused.",
            aboutme:"Drexel GMAP Major and in the accelerated BS/MS program, I like focusing my work on how my players will interact with the space around them, how that space looks, and how that space feels. I think that the environment/level design is one of the major deciding factors to a great game and the design needs to make sense to you and your players."
        }),

        Ember.Object.create({
            id: "eli",
            pic: "assets/images/eli_profile_pic.jpg",
            name: 'Eric Steven Lee Li',
            role: 'Programmer',
            color: 'eli_color',
            icon: 'code',
            currentyear:4,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Junior",
            programSkill: 3,
            artSkill: 1,
            leadSkill: 3,
            comSkill: 1,
            orgSkill: 3,
            coffee:2,
            skills:['Unity', "C#", 'Maya', 'Level Design'],
            showDialog: false,
            myrole:"Coding. Zak and I coded most of spark. Also, I can't draw even if my life depended on it. Or model/animating.",
            aboutme:"Hi, I am Eric Steven Lee Li. I am from Ecuador and was born and raise down there. My parents are asian. I know, it's quite weird(?) for some people to see this for some reason. I speak four languages. Spanish-English-Cantonese-Japanese. I started coding since senior year of middle school and have been interested in gaming since I was a kid. I lead a  game group with no art team, so the game was all maps and mechanics. My favorite games are strategy and puzzle games, but I also enjoy fast paced games a lot. Mostly, if a friend ask me to play, I do, otherwise I'll playing strategy games."
        }),

        Ember.Object.create({
            id: "nadrian",
            pic: "assets/images/nadrian_profile_pic.jpg",
            name: 'Nathan Adrian',
            role: 'Programmer',
            color: 'nadrian_color',
            icon: 'code',
            currentyear:3,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Junior",
            programSkill: 3,
            artSkill: 1,
            leadSkill: 0,
            comSkill: 1,
            orgSkill: 0,
            coffee:2,
            skills:['Unity', "JavaScript", "C#", "Audio"],
            showDialog: false,
            myrole:"I feel most comfortable doing programming and audio. Since we have a million people with programming experience, I feel I should definitely focus more on audio. I have made a lot of music for my own personal project (check out my portfolio if you'd like some samples), and feel I have what it takes (also, I'd like experience with a program that doesn't make only 8-bit music).",
            aboutme:"I've been interested in videogames since I was 7. Though I didn't really start considering going into the field until 11th grade. Once I had some actual programming experience, I realized that this was what I wanted to do. I feel this was definitely the right choice. I've stuck with this dream for five years now, and I intend to continue until it becomes a reality."
        }),

        Ember.Object.create({
            id: "kfitz",
            pic: "assets/images/blog/blog_placeholder.png",
            name: 'Kane Fitzgerald',
            role: 'Programmer',
            color: 'kfitz_color',
            icon: 'create',
            currentyear:4,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Senior",
            programSkill: 0,
            artSkill: 3,
            leadSkill: 1,
            comSkill: 2,
            orgSkill: 2,
            coffee:3,
            skills:['Modeling', "Maya", "Animation"],
            showDialog: false,
            myrole:"Modeling",
            aboutme:"I know de wae"
        }),

        Ember.Object.create({
            id: "dshalala",
            pic: "assets/images/blog/blog_placeholder.png",
            name: 'Daniel Shalala',
            role: 'Producer',
            color: 'dshalala_color',
            icon: 'person',
            currentyear:3,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Junior",
            programSkill: 0,
            artSkill: 3,
            leadSkill: 3,
            comSkill: 2,
            orgSkill: 2,
            coffee:0,
            skills:['Documentation', 'Modeling', "Maya", "Animation"],
            showDialog: false,
            myrole:"I feel most comfortable with the role of producer with a focus on level and game design as well as storytelling.",
            aboutme:"I am currently a junior at Drexel University who is majoring in Game Art and Production as well as minoring in both History and Philosophy. Once I graduate from Drexel, I hope to join the industry immediately and work on the next most interesting and influential title."
        }),

        Ember.Object.create({
            id: "zolyarnik",
            pic: "assets/images/zak_profile_pic.jpg",
            name: 'Zak Olyarnik',
            role: 'Scrum Master',
            color: 'zolyarnik_color',
            icon: 'person',
            currentyear:5,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Senior",
            programSkill: 3,
            artSkill: 0,
            leadSkill: 3,
            comSkill: 3,
            orgSkill: 3,
            coffee:2,
            skills:['Unity', 'C#', 'Project Management'],
            showDialog: false,
            myrole:"Scrum Master.  I am very responsible when it comes to deadlines and good at keeping people on task.  Plus I really enjoy doing the summary presentations and it's a good way to keep the overall pulse of the group and see where we're doing well and where we need to improve.",
            aboutme:"I am a senior CS major who’s been coding since my sophomore year of high school. I’ve wanted to make games for just as long, and I’m getting to live out that dream in Drexel’s gaming concentration, as well as the ultimate culmination: heading my own senior design team, also game-focused.  Put quite simply, I love what I do.  I tutor for the college of engineering and just finished my third and final co-op working at AGI, on the 3D graphics team. My favorite games are 3D platformers, but I also enjoy playing Rock Band with friends."
        }),

        Ember.Object.create({
            id: "aedgarian",
            pic: "assets/images/blog/blog_placeholder.png",
            name: 'Andre Edgarian',
            role: 'Artist',
            color: 'aedgarian_color',
            icon: 'create',
            currentyear:3,
            years:[1,2,3,4],
            maxyear: 4,
            yearTitle:"Junior",
            programSkill: 0,
            artSkill: 2,
            leadSkill: 1,
            comSkill: 2,
            orgSkill: 1,
            coffee:2,
            skills:['Modeling', 'Animation', 'Maya'],
            showDialog: false,
            myrole:"General design/ level design.",
            aboutme:"I’m an aspiring game design student who went to Drexel for some reason. I’m making a game in EGS. I hope to one day make money."
        }),

        Ember.Object.create({
            id: "tpham",
            pic: "assets/images/tpham_profile_pic.jpg",
            name: 'Trung Tin Pham',
            role: 'Programmer',
            color: 'tpham_color',
            icon: 'code',
            currentyear:4,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Junior",
            programSkill: 3,
            artSkill: 2,
            leadSkill: 2,
            comSkill: 3,
            orgSkill: 2,
            coffee:2,
            skills:['Programming', 'C#', 'Unity'],
            showDialog: false,
            myrole:"Programming and writing scripts as need be/setting up playtesting.",
            aboutme:"I am a Junior at Drexel studying Computer Science with a Game Programming Concentration. In my free time, I enjoy playing games, reading, or long walks on the beach."
        }),

        Ember.Object.create({
            id: "flai",
            pic: "assets/images/flai_profile_pic.png",
            name: 'Felipe Lai',
            role: 'Programmer',
            color: 'flai_color',
            icon: 'code',
            currentyear:5,
            years:[1,2,3,4,5],
            maxyear: 5,
            yearTitle:"Senior",
            programSkill: 3,
            artSkill: 1,
            leadSkill:1,
            comSkill: 2,
            orgSkill: 2,
            coffee:0,
            skills:['Programming', 'C#', 'Unity'],
            showDialog: false,
            myrole:"Programming in unity",
            aboutme:"Drexel computer science senior with a interest and concentration in game design"
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
