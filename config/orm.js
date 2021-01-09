var connection = require("./connection.js");

// function to convert object key/value pairs to SQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

// function for building queries
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

// define orm that will be exported to the burgers.js model
var orm = {
	// selectAll function for grabbing everything from the table
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			// send the query result back to the callback function
			cb(result);
		});
	},
	// inserting a burger into table
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		// console.log(queryString);
		// console.log(vals);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	// update one function for changing a burger status
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		// console.log(queryString);

		connection.query(queryString, function(err, result) {
			console.log("results orm****:", result);
			if (err) throw err;
			cb(result);
		});
	}
};

// export the orm back to the model burger.js
module.exports = orm;