const db = require("../database/models");
module.exports = {
  list: async (req, res) => {
    let listProduct = await db.Producto.findAll(req.body, {
      attributes: ["id","nombre","clase_id"]
    });
    listProductsDetails = listProduct.map((product) => ({
      id: product.id,
      name: product.nombre,
      description: "",
      category:product.clase_id,
      detail: `/api/productos/${product.id}`
    }));

    let listCategory = await db.Clase.findAll(req.body, {
      attributes: ["id","nombre"]
    });
    let listCategoryDetails = {};
    listCategory.map((category) => {
      let categoryId = category.id;
      let categoryName = category.nombre;
      let categoryAmount = listProduct.filter(
        (product) => product.clase_id == categoryId
      ).length;

      listCategoryDetails[categoryName] = categoryAmount;
    });
    
    return res.status(200).json({
      count: listProductsDetails.length,
      countByCategory: listCategoryDetails,
      products:listProductsDetails,
    });
  },

  search: async (req, res) => {
    const producto = await db.Producto.findByPk(req.params.id);
    return res.status(200).json({
      producto: producto,
    });
  }
};