/* tslint:disable:no-unused-variable */

import { addProviders, describe, beforeEach, it, expect, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CategoryService } from '../../shared/services';
describe('App: Test2', () => {
  beforeEach(() => {
    addProviders([HeaderComponent]);
  });

  it('should create the app', inject([HeaderComponent], (comp: HeaderComponent) => {
    expect(comp).toBeTruthy();
  }));
});
