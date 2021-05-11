import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant.service'
import {FormGroup, FormControl} from '@angular/forms' 
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  alert:boolean=false
  addRestaurant = new FormGroup({
    name:new FormControl('')
  })
  constructor(private resto:RestaurantService) { }
  collection=<any>{};
  ngOnInit(): void {
  this.resto.getList().subscribe((result)=>{
  console.warn(result);
  this.collection = result;   
   }); 
  }
  collectRestaurant(){
    //console.warn(this.addRestaurant.value)
    this.resto.saveRestaurant(this.addRestaurant.value).subscribe((result)=>{
      this.alert= true
      this.addRestaurant.reset({})
    })
  }
  closeAlert(){
    this.alert =false
  }
  deleteRestaurant(item:any){
    this.collection.splice(item-1,1)
    this.resto.deleteRestaurant(item).subscribe((result)=>{
      console.warn("result", result)
    })
  }
}
