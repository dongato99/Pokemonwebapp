import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Itemid } from 'src/app/interface/itemid';
import { ItemService } from 'src/app/services/items/item.service'; 
/**
 * Componente de los items
 */
@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})
export class PokeItemComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name', 'description'];
  data: Itemid[] = [];
  dataSource = new MatTableDataSource<Itemid>(this.data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  table!: Itemid;

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
    this.listItems();
  }
/**
 * Lista de items
 */
  listItems=()=>{
    let item:Itemid;
    for(let i = 1; i <= 300; i++){
      this.itemService.getItems(i).subscribe(
        res => {
          item = res;
          this.data.push(item);
          this.dataSource = new MatTableDataSource<Itemid>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        err =>{
          console.log(err);
        }
      );
    }
  }
  /**
   * Filtro
   * @param event Filtro
   */
  filterResults=(event:Event)=>{
    const filtered = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtered.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /**
   * Detalles de los items
   */
  seeItemDetail(row: any){
    this.router.navigateByUrl(`itemDetail/${row.position}`);
  }
}
