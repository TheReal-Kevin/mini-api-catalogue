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

Des détails supplémentaires pourront être ajoutés plus tard (exemples de payloads, réponses, etc.).


