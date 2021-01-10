var orm = require("../config/orm.js");

// functions for interactions with the database
var burger = {
  // selectAll for getting all the burgers
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // insertOne for adding a new burger
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // updateOne for changing the burger status
  updateOne: function (id, cb) {
    var condition = `id=${id}`;
    orm.updateOne("burgers", {devoured: true}, condition, cb);
  },
};

// export var burger back to the controller
module.exports = burger;
