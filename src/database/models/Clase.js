module.exports = function (sequelize, DataTypes) {
  let alias = "Clase";

  let col = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  };

  let config = {
    tablename: "clases",
    timestamps: false,
  };

  let Clase = sequelize.define(alias, col, config);

  Clase.associate = function (models) {
    Clase.hasMany(models.Producto, {
      foreignKey: "clase_id",
      as: "productos",
    });
  };

  return Clase;
};
