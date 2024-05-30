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
      console.log("Something went wrong in the repository layer.");
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
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const cityObj = await City.find({
        where: {
          id: cityId,
        },
      });
      return cityObj;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }

  async updateCity({ cityId, newName }) {
    try {
      const city = this.getCity(cityId);
      if (city) {
        city.name = newName;
        await city.save();
      }
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer.");
      throw { error };
    }
  }
}

module.exports = CityRepository;
