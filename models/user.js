module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    password: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    first_name: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    date: {
      type: DataTypes.DATE
    }
  },

  //trying to create a relationship between courses and authors
  {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // user one --> course many
          // each user can create many courses. Each course can have only one author
          User.hasMany(models.Course, {
            onDelete: "cascade"
          });

          // user one --> reviews many
          // each user has many reviews. Each review can have only one author
         User.hasMany(models.Review, {
            onDelete: "cascade"
          }); 
         
        }
      }
    }

  );
  return User;
};
