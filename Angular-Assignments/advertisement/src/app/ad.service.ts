import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdService {
  url = "http://localhost:3000/advertisements"

  constructor(private http:HttpClient) { }
  getAds(){
    return this.http.get<any>(this.url);
  }
  saveAd(data:any){
    return this.http.post(this.url, data)
  }
  deleteAd(id:Number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentAd(id:Number){
    return this.http.get(`${this.url}/${id}`)
  }
  updateAd(id:Number, data:any){
    return this.http.put(`${this.url}/${id}`, data)
  }
}
