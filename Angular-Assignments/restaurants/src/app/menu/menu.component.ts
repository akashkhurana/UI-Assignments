import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import {RestaurantService} from '../restaurant.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private resto: RestaurantService) { }
  ngOnInit(): void {
    this.resto.getMenu().subscribe((result)=>{
      console.warn(result);
    })
    }
    
}
