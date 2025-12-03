const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);

// Endpoint racine pour tester rapidement
app.get('/', (req, res) => {
  res.send('Mini API Catalogue en marche 🚀');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});


