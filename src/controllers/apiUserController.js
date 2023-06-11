const db = require("../database/models");
const Op = db.Sequelize.Op;
module.exports = {
  list: async (req, res) => {
    try {
      const userList = await db.Usuario.findAll(req.body, {
        attributes: ["id", "name", "email"],
      });

      const userListWithDetail = userList.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        detail: `/api/usuarios/${user.id}`
      }));

      return res.status(200).json({
        users: userListWithDetail.length,
        lista: userListWithDetail,
        status: 200,
      });
    } catch (error) {
      return res.status(500).json({
        error: "Ocurrió un error al obtener la lista de usuarios",
      });
    }
  },
  search: async (req, res) => {
    const user = await db.Usuario.findByPk(req.params.id);
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.username,
        email: user.email,
      },
    });
  },
};
