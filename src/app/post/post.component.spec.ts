/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('Component: Post', () => {
  it('should create an instance', () => {
    let component = new PostComponent();
    expect(component).toBeTruthy();
  });
});
