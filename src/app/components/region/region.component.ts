import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from 'src/app/services/region/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  data: any = '';

  constructor(private locationservice:RegionService, private router:Router) { }

  ngOnInit(): void {
    this.getRegions()
  }

  getRegions(){
    this.locationservice.getRegions().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      err =>{
        console.log(err);
      }
    );
    }
    getRow(index:number){
      
      this.router.navigateByUrl(`regions/locations/${index}`);
    }

}
