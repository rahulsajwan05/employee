import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { empList } from '../interfaces/emplist';


@Injectable({
  providedIn: 'root'
})
export class EmplistService {
 

  constructor(private _http: HttpClient) { }
  
  getAllProducts() {
    return this._http.get<empList[]>("http://localhost:3000/products")
  }

  deleteProduct(id: number) {
    return this._http.delete(`http://localhost:3000/products/${id}`);
  }

  addproduct(data: empList) {
    console.log(data)
    return this._http.post("http://localhost:3000/products", data)
  }

  searchEmp(query: string) {
    return this._http.get<empList[]>(`http://localhost:3000/products?q=${query}`);
  }

  getProduct(id: string) {
    return this._http.get<empList>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(data: empList) {
    console.log(data)
    return this._http.put<empList>(`http://localhost:3000/products/${data.id}`, data)
  }

  
}
