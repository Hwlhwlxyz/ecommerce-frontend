import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  url = environment.apiBaseURL;

  getAllProducts(){
    return this.http.get(this.url+'/product/all')
  }

  addNweProduct(product, kinds){
    return this.http.post(this.url+"/product/add", {
      product: product,
      kinds: kinds
    })
  }

  updateProductInfo(product, kinds){
    return this.http.post(this.url+"/product/edit",{
      product: product,
      kinds: kinds
    })
  }

  deleteProduct(){
    
  }


  getProductsByClassification(kind){
    return this.http.get(this.url+"/product/getbyclassification/"+kind)
  }

  getKinds(){
    return this.http.get(this.url+"/classification")
  }

  getClassificationByPid(pid){
    return this.http.get(this.url+"/product/getbypid/"+pid)
  }

  searchProduct(text){
    return this.http.get(this.url+"/product/"+text)
  }
}
