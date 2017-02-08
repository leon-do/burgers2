var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Burger = sequelize.define("burgers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: Sequelize.STRING
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false
});

// Syncs with DB
Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;
