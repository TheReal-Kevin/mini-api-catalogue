## Mini API Catalogue (Node.js + Express)

Cette mini API expose des catégories et des produits en JSON, avec des endpoints CRUD simples.

### Installation

1. Se placer dans le dossier du projet :

```bash
cd mini-api-catalogue
```

2. Installer les dépendances :

```bash
npm install
```

### Lancement

```bash
npm start
```

Par défaut, le serveur écoute sur le port **3000** (http://localhost:3000).

### Structure du projet

- **data/**
  - `categories.json` : liste des catégories
  - `products.json` : liste des produits
- **routes/**
  - `categories.js` : routes CRUD pour les catégories
  - `products.js` : routes CRUD pour les produits
- **server.js** : point d’entrée de l’API (configuration Express, montage des routes)
- **package.json** : dépendances et scripts (`npm start`, `npm run dev`)

### Endpoints principaux

- **Catégories**
  - `GET /categories` : liste toutes les catégories
  - `GET /categories/:id` : retourne une catégorie par id
  - `POST /categories` : crée une catégorie
  - `PUT /categories/:id` : met à jour une catégorie
  - `DELETE /categories/:id` : supprime une catégorie

- **Produits**
  - `GET /products` : liste tous les produits
  - `GET /products/:id` : retourne un produit par id
  - `POST /products` : crée un produit
  - `PUT /products/:id` : met à jour un produit
  - `DELETE /products/:id` : supprime un produit

### Exemples de requêtes (Postman)

- **Créer une catégorie**

  - Méthode : `POST`
  - URL : `http://localhost:3000/categories`
  - Body (JSON) :

  ```json
  {
    "name": "Jeux vidéo"
  }
  ```

- **Créer un produit**

  - Méthode : `POST`
  - URL : `http://localhost:3000/products`
  - Body (JSON) :

  ```json
  {
    "name": "Souris gaming",
    "price": 39.99,
    "categoryId": 1
  }
  ```

  - Réponse (exemple) :

  ```json
  {
    "id": 5,
    "name": "Souris gaming",
    "price": 39.99,
    "categoryId": 1
  }
  ```

### Collaboration GitHub (binôme)

- Créer une branche : `git checkout -b feature/<amelioration>`
- Faire une petite amélioration ciblée (ex. validation sur `price`, correction d’un code HTTP).
- Commit : `git add .` puis `git commit -m "Description de l'amélioration"`
- Push : `git push -u origin feature/<amelioration>`
- Créer une Pull Request sur GitHub (base : `main`, compare : `feature/...`).
- Le binôme fait la review, demande éventuellement des corrections, puis la PR est mergée.
- Inverser ensuite les rôles (le reviewer devient auteur).

