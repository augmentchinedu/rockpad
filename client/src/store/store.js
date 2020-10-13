import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {

        content: {
            about: {
                statistics: {
                    number: 30,
                    text: "Years Working Experience"
                },
                left: {
                    imgURL: "https://storage.googleapis.com/bawell/img-about-left-img-1586717284988.png",
                    title: "Our Approach",
                    text: "Sustainability is at the heart of everything we undertake. We audit all projects against global standards, while developing bespoke strategies that drive our environmental agenda. To build sustainably requires us to design holistically, and our unique integrated design approach enables us to develop innovative strategies that have a firm focus on the future of the environment."
                },
                right: {
                    imgURL: "https://storage.googleapis.com/bawell/img-about-right-img-1586717285878.png",
                    title: "Architecture Design",
                    text: "We deliver bespoke and global standard buildings with no two being the same. The variety is made possible by an inventive spirit common to all. Contemporary forms, rooted in strong consideration for building usage, are underpinned by sound environmentally sustainable building principles, finished with an informed use of materials with elegant and robust detailing."
                },
                header: "Our Company Hunter",
                story: [{
                    _id: "5e7ce20ca353731404ee5d20",
                    text: " Flutter Architects LLC began its creative story with architecture. The company is also specialised in exploring relationships between people and landscape to create a sense of belonging. The architecture studio started based on a very simple idea; if a building can feel like it naturally ‘belongs’, or fits logically in a place, to an environment, a time and culture, then the people that inhabit the building will likely feel a sense of belonging there as well. This methodology connects theories of beauty, confidence, economy and comfort. "
                }],
                slider: [ {
                    _id: "5e7ce20ca353731404ee5d22",
                    imgURL: "https://storage.googleapis.com/bawell/img-about-slider-1-1586717284442.png",
                    title: "HAHAHAHHAHAAH",
                    subTitle: "Digital practice is slowly emerging as the real deal."
                }, {
                    _id: "5e7ce20ca353731404ee5d23",
                    imgURL: "https://flutterarchitects.com/assets/images/imghome3.jpg",
                    title: "Hermosa Beach Strand Residence",
                    subTitle: "A detailed transition plan into a completely new environment."
                }]
            },
            projects: {
                images: [{
                    _id: "5e7ce20ca353731404ee5d24",
                    imgURL: "https://avatars0.githubusercontent.com/u/56560568?s=400&u=3085ee0806f081a650c141e1a736abf0a52395ac&v=4",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d25",
                    imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d25-1586718239318.png",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d26",
                    imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d26-1586718239403.png",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d27",
                    imgURL: "https://flutterarchitects.com/assets/images/gallery/4.jpg",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d28",
                    imgURL: "https://flutterarchitects.com/assets/images/gallery/5.jpg",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d29",
                    imgURL: "https://flutterarchitects.com/assets/images/gallery/6.jpg",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d2a",
                    imgURL: "https://flutterarchitects.com/assets/images/gallery/7.jpg",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d2b",
                    imgURL: "https://flutterarchitects.com/assets/images/gallery/8.jpg",
                    title: "Interior House",
                    category: "Interior"
                }, {
                    _id: "5e7ce20ca353731404ee5d2c",
                    imgURL: "https://flutterarchitects.com/assets/images/gallery/9.jpg",
                    title: "Interior House",
                    category: "Interior"
                }, ]
            },
            custom: {
                title: "Our Vision",
                text: "By designing each project with its own distinct and engaging identity, we construct more than just buildings – we construct places. From large scale urban environments to small scale interiors, we develop atmospheres that cultivate social interaction and draw in people. They’re places for people to gather, engage, interact and enjoy."
            },
            contact: {
                address: "2 Eastbourne Paddington, London W2 6AA UK",
                phone: "(+447) 4800 58",
                email: "info@flutterarchitects.com"
            },
            slider: [{
                _id: "5e7ce20ca353731404ee5d2e",
                imgURL: "https://flutterarchitects.com/assets/images/slider/img1.jpg",
                title: "Modern Architecture Designs",
                subTitle: "House Interior"
            }, {
                _id: "5e7ce20ca353731404ee5d2f",
                imgURL: "https://flutterarchitects.com/assets/images/slider/img2.jpg",
                title: "Modern Interior Design",
                subTitle: "The Heritage, The Now, The Future"
            }, {
                _id: "5e7ce20ca353731404ee5d30",
                imgURL: "https://flutterarchitects.com/assets/images/slider/img3.jpg",
                title: " Raising The Standards",
                subTitle: "Wellness And Sustainability"
            }],
            expertise: [{
                text: ["We go beyond standard investigative methods and procedures with state of the art technologies to ensure accurate reporting, lower costs, and side-step unnecessary intrusive testing methods.", "Considered the pathology of a built environment, forensics tests those who know how the disparate parts of a building can and should come together. We take pride in the methods and tools we employ to gather facts, distill them for insights and report credible results. Beyond digital imaging and voice recordings, our non-intrusive testing equipment includes infrared thermography, calibrated precipitation aparatus' and digital moisture meters. Whether it's identifying moisture conditions or areas of heat loss in materials, we possess the know-how to pin down causation."],
                _id: "5e7ce20ca353731404ee5d31",
                imgURL: "https://flutterarchitects.com/assets/images/imgserv1.jpg",
                title: "Forensic Architecture"
            }, {
                text: ["Our team has a broad range of experience as designated architectural experts for plaintiff parties and developers in defense of plaintiff parties, in addition to a host of sub contractor disciplines.", "In matters of litigation, building envelope assemblies such as roofs, decks, planters, and exterior finishes are often deficient at penetrations and perimeter conditions - where the system interacts with the work of other trades. Incorrect or incomplete drawings, standards and workmanship issues can result in development or construction defects. That's where we come in. Our proprietary Forensic Architecture Database takes the complexity out of cases, quickly and economically providing our clients with previously unavailable information."],
                _id: "5e7ce20ca353731404ee5d32",
                imgURL: "https://flutterarchitects.com/assets/images/imgserv2.jpg",
                title: "Expert Witness Testimony"
            }, {
                text: ["Lending our design and forensic expertise to our waterproofing and quality assurance consulting services makes us a valuable third party during the construction process.", " In many cases, we foresee the development of deficiencies before they’re constructed or covered by subsequent finish materials. Our peer review services focus on identifying potential shortcomings of construction documents prior to breaking ground. This technical competency allows us to review drawings before construction even begins. Once it does, we continue to monitor building techniques and processes to provide compliance and ensure construction accountability for our clients."],
                _id: "5e7ce20ca353731404ee5d33",
                imgURL: "https://flutterarchitects.com/assets/images/imgserv3.jpg",
                title: "Quality Assurance"
            }, {
                text: ["By evaluating a range of building methods and materials through our forensic engagements, our team possesses a unique advantage over traditional architecture firms when it comes to design reconstruction.", "Perhaps one of the most misunderstood and under-estimated disciplines in the architectural field is the area of Reconstruction Design and Construction. The inherent confinements within the reconstruction field present a set of special challenges. Dealing with, identifying and solving the problems within an established, built environment is not for the inexperienced. We know what does and does not work to our clients’ benefit. Our reconstruction designs and building details solve existing problems while addressing future needs."],
                _id: "5e7ce20ca353731404ee5d34",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d34-1586719290286.png",
                title: "Reconstruction Services"
            }, {
                text: ["We work on behalf of our clients and property owners, acting as their eyes and ears during the construction phase.", "We monitor construction schedules, cost, progress and quality while providing support services such as instruction or clarification to contractors as required. Our services also carry over to the bidding and negotiation process. To minimize the negative impact on a building from construction methods and outside elements, we conduct research on a per-project basis to recommend the best set of tools and methods needed. Following construction, Flutter Architects determines substantial completion and ensures proper warranty documentation is provided by contractors."],
                _id: "5e7ce20ca353731404ee5d35",
                imgURL: "https://flutterarchitects.com/assets/images/imgserv5.jpg",
                title: "Construction Administration"
            }, {
                text: ["We believe successful design solutions are the result of a comprehensive program that addresses conflicting elements of aesthetics, cost, durability and environmental responsibility.", "In its purest form, design is a process of problem solving. Recognition of this perspective is reflected in our portfolio of design solutions. While our years of traditional architectural design experience includes residential, commercial and institutional projects, we tend to focus on unusually challenging building types. Our recent work includes aviation aircraft and pilot support facilities, a contemporary single family home and support services for a subterranean wine cellar."],
                _id: "5e7ce20ca353731404ee5d36",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d36-1586719290368.png",
                title: "Architectural Design"
            }],
            team: [ {
                _id: "5e7ce20ca353731404ee5d38",
                name: "Rachel Eating",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d24-1587031257323.jpeg",
                title: "Marketing Manager"
            }, {
                _id: "5e7ce20ca353731404ee5d39",
                name: "Rachel Keating",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d24-1587031257323.jpeg",
                title: "Marketing Manager"
            }, {
                _id: "5e7ce20ca353731404ee5d39",
                name: "Rachel Keating",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d24-1587031257323.jpeg",
                title: "Marketing Manager"
            },  {
                _id: "5e7ce20ca353731404ee5d39",
                name: "Rachel Keating",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d24-1587031257323.jpeg",
                title: "Marketing Manager"
            }, {
                _id: "5e7ce20ca353731404ee5d3a",
                name: "Rachel Keating",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d24-1587031257323.jpeg",
                title: "Marketing Manager"
            },{
                _id: "5e7ce20ca353731404ee5d3a",
                name: "Rachel Keating",
                imgURL: "https://storage.googleapis.com/bawell/img-5e7ce20ca353731404ee5d24-1587031257323.jpeg",
                title: "Marketing Manager"
            }],
            logo: {
                logoText: ["Flutter ", "Architects"],
                imgURL: "https://avioneng.com/img/logo/logo2.png",
                favicon: "https://flutterarchitects.com/favicon.png"
            }
        },
        _id: "5e9350211c9d440000fce3cc",
        hostname: "hunterkiller.com",
        password: "12345",
        __v: 7
    },

});