var Sequelize = require( "sequelize" );

module.exports = function( sequelize, DataTypes ) {

  var Bus = sequelize.define( 'Bus', {

    bus_number: {
      allowNull: false,
      type: DataTypes.INTEGER( 11 ),

    },

    capacity: {
      allowNull: false,
      type: DataTypes.INTEGER( 2 ),

    },

    home_base: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    }

  }, {
    timestamps: false
  } );

  Bus.associate = function(models) {
    Bus.hasMany(models.Student, {
    });
  };

  Bus.associate = function(models) {
    Bus.hasMany(models.Driver, {
    });
  };
  
  return Bus;
};