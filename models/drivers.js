var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    var Driver = sequelize.define('Driver', {
        driver_first_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },

        driver_last_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }
        },

        driver_img: {
            type: DataTypes.BLOB

        },

        driver_comments: {
            type: DataTypes.TEXT

        }

    }, {
        timestamps: false
    });

    Driver.associate = function(models) {


        Driver.belongsTo(models.Bus, {
            // foreignKey: {
            //   allowNull: false
            // }
        });
    };


    return Driver;
};