//Lista de productos para prueba, simulacion de una base de Mongo
const products = [
     {
         "id": 0,
         "name": "Camisa",
         "description": "Blusa roja de cuello alto",
         "price": 70000,
         "category": "Ropa",
         "createdAt": "2024-10-25"
     },
     {
         "id": 1,
         "name": "Zapato",
         "description": "Zapato azul de tacon",
         "price": 90000,
         "category": "Ropa",
         "createdAt": "2024-10-25"
     },
     {
         "id": 2,
         "name": "Delineador",
         "description": "Deliniador de alta durabilidad",
         "price": 15000,
         "category": "Cosmetica",
         "createdAt": "2024-10-25"
     }
];


class ProductRepository {

     constructor() {
          //Se encuentra el valor maximo dentro de los ID y se almacena en variable
          this.currentMaxId = Math.max(...products.map(p => p.id), 0);
     }
 
     async list() {
          return products;
     }
 
     async save(product) {
          const existingIndex = products.findIndex(p => p.id === product.id);

          try {
               if (existingIndex !== -1) {
               // Si el producto ya existe, lo reemplazamos
                    products[existingIndex] = product;
                    return products[existingIndex];
               } else {
               // Si es un producto nuevo se añade el producto
                    product.id = this.generateUniqueId();
                    products.push(product);
                    return product;
               }
          } catch (error) {
               throw new Error("Error al guardar el producto: " + error.message);
          }
          

     }
 
     async findById(id) {
          id = parseInt(id,10)
          return products.find(p => p.id === id);
     }
 
     async delete(id) {
          id = parseInt(id,10)
          const index = products.findIndex(p => p.id === id);
          if (index !== -1) {
               products.splice(index, 1);
          }
     }
 
     generateUniqueId() {
          return ++this.currentMaxId;
     }
  
}
 
module.exports = ProductRepository;