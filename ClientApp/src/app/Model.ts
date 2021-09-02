export class Model {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product(1, "samsung", "200", true),
      new Product(2, "samsung1", "200", false),
      new Product(3, "samsung2", "200", true),
      new Product(4, "samsung3", "200", true),
      new Product(5, "samsung4", "200", true)
    ];
  }
}

export class Product {
  id: number;
  name: string;
  price: string;
  IsActive: boolean;

  constructor(id: number, name: string, price: string, IsActive: boolean) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.IsActive = IsActive;
  }
}
