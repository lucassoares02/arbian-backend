const connection = require("@server");
const logger = require("@logger");
const Select = require("@select");
const Insert = require("@insert");

const User = {
  async find(req, res) {
    logger.info("Select Users");

    const queryselectAcc = "select * from user";

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Select Users: ", error);
      } else {
        return res.json(results);
      }
    });
  },

  async findOne(req, res) {
    logger.info("Select User");

    const params = req.body;

    Select(params)
      .then((resp) => {
        return res.json(resp);
      })
      .catch((error) => {
        return res.json(error);
      });
  },

  async postUser(req, res) {
    logger.info("Insert User");

    const params = req.body;

    Insert(params)
      .then((resp) => {
        console.log(resp);
        return res.json(resp);
      })
      .catch((error) => {
        console.log(error);
        return res.json(error);
      });
  },

};

module.exports = User;
