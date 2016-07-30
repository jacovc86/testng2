import { Component } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
              <header></header>
            `,
  styles: [`
            body {
              direction: rtl;
            }
            header {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              padding: 15px;
              color: #606060;
            }
          `  
  ],
  directives: [HeaderComponent]
})
export class AppComponent{

  constructor() {  }
}
