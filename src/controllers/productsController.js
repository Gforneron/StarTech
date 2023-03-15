const productController = {};
let productos = [];

productos.push(
  {
    id: 1,
    nombre: "Celular Motorola",
    precio: "129.999",
    descuento: "13",
    imagen: "Celular-Motorola.jpg",
    clase: "cafetera",
  },
  {
    id: 2,
    nombre: "Celular Samgung",
    precio: " 49.999",
    descuento: "10",
    imagen: "Celular-Samsung.jpg",
    clase: "computadora",
  },
  {
    id: 3,
    nombre: "Notebook Asus",
    precio: "180.777",
    descuento: "13",
    imagen: "Notebook-Asus.jpg",
    clase: "telefono",
  },
  {
    id: 4,
    nombre: "Notebook Noblex",
    precio: "148.000",
    descuento: "30",
    imagen: "Notebook-Noblex.jpg ",
    clase: "televisor",
  },
  {
    id: 5,
    nombre: "Placa de Video",
    precio: "120.000",
    descuento: "39",
    imagen: "Placa-Video.jpg",
  },
  {
    id: 6,
    nombre: "Smart TV LED",
    precio: "270.000",
    descuento: "27",
    imagen: "Smart-TV-LED.jpg",
  },
  {
    id: 7,
    nombre: "smart TV Samsung",
    precio: "99.999",
    descuento: "15",
    imagen: "Smart-TV.jpg",
  },
  {
    id: 8,
    nombre: "Tablet Lenovo",
    precio: "78.976",
    descuento: "15",
    imagen: "Tablet-Lenovo.jpg",
  }
);

productController.detalles = (req, res) => {
  return res.render("detalle-producto", { productos });
};
productController.carrito = (req, res) => {
  return res.render("productCart");
};
productController.form = (req, res) => {
  return res.render("form-edit");
};
productController.charge = (req, res) => {
  return res.render("form-charge");
};
productController.listado = (req, res) => {
  return res.render("listado-producto", { productos });
};

module.exports = productController;

