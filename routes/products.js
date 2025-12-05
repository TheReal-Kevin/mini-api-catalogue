const express = require('express');
const router = express.Router();

// Données en mémoire (chargées au démarrage)
let products = require('../data/products.json');
let nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;

// GET /products - liste de tous les produits
router.get('/', (req, res) => {
  res.json(products);
});

// GET /products/:id - un produit par id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }

  res.json(product);
});

// POST /products - création
router.post('/', (req, res) => {
  const { name, price, categoryId } = req.body;

  if (!name || price == null || !categoryId) {
    return res.status(400).json({ message: 'name, price et categoryId sont obligatoires' });
  }

  if (Number(price) <= 0) {
    return res.status(400).json({ message: 'Le prix doit être supérieur à 0' });
  }

  const newProduct = {
    id: nextId++,
    name,
    price: Number(price),
    categoryId: Number(categoryId)
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id - mise à jour
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }

  const { name, price, categoryId } = req.body;
  if (!name || price == null || !categoryId) {
    return res.status(400).json({ message: 'name, price et categoryId sont obligatoires' });
  }

  if (Number(price) <= 0) {
    return res.status(400).json({ message: 'Le prix doit être supérieur à 0' });
  }

  product.name = name;
  product.price = Number(price);
  product.categoryId = Number(categoryId);

  res.json(product);
});

// DELETE /products/:id - suppression
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }

  const deleted = products.splice(index, 1)[0];
  res.json(deleted);
});

module.exports = router;


