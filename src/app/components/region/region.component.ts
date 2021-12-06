import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from 'src/app/services/region/region.service';
/**
 * Componente de Region
 */
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
/**
 * Obtener las regiones
 */
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
    /**
     * Obtener fila
     * @param index Numero de region
     */
    getRow(index:number){
      
      this.router.navigateByUrl(`regions/locations/${index}`);
    }

}
