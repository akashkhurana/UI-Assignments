import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  url = "http://localhost:3000/restaurants" 
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveRestaurant(data:any){
    return this.http.post(this.url, data)
  }
  deleteRestaurant(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentRestaurant(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  updateRestaurant(id:any, data:any){ 
    return this.http.put(`${this.url}/${id}`, data)
  }
  getMenu(){
    return this.http.get(this.url);
  }
}
