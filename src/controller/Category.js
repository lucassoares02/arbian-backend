const connection = require("@server");
const logger = require("@logger");

const Category = {
  async find(req, res) {
    logger.info("Select Category");

    const queryselectAcc = "select * from category";

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Select Users: ", error);
      } else {
        return res.json(results);
      }
    });
  },
};

module.exports = Category;
