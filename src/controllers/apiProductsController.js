const { where } = require("sequelize");
const db = require("../database/models");
module.exports = {
  list: async (req, res) => {
    let listProduct = await db.Producto.findAll();
    //delete list.imagen;
    let listCategory = await db.Clase.findAll();
    let searchCategory = await db.Producto.findAll({where: {clase_id: 1}});

    listCategory.nameCategory = searchCategory;

    return res.status(200).json({
      count: listProduct.length,
      countByCategory: listCategory,

      category: cantCategory.length,

      
    });
  },

  search: async (req, res) => {
    const producto = await db.Producto.findByPk(req.params.id);
    return res.status(200).json({
      producto: producto,
    });
  }
};