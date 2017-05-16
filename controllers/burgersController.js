

// Requiring our Todo model
var db = require("../models");

module.exports = function(app) {

  // combination of all 3 tables //
  // table of courses with authors
  app.get("/api/courseUser", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Course.findAll({
      include: [db.User]
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/courseReviews", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // WHERE clause needed to show only reivews related to the current course looked at
    db.Course.findAll({ //may need to review to findOne
      where: {id: 1},
      //include: [db.User],  // need to also include reviews table. may need a nested include like the link i have saved in notes
      //include: [db.User]
      // or
      include: [
        {
          model: db.Review,
          include: [db.User]
        }
      ]

    }).then(function(data) {
      res.json(data);
    });
  });

/*
// these returned returns a combination of authors and their courses. using model3
  // GET route for getting all of the posts
  app.get("/api/courses", function(req, res) {
    var query = {}; // need to review the dirrence between using a where statement vs no where statement
    if (req.query.author_id) { //use userid field may be limiting a user per post
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Course.findAll({
      where: query,
      include: [db.User]
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Course]
    }).then(function(data) {
      res.json(data);
    });
  });
*/


// this one returned single course object at the url. using model2
/*  
  app.get("/courses", function(req, res) {
    db.Course.findAll({})
    .then(function(data) {
      var courseObject = {
        Course: data
      };
      res.json(data); //will return json ojbect at / url
    });

  });
*/

/*
  app.get("/", function(req, res) {

    db.User.findOne(
      {
        username: req.body.username,
        password: req.body.password

    })
    .then(function(data) {
      var userObject = {
        User: data
      };
      res.render("index", userObject);
    });
  });
*/

/*
  app.get("/", function(req, res) {
    db.User.findAll({})
    .then(function(data) {
      var userObject = {
        User: data
      };
      res.render("index", userObject);
      //res.redirect("/"); // wont work haveing both
    });

    ///// comment out cant call two dbs at once
    db.Course.findAll({})
    .then(function(data) {
      var courseObject = {
        Course: data
      };
      res.render("index", courseObject);
    });
    

  });
*/

/*
  // then then didn't work
  app.get("/", function(req, res) {
    db.Course.findAll({})
    .then(function(data) {
      var courseObject = {
        Course: data
      };
      res.render("index", courseObject);
    });
    .then(function() {
      res.redirect("/");
    });

  });
*/

/*
  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
    .then(function(data) {
      res.redirect("/");
    });
  });


  app.put("/:id", function(req, res) {
    //var condition = "id = " + req.params.id;
    //console.log("condition", condition);
    db.Burger.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.params.id
        }
      })
    .then(function() {
      res.redirect("/");
    });
  });


  app.delete("/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect("/");
    });
  });
*/

};
