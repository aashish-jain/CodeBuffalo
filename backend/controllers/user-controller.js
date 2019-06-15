const connection = require("../config.js");

module.exports = {
  all: function(req, res) {
    console.log("Get all called");
    connection.query("SELECT * FROM users", (err, rows) => {
      if (!err) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(
          JSON.stringify({
            result: "success",
            data: rows
          })
        );
      } else {
        res.status(400).send(err);
      }
    });
  },

  create: function(req, res, next) {
    let response;
    console.log("Body " + req.body);
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    if (
      typeof id !== "undefined" &&
      typeof name !== "undefined" &&
      typeof email !== "undefined"
    ) {
      connection.query(
        "INSERT INTO users (id, name, email) VALUES (?, ?)",
        [id, name, email],
        function(err, result) {
          handleSuccessOrErrorMessage(err, result, res);
        }
      );
    } else {
    //   console.log(req.body);
      response = {
        result: "error",
        msg: "Please fill required details"
      };
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(response));
    }
  },

  get: function(req, res) {
    connection.query(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [req.params.id],
      (err, rows) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(
          JSON.stringify({
            result: "success",
            data: rows[0]
          })
        );
      }
    );
  },

  update: function(req, res) {},

  destroy: function(req, res) {}
};

function handleSuccessOrErrorMessage(err, result, res) {
  if (!err) {
    if (result.affectedRows != 0) {
      response = { result: "success" };
    } else {
      response = { msg: "No Result Found" };
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(response));
  } else {
    res.status(400).send(err);
  }
}
