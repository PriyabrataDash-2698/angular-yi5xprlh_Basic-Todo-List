import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title = 'TO-DO List';
  listofTodo = [];
  wishlistadd(list: string) {
    this.listofTodo.push({ id: list.length, todoname: list });
    console.log(this.listofTodo);
  }
  removefromtheList(index: number) {
    this.listofTodo = this.listofTodo.filter(
      (myupdatelist) => myupdatelist.id !== index
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
