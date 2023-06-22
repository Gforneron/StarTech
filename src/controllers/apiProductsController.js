const db = require("../database/models");
module.exports = {
  list: async (req, res) => {
    const listProduct = await db.Producto.findAll(req.body, {
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
    const producto = await db.Producto.findByPk(req.params.id, {
      attributes: ["id","nombre","descuento","precio","clase_id"]
    });

    const listCategory = await db.Clase.findAll();

    let categoryProduct = [];
    let categoryType = listCategory.filter(
      (name) => name.id == producto.clase_id 
    );
    
    categoryProduct.push(categoryType[0].nombre);

    return res.status(200).json({
      product: producto,
      category: categoryProduct,
      imageProduct: `/api/productImagen/${producto.id}`
    });
  },

  verImagen: async(req, res) =>{
    const productID = req.params.id;
    const productDetail = await db.Producto.findByPk(productID,{attributes: ['id','imagen']});
    res.render('products/productImagen',{productDetail,error:'No se encontro imagen del producto'})
  }
};