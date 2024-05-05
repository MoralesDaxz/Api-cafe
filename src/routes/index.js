const { Router } = require("express");
const router = Router();

router.get("/products", (req, res) => {
  res.json({
    products: [
      {
        _id: "sierra250",
        img_url: "",
        price: 9,
        brand: "Sierra",
        available: true,
      },
      {
        _id: "loma250",
        img_url: "",
        price: 9,
        brand: "Loma",
        available: true,
      },
      {
        _id: "tardes250",
        img_url: "",
        price: 9,
        brand: "Tardes",
        available: true,
      },
      {
        _id: "volcan250",
        img_url: "",
        price: 9,
        brand: "Volcan",
        available: true,
      },
      {
        _id: "intenso250",
        img_url: "",
        price: 9,
        brand: "Intenso",
        available: true,
      },
      {
        _id: "classic250",
        img_url: "",
        price: 9,
        brand: "Classic",
        available: true,
      },
      {
        _id: "choco250",
        img_url: "",
        price: 9,
        brand: "Choco",
        available: true,
      },
      {
        _id: "mezcla250",
        img_url: "",
        price: 9,
        brand: "Mezcla",
        available: true,
      },
    ],
  });
});
module.exports = router;
