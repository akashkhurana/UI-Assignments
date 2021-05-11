import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestaurantService} from '../restaurant.service';


@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  public resList: any;
  editRestaurant = new FormGroup({
    name: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto:RestaurantService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentRestaurant(this.router.snapshot.params.id).
    subscribe((result)=>{
      this.resList = result;
      this.editRestaurant = new FormGroup({
        name: new FormControl(this.resList['name'])
      })  
    }
    )
  }
  collection(){
    console.warn(this.editRestaurant.value);
    this.resto.updateRestaurant(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result)=>
    console.warn(result)
    )
  }
}
