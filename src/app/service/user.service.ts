import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage, IUser } from '../model/generic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private oHttp: HttpClient
  ) { }

  getUserPlist(page: number, size: number, termino: string, id_user: number,
    strSortField: string, strOrderDirection: string): Observable<IPage<IUser>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_user != 0) {
      params = params.set("user", id_user);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUser>>("http://localhost:8082/user", { params: params });
  }


}
