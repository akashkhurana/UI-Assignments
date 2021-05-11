import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import  { AdService } from '../ad.service';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public resList: any;
  editAd = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private ad:AdService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.ad.getCurrentAd(this.router.snapshot.params.id).
    subscribe((result)=>{
      this.resList = result; 
      this.editAd = new FormGroup({
        title: new FormControl(this.resList['title']),
        name: new FormControl(this.resList['name']),
        category: new FormControl(this.resList['category']),
        description: new FormControl(this.resList['description'])
      })
    })
  }
  collection(){
    console.warn(this.editAd.value);
    this.ad.updateAd(this.router.snapshot.params.id, this.editAd.value).subscribe((result)=>
    console.warn(result)
    )
    
  }
}
