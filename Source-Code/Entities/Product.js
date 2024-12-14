class Product {
     constructor(name, description, price, category, createdAt) {
          //Asignacion de valores a las propiedades del producto desde los parametros del contructor
          this._id = null;
          this.name = name;
          this.description = description;
          this.price = price;
          this.category = category;
          //Se asigna la fecha actual si no se pasa un valor al contructor
          this.createdAt = createdAt || new Date();
          this.updatedAt = null;
     }
}

module.exports = Product;
