const productController = {};
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/productos.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

productController.detalles = (req, res) => {
  const productId = req.params.id;
  // Para la recomendacion de productos segun la clase 
  let producto = productos.find(product => product.id === parseInt(productId));
  let similar = productos.filter(product => product.clase === producto.clase && product.id !== producto.id);
  
  const product = productos.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return res.status(404).render("main/no-encontrado");
  }
  
  res.render("products/detalle-producto", { product ,productoOriginal: producto, productosSimilar: similar});
};

productController.carrito = (req, res) => {
  return res.render("main/productCart", {productos});
};

productController.delete = (req,res) => {
  return res.render('products/form-delete')
}
productController.eliminar = (req,res) => {

}
productController.edit = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return res.status(404).render("main/no-encontrado");
  }
  return res.render("products/form-edit", { product });
};

productController.create = (req, res) => {
  return res.render("products/form-charge");
};

productController.listado = (req, res) => {
  return res.render("products/listado-producto", { productos });
};

productController.newProduct = (req, res) => {
  // sacamos los datos del formulario con req.body
  let newProductData = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    descuento: req.body.descuento,
    imagen: req.file.filename,
    clase: req.body.clase,
  };
  let newId = productos.length + 1;
  // usamos el spreed operator y lo juntamos en un objeto
  let newProduct = { id: newId, ...newProductData };
  // agregamos el nuevo producto a la lista
  productos.push(newProduct);
  // guardamos los cambios en el archivo json
  fs.writeFileSync(
    productsFilePath,
    JSON.stringify(productos, null, 2),
    "utf-8"
  );
  console.log(productos); // <-- Agregado para depurar
  // por ultimo redireccionamos al listado para la vista
  return res.redirect("/productos/listado");
};

productController.editar = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return res.status(404).render("main/no-encontrado");
  }

  // Actualizar los datos del producto con los datos del formulario
  product.nombre = req.body.nombre;
  product.precio = req.body.precio;
  product.descuento = req.body.descuento;
  product.imagen = req.file.filename,
  product.clase = req.body.clase;

  // Guardar los cambios en el archivo JSON
  fs.writeFileSync(
    productsFilePath,
    JSON.stringify(productos, null, 2),
    "utf-8"
  );

  // Redireccionar a la página de detalles del producto actualizado
  return res.redirect("/productos/listado");
};
module.exports = productController;
