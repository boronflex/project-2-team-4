var Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
    var Bus = sequelize.define('Bus', {
        bus_number: {
            allowNull: false,
            type: DataTypes.INTEGER(11)

        },
        bus_driver: {
            allowNull: false,
            type: DataTypes.STRING(50),
            // validation that checks that this remains between 1 and 50 characters
            validate: {
                len: [1, 50]
            }

        },
        riders: {
            allowNull: false,
            type: DataTypes.INTEGER(11)

        },
        capacity: {
            allowNull: false,
            type: DataTypes.INTEGER(2)

        },
        home_base: {
            allowNull: false,
            type: DataTypes.STRING(50),
            //same validation as above
            validate: {
                len: [1, 50]
            }

        }
    }, {
        timestamps: false
    })
    return Bus
}