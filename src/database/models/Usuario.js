module.exports = function (sequelize, DataTypes) {
  let alias = "Usuario";

  let col = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    perfil: {
      type: DataTypes.TEXT,
    },
    confirmed: {
      type: DataTypes.STRING,
    }
  };

  let config = {
    tablename: "usuarios",
    timestamps: false,
  };

  let Usuario = sequelize.define(alias, col, config);

  return Usuario;
};
