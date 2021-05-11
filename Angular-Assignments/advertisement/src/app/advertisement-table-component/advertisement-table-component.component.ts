import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service'
@Component({
  selector: 'ad-table',
  templateUrl: './advertisement-table-component.component.html',
  styleUrls: ['./advertisement-table-component.component.css']
})
export class AdvertisementTableComponentComponent implements OnInit {
  adArray:any
  search: any
  constructor(private ad: AdService) { }

  collection = <any>{};
  ngOnInit(): void {
   this.ad.getAds().subscribe((result)=>{
      this.collection = result;
    })
  }
  deleteAd(item:any){
    this.collection.splice(item-1,1 )
    this.ad.deleteAd(item).subscribe((result)=>{
      console.warn("result",result)
    })
  }
  
}
