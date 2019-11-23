import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getAllProducts(){
    return [{pname:"product1", price:12.3, inventory_amount:1, pid:1},
    {pname:"product1", price:12.3},
    {pname:"product1", price:1},
    {pname:"product1", price:1.3},
    {pname:"product1", price:2.3},
    {pname:"product1", price:12.3},
    {pname:"product2", price:12.3},
  ]
  }

  addNweProduct(){

  }

  updateProductInfo(){

  }

  deleteProduct(){
    
  }

  getClassifications(){

  }

  getProductsByClassification(){

  }

  getKinds(){
    return ['k1','k2']
  }
}
