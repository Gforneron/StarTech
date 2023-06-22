module.exports = function (sequelize, DataTypes) {
  let alias = "Producto";

  let col = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descuento: {
      type: DataTypes.DECIMAL,
    },
    precio: {
      type: DataTypes.DECIMAL,
    },
    imagen: {
      type: DataTypes.TEXT,
    },
    clase_id: {
      type: DataTypes.INTEGER,
    },
  };

  let config = {
    tablename: "productos",
    timestamps: false,
  };

  let Producto = sequelize.define(alias, col, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Clase, {
      foreignKey: "clase_id",
      as: "clase",
    });
  };

  return Producto;
};
