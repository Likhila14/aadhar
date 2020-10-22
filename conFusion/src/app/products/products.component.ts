import { Component, OnInit } from '@angular/core';
import { PproductService } from '../pproduct.service';
import { Product } from '../pproduct.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'price', 'addtocart'];
  public Source: Product[] = [] ;
  public PRO: Product[] = [];
  public  PPRODUCT_DATA ;
  public dataSource ;
  public ab: number;
 public addCart;
 public  display ;
 public arr;
 public i = 0 ;
 public sum = 0 ;
 public count ;
 public des;
 public description;
 public ll: number ;
  public al = false ;
  public ak = false ;
  constructor( private _pproduct: PproductService ) { }
ngOnInit() {
   this.PPRODUCT_DATA = this._pproduct.PRODUCT_DATA;
   this. dataSource = this.PPRODUCT_DATA;
   this. addCart = this._pproduct.addCart;
   this.  display  = this._pproduct. display ;
   this.PRO = this._pproduct.PRO;
   this.al = this._pproduct.al;
   this.Source = this.PRO ;
   this.description = this._pproduct.description;
   this.des = this._pproduct.des;
     }


  }
