import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from './CommonService';
import { HttpWrapperDto } from './Models/HttpWrapperDto';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  SubUrlStats: string;

  constructor(
    private httpClient: HttpClient,
    private userStatsService: CommonService
  ) {
    this.SubUrlStats = 'api/analytics/';
  }

  getHttpMethod<T>(getObj: HttpWrapperDto): Observable<T> {
    return this.httpClient.get<T>(getObj.urlWithParams);
  }

  postHttpMethod<T>(postObj: HttpWrapperDto): Observable<T> {
    return this.httpClient.post<T>( (postObj.url === '' ? postObj.urlWithParams : postObj.url), postObj.body);
  }

  putHttpMethod<T>(putObj: HttpWrapperDto): Observable<T> {
    return this.httpClient.put<T>( (putObj.url === '' ? putObj.urlWithParams : putObj.url), putObj.body);
  }

  deleteHttpMethod<T>(deleteObj: HttpWrapperDto): Observable<T> {
    return this.httpClient.delete<T>((deleteObj.url === '' ? deleteObj.urlWithParams : deleteObj.url));
  }

}
