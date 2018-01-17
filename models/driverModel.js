var Sequelize = require( "sequelize" );

module.exports = function( sequelize, DataTypes ) {

  var Driver = sequelize.define( 'Driver', {
    student_last_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    },
    student_first_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    },
    assigned_route: {
      allowNull: false,
      type: DataTypes.INTEGER( 11 ),

    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING( 11 ),

    },
    guardian_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    },
    guardian_email: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    },

    address_num: {
      allowNull: false,
      type: DataTypes.INTEGER( 11 ),

    },
    address_stname: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    },
    City: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),

    },
    State: {
      allowNull: false,
      type: DataTypes.STRING( 20 ),

    },
    Zipcode: {
      allowNull: false,
      type: DataTypes.INTEGER( 9 ),

    },
    Busrider: {
      allowNull: false,
      type: DataTypes.BOOLEAN,

    },
  }, {
    timestamps: false
  } );
  return Driver;
};