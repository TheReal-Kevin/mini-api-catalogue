const express = require('express');
const router = express.Router();

// Données en mémoire (chargées au démarrage)
let categories = require('../data/categories.json');
let nextId = categories.length ? Math.max(...categories.map(c => c.id)) + 1 : 1;

// GET /categories - liste de toutes les catégories
router.get('/', (req, res) => {
  res.json(categories);
});

// GET /categories/:id - une catégorie par id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const category = categories.find(c => c.id === id);

  if (!category) {
    return res.status(404).json({ message: 'Catégorie non trouvée' });
  }

  res.json(category);
});

// POST /categories - création
router.post('/', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Le champ name est obligatoire' });
  }

  const newCategory = { id: nextId++, name };
  categories.push(newCategory);

  res.status(201).json(newCategory);
});

// PUT /categories/:id - mise à jour
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const category = categories.find(c => c.id === id);

  if (!category) {
    return res.status(404).json({ message: 'Catégorie non trouvée' });
  }

  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Le champ name est obligatoire' });
  }

  category.name = name;
  res.json(category);
});

// DELETE /categories/:id - suppression
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = categories.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Catégorie non trouvée' });
  }

  const deleted = categories.splice(index, 1)[0];
  res.json(deleted);
});

module.exports = router;


