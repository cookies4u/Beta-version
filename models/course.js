module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    course_title: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 80]
      }
    },
    course_cat: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    course_desc: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    course_url: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 40]
      }
    },
    progress_length: {
      type: DataTypes.INTEGER,
      //allowNull: true,
    },
  },

  //trying to create a relationship between courses and authors
  {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          
          // user one --> course many
          // each user can create many courses. Each course can have only one author
          Course.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
          
          // course one --> review many
          // each course has many reviews. Each review can have only one course
          Course.hasMany(models.Review, {
            onDelete: "cascade"
          }); 

        }
      }
    }

  );
  return Course;
};
