const db = require("../database/models");
const Op = db.Sequelize.Op;
module.exports = {
  list: async (req, res) => {
    let list = await db.Usuario.findAll();
    return res.status(200).json({
      users: list.length,
      lista: list,
      status: 200,
    });
  },
  search: async (req, res) => {
    const user = await db.Usuario.findByPk(req.params.id);
    return res.status(200).json({
      user: user,
    });
  },
  create: async (req, res) => {
    const newUser = await db.Usuario.create(req.body);
    return res.status(200).json({
      user: newUser,
      status: 200,
      creado: "ok",
    });
  },
  delete: async (req, res) => {
    await db.Usuario.destroy({ where: { id: req.params.id } });
    return res.status(200).json({
        eliminado: true
    })
  }
};
