import { Injectable, OnInit } from '@angular/core';
export interface Product {
  name: string;
  position: String;
  price: number;
  addtocart: number ;
}
@Injectable({
  providedIn: 'root'
})
export class PproductService   {
  displayedColumns: string[] = ['position', 'name', 'price', 'addtocart'];
  public Source: Product[] = [] ;
  public PRO: Product[] = [];
  public  PPRODUCT_DATA ;
  public dataSource ;
  public ab: number;
public arr;
 public i = 0 ;
 public sum = 0 ;
 public count = 0;
 public ll: number ;
 public des ;
  public al = false ;
  public ak = false ;
  constructor(  ) {}
    PRODUCT_DATA: Product[] = [
        {position: '/assets/imagesp/batminton.jpg', name: 'set of 2 Bdminton Racquets',  price: 179, addtocart : 1 },
        {position: '/assets/imagesp/football.jpg', name: 'Football',    price: 126, addtocart : 1  },
        {position: '/assets/imagesp/tennikoitringdotted.jpg', name: 'Tennikoit dotted Ring', price: 380, addtocart : 1 },
        {position: '/assets/imagesp/yonexshuttlecock.jpg', name: 'Yonex Shuttel Cocks', price: 122, addtocart : 1 },
        {position: '/assets/imagesp/handgrippers.jpg', name: 'Hand Grippers', price: 310, addtocart : 1  },
        {position: '/assets/imagesp/pingpongbats.jpg', name: 'Ping Pong Bats', price: 190 , addtocart : 1  },
        {position: '/assets/imagesp/chess board.jpg', name: 'Chess Board', price: 167, addtocart : 1 },
        {position: '/assets/imagesp/jumprope.jpg', name: 'Jump Rope', price: 99, addtocart : 1 },
        {position: '/assets/imagesp/bat.jpg', name: 'Cricket Bat', price: 394, addtocart : 1  },
        {position: '/assets/imagesp/bascketball.jpg', name: 'Bascketball ', price: 297, addtocart : 1  },
      ];
      addCart(product: Product) {
        const ar = {position: product.position, name: product.name,  price: product.price, addtocart : product.addtocart};
        this.PRO.push(ar);
        this.Source = this.PRO;
        this.count = this.PRO.length ;
          console.log(this.PRO);
          console.log(this.sum);
          console.log(this.count);
        }
        display = function() {
          this.al = true;
      };
      description(p) {
        const ar = {position: p.position, name: p.name,  price: p.price, addtocart : p.addtocart};
        this.des.push(ar);
      }
   }


