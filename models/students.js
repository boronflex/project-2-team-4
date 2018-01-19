var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    var Student = sequelize.define('Student', {
        student_last_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        student_first_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 11]
            }

        },
        gender: {
            allowNull: false,
            type: DataTypes.STRING(11),
            validate: {
                len: [1, 11]
            }

        },
        guardian_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        guardian_email: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },

        address: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

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
            // foreignKey: {
            //   allowNull: false
            // }
        });
    };

    return Student;
};