# Handlebars

folders:
json output
    array of objects for each get request
modles
    tables created by sequelize
controller
    api routes for the output related to get request
        note objects passed to handlebars files which are then passed to main handlebars
views
    layouts
        main.handlebars is passed the other handlebars files in views
    courseList.handlebars
        html like file
    courseReviews.handlebars
        html like file
public
    css and images
