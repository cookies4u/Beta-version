module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    review_title: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        len: [1, 80]
      }
    },
  },

  //trying to create a relationship between courses and authors
  {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          
          // user one --> reviews many
          // each user has many reviews. Each review can have only one author
          Review.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
          
          // course one --> review many
          // each course has many reviews. Each review can have only one course 
          Review.belongsTo(models.Course, {
            foreignKey: {
              allowNull: false
            }
          });

        }
      }
    }

  );
  return Review;
};
