//Here interaction with models take place
const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const newCity = await City.create({
        name: name,
      });
      return newCity;
    } catch (err) {
      throw { err };
      // console.log("Error occurred in creating city : " + err);
    }
  }

  async deleteCity(cityId) {
    try {
      const deletedCity = await City.destroy({
        where: {
          id: cityId,
        },
      });
      console.log(deletedCity);
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
