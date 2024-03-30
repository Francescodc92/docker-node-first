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

### test delle rotte 
- create: post `http://localhost:3000/products`
- Allproduct: get `http://localhost:3000/products`


## TECNOLOGIE
- nodeJs
- express
- nodemon
- dotenv
- docker
- mongoDB