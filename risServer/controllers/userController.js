
const assert = require("assert");
const conString = require("../db/index").conString;
const {Client} = require("pg");
const {Query} = require("pg");

exports.user_detail = function (req, res) {
    const params = [];
    params.push(req.params.id);
    let results = [];
    const client = new Client(conString);
    const query = new Query("Select * from student where id=$1", params);
    client.connect((err) => {
        if (err) {
            console.error(conString);
            console.error("Connection error", err.stack);
        } else {
            console.log("Connected");
            const result = client.query( query);
            assert(query === result );
            query.on('row', (row) => {
                results.push(row);
            });
            query.on('end', () => {
                console.log("Query done");
                return res.json(results);
            });
        }
    });
};