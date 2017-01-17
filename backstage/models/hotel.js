"use strict";

module.exports = function(sequelize, DataTypes) {
    var Hotel = sequelize.define('hotel_info', {
        'name': {
            'type': DataTypes.STRING,
            'allowNull': false
        },
        'address': {
            'type': DataTypes.STRING,
            'allowNull': false
        },
        'phone': {
            'type': DataTypes.INTEGER,
            'allowNull': false
        }
    });

    return Hotel;
}