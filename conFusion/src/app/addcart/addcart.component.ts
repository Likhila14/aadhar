import { Component, OnInit } from '@angular/core';
import { PproductService } from '../pproduct.service';
import { Product  } from '../pproduct.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  displayedColumns: string[] ;
  public PRO: Product[];
  public  PPRODUCT_DATA: Product[];
  public dataSource ;
  public ab: number;
 public addCart;
 public arr;
 public i = 0 ;
 public sum = 0 ;
 public count ;
 public Source;
 public ll: number ;
  public al = false ;
  public ak = false ;
  public data;
  constructor( private _pproduct: PproductService ) { }

  ngOnInit() {
    this.PPRODUCT_DATA = this._pproduct.PRODUCT_DATA;
    this.PRO = this._pproduct.PRO;
    this.count = this.PRO.length;
    this.al = this._pproduct.al;
    this.displayedColumns = this._pproduct.displayedColumns ;
    console.log(this.sum);
    console.log(this.PRO);
    this.data = Object.assign( this.PRO);
  this.Source = new MatTableDataSource<Element>(this.data);
    for (  this.i = 0 ; this.i < this.PRO.length ; this.i++  ) {
      this. sum = (  this.sum + this.PRO[this.i].price) ;
      }
  }
  remove(k) {
    console.log(k);
    this.i = this.PRO.findIndex(x => x.position === k.position);

    if (this.i !== -1) {
      this.PRO.splice(this.i, 1) ;
  }

  console.log(this.PRO);
  }
}
