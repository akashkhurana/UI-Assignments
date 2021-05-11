import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import  { AdService } from '../ad.service'

@Component({
  selector: 'ad-form',
  templateUrl: './advertisement-form-component.component.html',
  styleUrls: ['./advertisement-form-component.component.css']
})
export class AdvertisementFormComponentComponent implements OnInit {
  alert: boolean = false
  addAdv = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl('')
  })
  constructor(private ad:AdService) { }

  ngOnInit(): void {
  }
  collectAdv(){
    this.ad.saveAd(this.addAdv.value).subscribe((result)=>{
      this.alert=true
      this.addAdv.reset({})
    })
  }
  closeAlert(){
    this.alert =false
  }
}
