"use strict";
const { Model } = require("sequelize");

const { v4 } = require("uuid");
const { removeVietnameseAccents } = require("../utils/fn");
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  company.init(
    {
      companyName: DataTypes.STRING,
      taxCode: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      managementUnit: DataTypes.STRING,
      companyType: DataTypes.STRING,
      status: DataTypes.STRING,
      name_normalized: DataTypes.STRING,
      address_normalized: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "company",
    }
  );
  company.beforeCreate(function (model) {

      model.id = v4();

    model.address_normalized = removeVietnameseAccents(
      model.address.toLowerCase()
    );
    model.name_normalized = removeVietnameseAccents(
      model.companyName.toLowerCase()
    );
  });
  return company;
};
