var Sequelize = require( "sequelize" );

module.exports = function( sequelize, DataTypes ) {

  var Bus = sequelize.define( 'Bus', {
    bus_number: {
      allowNull: false,
      type: DataTypes.INTEGER,

    },
    bus_driver: {
      allowNull: false,
      type: DataTypes.STRING,

    },
    riders: {
      allowNull: false,
      type: DataTypes.STRING,

    },
    capacity: {
      allowNull: false,
      type: DataTypes.INTEGER,

    },
    home_base: {
      allowNull: false,
      type: DataTypes.STRING,

    }
  }, {
    timestamps: false
  } );
  return Bus;
};