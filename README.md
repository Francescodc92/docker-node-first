## Primo progetto autonomo usando node/docker 

### passi per avviare il progetto 
1. creare l'immagine docker
```bash
docker-compose build
```
2. avviare il container
```bash
docker-compose up -d
```

## test delle rotte 

### Products
- create: post `http://localhost:3000/products`
- AllProducts: get `http://localhost:3000/products`
- SingleProduct: get `http://localhost:3000/products/ id prodotto`
- AllProduct-categories: get `http://localhost:3000/products/categories/ id categoria`
- updateProduct: put `http://localhost:3000/products/ id prodotto`
- deleteProduct: delete `http://localhost:3000/products/ id prodotto`

### Categories
- create: post `http://localhost:3000/categories`
- AllCategories: get `http://localhost:3000/categories`
- updateCategory: put `http://localhost:3000/categories/ id categoria`
- deleteCategory: delete `http://localhost:3000/categories/ id categoria`

## TECNOLOGIE
- nodeJs
- express
- nodemon
- dotenv
- docker
- mongoDB
