var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

  var Student = sequelize.define('Student', {
    student_last_name: {
      allowNull: false,
      type: DataTypes.STRING(50)

    },
    student_first_name: {
      allowNull: false,
      type: DataTypes.STRING(50)

    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING(11)

    },
    guardian_name: {
      allowNull: false,
      type: DataTypes.STRING(50)

    },
    guardian_email: {
      allowNull: false,
      type: DataTypes.STRING(50)

    },

    address: {
      allowNull: false,
      type: DataTypes.STRING(50)

    },

    busrider: {
      allowNull: false,
      type: DataTypes.BOOLEAN

    }
  }, {
    timestamps: false
  });

  Student.associate = function(models) {

    Student.belongsTo(models.Bus, {
      //this might be necessary - try without first
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };

  return Student;
};