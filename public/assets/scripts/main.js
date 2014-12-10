

// Wait for DOM Load


jQuery(function($) {


  // Router


  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'work': 'work',
      'about': 'about',
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
            link: "http://www.w3schools.com",
            imgSrc: "../../assets/images/project-one.png",
            imgAlt: "tandooti Night"
          },
          {
            link: "http://www.w3schools.com",
            imgSrc: "../../assets/images/project-two.png",
            imgAlt: "Not Far from the tree"
          },
          {
            link: "http://www.w3schools.com",
            imgSrc: "../../assets/images/project-three.png",
            imgAlt: "InspiredMag"
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
              imgAlt: "tandooti Night"
            },
            {
              link: "http://www.w3schools.com",
              imgSrc: "../../assets/images/projecttwo-work.png",
              imgAlt: "tandooti Night"
            },
            {
              link: "http://www.w3schools.com",
              imgSrc: "../../assets/images/projectone-work.png",
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
        content: '<h1>About Page</h1>'
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
        content: '<h1>Contact Page</h1>'
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