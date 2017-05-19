

// Requiring our Todo model
var db = require("../models");

module.exports = function(app) {

  // table of courses with authors
  app.get("/api/courseUser", function(req, res) {

    // In this case, just db.Post
    db.Course.findAll({
      include: [db.User]
    }).then(function(data) {
      var courseUser = {
        Course: data
      };
      res.render("courseList", courseUser); 

      //res.json(data);
    });
  });

  // course with reviews and review authors
  app.get("/api/courseReviews", function(req, res) {

    // WHERE clause needed to show only reivews related to the current course looked at
    db.Course.findAll({ //may need to review to findOne
      where: {id: 1},
      include: [
        {
          model: db.Review,
          include: [db.User]
        }
      ]

    }).then(function(data) {

      var courseObject = {
        //Course: data[0].Reviews
        Course: data
      };
      res.render("courseReviews", courseObject); //will return json ojbect at / url

      //res.json(data);
      //res.json(data[0].Reviews); // all reviews of course

    });
  });

};
