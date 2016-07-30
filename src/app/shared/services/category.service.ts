import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CategoryDTO } from '../dtos/categoryDTO';

@Injectable()
export class CategoryService {
     constructor(private _http : Http) {}

    getCategories() : Observable<CategoryDTO[]> {
        return this._http.get('/rest/products/categories/root')
            .map(res => res.json())
            .catch(err => Observable.throw(err));
    }
}