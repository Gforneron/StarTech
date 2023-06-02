const db = require("../database/models");
module.exports = {
  list: async (req, res) => {
    let list = await db.Producto.findAll();
    return res.status(200).json({
      total: list.length,
      lista: list,
      status: 200,
    });
  },
  search: async (req, res) => {
    const producto = await db.Producto.findByPk(req.params.id);
    return res.status(200).json({
      producto: producto,
    });
  },
  create: async (req, res) => {
    const newProduct = await db.Producto.create(req.body);
    return res.status(200).json({
      producto: newProduct,
      status: 200,
      creado: "ok",
    });
  },
  delete: async (req, res) => {
    await db.Producto.destroy({ where: { id: req.params.id } });
    return res.status(200).json({
      eliminado: true,
    });
  },
};
