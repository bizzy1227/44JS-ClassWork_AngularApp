import { Observable, of } from 'rxjs';
import { ProductRepositoryService, Product } from './../product-repository.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { MatDialog } from '@angular/material';




@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Output() public deleteProduct: EventEmitter<number> = new EventEmitter<number>();

  public productList: Observable<Product[]> = of([]);

  @Input() public rows: number;

  constructor(
    private productRepository: ProductRepositoryService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  // public getList(): any {
  //   return this.productList.filter((item, i) => {
  //     if (this.rows > i) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }

  public deleteRow(id: number) {
    this.deleteProduct.emit(id);
    this.productRepository.deleteProduct(id).subscribe(() => this.getProducts());
  }

  public edit(id: number): void {
    const dialogRef =  this.dialog.open(EditProductDialogComponent, {
      data: id,
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((condition: boolean) => {
      if (condition) {
        this.getProducts();
      }
    });
  }

  private getProducts(): void {
    this.productList = this.productRepository.getProducts();
  }
  
}
