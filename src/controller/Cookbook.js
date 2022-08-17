const connection = require("@server");
const logger = require("@logger");
const Insert = require("@insert");

const Cookbook = {
  async find(req, res) {
    logger.info("Select All Cookbook limit 51");

    const queryselectAcc = "select recipes.*, likes.id as idLike, likes.value as likes from recipes left join likes on likes.recipe = recipes.idRecipe group by recipes.idRecipe order by idRecipe desc limit 80";

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

    const queryselectAcc = `select recipes.*, likes.id as idLike, likes.value from recipes left join likes on likes.recipe = recipes.idRecipe where category = ${id}`;

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Select Users: ", error);
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

  async findRecipeHighLights(req, res) {
    logger.info("Select Recipe HighLights");

    const { id } = req.params;

    const queryselectAcc = `select recipes.*, likes.id as idLike, likes.value as likes from recipes join highlights on highlights.recipe = recipes.idRecipe left join likes on likes.recipe = recipes.idRecipe`;

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Select Users: ", error);
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


  async search(req, res) {
    logger.info("Select Search Recipe");

    const { title } = req.params;

    let queryselectAcc;

    queryselectAcc = `select recipes.*, likes.id as idLike, likes.value as likes from recipes left join likes on likes.recipe = recipes.idRecipe where title like '%${title}%' limit 10`;

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Select Users: ", error);
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



  async searchRecipeId(req, res) {
    logger.info("Select Search Recipe Id");

    const { id } = req.params;

    const queryselectAcc = `select recipes.*, likes.id as idLike, likes.value as likes from recipes left join likes on likes.recipe = recipes.idRecipe where idRecipe = '${id}'`;

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Search Recipe Id: ", error);
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


  async postLike(req, res) {
    logger.info("Insert Likes");

    const params = req.body;

    Insert(params)
      .then((resp) => {
        return res.json(resp);
      })
      .catch((error) => {
        return res.json(error);
      });
  },


  async deleteLike(req, res) {
    logger.info("Delete Like Recipe");

    const { user, recipe } = req.params;

    queryselectAcc = `DELETE FROM likes WHERE recipe = ${recipe} and user = ${user}`;

    connection.query(queryselectAcc, (error, results, fields) => {
      if (error) {
        console.log("Error Delete Like Recipe: ", error);
      } else {
        return res.json(results);
      }
    });
  },



};

module.exports = Cookbook;
