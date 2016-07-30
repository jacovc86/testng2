/* tslint:disable:no-unused-variable */
/// <reference path="../../typings/index.d.ts" />

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Test2', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app', inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
