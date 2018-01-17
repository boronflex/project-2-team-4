var Sequelize = require( "sequelize" );

module.exports = function( sequelize, DataTypes ) {

  var Driver = sequelize.define( 'Driver', {
    driver_first_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 )

    },

    driver_last_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 )
    },

    driver_img: {
      type: DataTypes.BLOB

    },

    driver_comments: {
      type: DataTypes.TEXT

    }

  }, {
    timestamps: false
  } );

  Driver.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Driver.belongsTo(models.Bus, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };

  return Driver;
};