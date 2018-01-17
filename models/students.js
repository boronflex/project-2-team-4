var Sequelize = require( "sequelize" );

module.exports = function( sequelize, DataTypes ) {

  var Student = sequelize.define( 'Student', {
    student_last_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 )

    },
    student_first_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 )

    },
    assigned_route: {
      allowNull: false,
      type: DataTypes.INTEGER( 11 )

    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING( 11 )

    },
    guardian_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 )

    },
    guardian_email: {
      allowNull: false,
      type: DataTypes.STRING( 50 )

    },

    address_lat: {
      allowNull: false,
      type: DataTypes.DOUBLE

    },

    address_long: {
      allowNull: false,
      type: DataTypes.DOUBLE

    },

    Busrider: {
      allowNull: false,
      type: DataTypes.BOOLEAN

    }
  }, {
    timestamps: false
  } );

  Student.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Student.belongsTo(models.Bus, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };

  return Student;
};