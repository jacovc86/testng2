import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { CategoryDTO } from '../../shared/dtos';

@Component({
  moduleId: module.id,
  selector: 'header',
  template: `
              <logo></logo>
              <ul class="categories-bar">
                <li *ngFor="let category of categories">{{category.name}}</li>
              </ul>
            `,
  styles: [`
            logo {
              display: flex;
              width: 142px;
              height: 26px;
              background: url('/assets/images/logo.png') center no-repeat;
              background-size: cover;
            }
            ul.categories-bar {
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding: 0;
              margin: 15px 0;
            }
            ul.categories-bar li {
              display: inline-block;
              list-style: none;
              padding: 10px;
              font-size: 18px;
            }
          `],
  providers: [CategoryService]
})
export class HeaderComponent implements OnInit {

  categories : CategoryDTO[];

  constructor(private _categoryService : CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}
