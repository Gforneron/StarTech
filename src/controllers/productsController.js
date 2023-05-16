// Llamada de modulos
const db = require("../database/models");

const productController = {};

//Detalles de productos
productController.detalles = async (req, res) => {
  const productId = req.params.id;

  // Para la recomendacion de productos segun la clase
  const producto = await db.Producto.findOne({
    where: { id: productId },
    include: [{ model: db.Clase, as: "clase" }],
  });
  const similar = await db.Producto.findAll({
    where: {
      clase_id: producto.clase_id,
      id: { [db.Sequelize.Op.ne]: producto.id },
    },
    limit: 4,
    include: [{ model: db.Clase, as: "clase" }],
  });

  if (!producto) {
    return res.status(404).render("main/no-encontrado");
  }

  res.render("products/detalle-producto", {
    product: producto,
    productoOriginal: producto,
    productosSimilar: similar,
  });
};

productController.carrito = async (req, res) => {
    // Obtener los productos desde la base de datos
    const productos = await db.Producto.findAll();

    // Renderizar la plantilla "main/productCart" con los productos obtenidos
    return res.render("main/productCart", { productos });
};


// Borrado de productos
productController.delete = async (req, res) => {
  try {
    const productDeleteId = req.params.id;

    // Buscar el producto a eliminar en la base de datos utilizando el modelo
    const productoEliminar = await db.Producto.findByPk(productDeleteId);

    if (!productoEliminar) {
      // El producto no existe en la base de datos
      return res.status(404).send("El producto no existe");
    }

    // Eliminar el producto de la base de datos
    await productoEliminar.destroy();

    // Redirigir a la página de listado de productos
    return res.redirect("/productos/listado");
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    // Manejar el error adecuadamente
    return res.status(500).send("Error al eliminar el producto");
  }
};


// retorno editado de productos
productController.edit = async (req, res) => {
  try {
    const productId = req.params.id;

    // Buscar el producto en la base de datos utilizando el modelo
    const product = await db.Producto.findByPk(productId);

    if (!product) {
      return res.status(404).render("main/no-encontrado");
    }

    return res.render("products/form-edit", { product });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    // Manejar el error adecuadamente
    return res.status(500).send("Error al obtener el producto");
  }
};


// retorno de creacion de productos
productController.create = async (req, res) => {
  try {
    return res.render("products/form-charge");
  } catch (error) {
    console.error("Error al renderizar el formulario de carga:", error);
    // Manejar el error adecuadamente
    return res.status(500).send("Error al renderizar el formulario de carga");
  }
};


// Listado de productos
productController.listado = async (req, res) => {
  const productos = await db.Producto.findAll();
  return res.render("products/listado-producto", { productos });
};
// Agregado de producto nuevo a database
productController.newProduct = async (req, res) => {
  // Asignamos los datos correspondientes

  const newProductData = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    descuento: req.body.descuento,
    imagen: req.file.filename,
    clase_id: req.body.clase,
  };
  // Crear el nuevo producto en la base de datos
  await db.Producto.create(newProductData);

  return res.redirect("/productos/listado");
};

// funcion de editado de productos
productController.editar = async (req, res) => {
  try {
    const productId = req.params.id;

    // Buscar el producto en la base de datos utilizando el modelo
    const product = await db.Producto.findByPk(productId);

    if (!product) {
      return res.status(404).render("main/no-encontrado");
    }

    // Actualizar los datos del producto con los datos del formulario
    product.nombre = req.body.nombre;
    product.precio = req.body.precio;
    product.descuento = req.body.descuento;
    product.imagen = req.file.filename;
    product.clase_id = req.body.clase;

    // Guardar los cambios en la base de datos
    await product.save();

    // Redireccionar a la página de detalles del producto actualizado
    return res.redirect("/productos/listado");
  } catch (error) {
    console.error("Error al editar el producto:", error);
    // Manejar el error adecuadamente
    return res.status(500).send("Error al editar el producto");
  }
};

module.exports = productController;
