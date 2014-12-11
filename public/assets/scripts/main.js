

// Wait for DOM Load


jQuery(function($) {


  // Router


  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'work': 'work',
      'about': 'about',
      'activity': 'activity',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // work Route
    work: function() {
      console.log('Navigating to  work Page');
      App.views['work'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

    // Activity Route
    activity: function() {
      console.log('Navigating to activity Page');
      App.views['activity'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      work: new WorkView(),
      about: new AboutView(),
      activity: new ActivityView(),
      contact: new ContactView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: 'Hello.  I AM Moin Patel',
        subtitle: ' Web, User Interface & Interactive Designer',
        project: [
          {
            link: "http://mpcreative.ca/Assignment3-new/index.html",
            imgSrc: "../../assets/images/project-one.png",
            imgAlt: "Tandoori night",
            desc: "3 page website for a fictional restaurant"
          },
          {
            link: "http://mpcreative.ca/Integrativeassignment/",
            imgSrc: "../../assets/images/project-two.png",
            imgAlt: "Not Far from the tree",
            desc: "Redesign the existing site"
          },
          {
            link: "http://marvl.in/i98d8",
            imgSrc: "../../assets/images/project-three.png",
            imgAlt: "InspiredMag",
            desc: " Inspiration app for designer"
          }
        ]
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });


  
  // -----------------------------
  // Work View
  // -----------------------------

  var WorkView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#work',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: 'Work',
        workproject: [
            {
              
              link: "http://www.w3schools.com",
              imgSrc: "../../assets/images/projectone-work.png",
              imgAlt: "Not Far from the tree",
              desc: "Redesign of a existing site"
            },
            {
              link: "http://www.w3schools.com",
              imgSrc: "../../assets/images/projecttwo-work.png",
              imgAlt: "tandooti Night"
            },
            {
              link: "http://www.w3schools.com",
              imgSrc: "../../assets/images/projectthree-work.png",
              imgAlt: "tandooti Night"
            },
            {
              link: "http://www.w3schools.com",
              imgSrc: "../../assets/images/projecttwo-work.png",
              imgAlt: "tandooti Night"
            }
        ]
      });
    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }
});

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        titleone: 'About',
        titletwo: 'Favorite Books',
        titlethree: 'Favorite Quotes',
        titlefour: 'Skills',
        aboutone:"Hi there, I'm Moin. I'm a Interactive designer from Toronto, who loves food, funny blogs and new technology. I have a passion for modern design and an understanding of the importance of good user experience. I enjoy making things look good and I love making them work. I am currently enroll in web design and interactive media program at Humber College.",
        abouttwo:"I am currently searching for a design internship where I can grow as a designer and help create digital experiences that are both effective and delightful.",
        quote:'"A design is not finished until somebody is using it"',
        author:'-Brenda Laurel',
        type:[
            {
              name: "Core:",
              detail: "Print and Web Design, User Experience Design"
            },
             {
              name: "Presentational:",
              detail: "CSS, LESS, Responsive Design"
            },
             {
              name: "Development:",
              detail: "HTML5, Jquery, PHP, Sql, Wordpress"
            },
             {
              name: "Work flow:",
              detail: "Github"
            } 
        ]

        
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Activity View
  // -----------------------------
  var ActivityView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#activity',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: 'Activity'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });
  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title: 'Contact'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  // Some code you can copy and paste.... ish

  $(document).delegate('a', 'click', function(e) {
    var url = $(this).attr('href') || '#';
    var isLocal = url.match(/^#/)
    if(isLocal) { 
      e.preventDefault(); 
      App.router.navigate($(this).attr('href'), { trigger: true }); 
    }
  });


});