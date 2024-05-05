const { Router } = require("express");
const dataProducts = require("../../utils/products");
const router = Router();

/* GET */
router.get("/", (req, res) => {
  res.send("Hola!");
});
router.get("/api/products", (req, res) => {
  res.json(dataProducts);
});

/* POST */
router.post("/api/products/add", (req, res) => {
  const { img_url, price, brand, available, pack } = req.body;
  if (img_url && price && brand && available && pack) {
    const id = `${dataProducts.length + 1}`;
    const newProduct = { id, ...req.body };
    dataProducts.push(newProduct);
    res.send('Agregado');
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});
module.exports = router;
