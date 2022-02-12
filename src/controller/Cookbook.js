const connection = require("@server");
const logger = require("@logger");

const Cookbook = {
  async find(req, res) {
    logger.info("Select All Cookbook limit 51");

    const queryselectAcc = "select * from recipes order by idRecipe desc limit 80";

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


  async findRecipeCategory(req, res) {
    logger.info("Select Recipe Category");

    const { id } = req.params;

    const queryselectAcc = `select * from recipes where category = ${id}`;

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Select Users: ", error);
      } else {
        return res.json(results);
      }
    });
  },

};

module.exports = Cookbook;
