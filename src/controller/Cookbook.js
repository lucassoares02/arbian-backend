const connection = require("@server");
const logger = require("@logger");

const Cookbook = {
  async find(req, res) {
    logger.info("Select Cookbook");

    const queryselectAcc = "select * from recipes limit 51";

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log(error);
      } else {
        results.forEach((element, index) => {
          results[index]["title"] = element["title"].replace("\n", "");

          results[index]["ingredients"] = element["ingredients"].split("\n");

          results[index]["preparation"] =
            element["preparationMode"].split("\n");

          results[index]["preparation"].shift();
          results[index]["ingredients"].shift();

          results[index]["emphasis"] = index % 2 == 0 ? false : true;
          results[index]["like"] = index % 2 == 0 ? true : false;
          results[index]["chefe"] = "Fernadez Gonçalvez";
        });

        return res.json(results);
      }
    });
  },
};

module.exports = Cookbook;
