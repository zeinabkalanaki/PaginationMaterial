import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { bookDTO } from './bookDTO';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiURL = environment.apiUrl + '/book';

  constructor(private _http: HttpClient) {}

  getAll(
    page: number,
    recordsPerPage: number,
    sortActive: string,
    sortDirection: string
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    params = params.append('sortColumnName', sortActive);
    params = params.append('sortDirection', sortDirection);

    return this._http.get<bookDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }
}
