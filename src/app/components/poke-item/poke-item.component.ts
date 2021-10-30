import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Itemid } from 'src/app/interface/itemid';
import { ItemService } from 'src/app/services/items/item.service'; 

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.css']
})
export class PokeItemComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name', 'description'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  items = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  table!: Itemid;

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
    this.listItems();
  }

  listItems=()=>{
    let items
    for(let i = 1; i <= 151; i++){
      this.itemService.getItems(i).subscribe(
        res => {
          items = {
            position: res.id,
            image: res.sprites.default,
            name: res.names[5].name,
            description:res.effect_entries[0].effect
          };
          this.data.push(items);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      );
    }
  }
  filterResults=(event:Event)=>{
    const filtered = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtered.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: any){
    this.router.navigateByUrl(`itemDetail/${row.position}`);
  }

}
