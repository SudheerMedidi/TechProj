import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpWrapperDto } from './Models/HttpWrapperDto';
import { UserStatsDto } from './Models/UserStatsDto';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private httpWrapperDto: HttpWrapperDto;
  private userStats: UserStatsDto;
  constructor() { }

  assignToHttpWrapper(method: string, body: any, url: string, responseType?: string, urlWithParams?: string): HttpWrapperDto {
    this.httpWrapperDto = {
      body, method,
      responseType, url,
      urlWithParams,
      controller: '',
      description: '',
      isValidObject: (body != null && (method !== null || method === '') && (url !== null || url === ''))
    };
    return this.httpWrapperDto;
  }

  assignToUserStats(url: string, controller: string, action: string, details: string): UserStatsDto {
    this.userStats = {
      ContactId: localStorage.getItem('contactid') !== undefined &&
        localStorage.getItem('contactid') !== null ? localStorage.getItem('contactid') : '',
      SessionId: localStorage.getItem('sessionid') !== undefined &&
        localStorage.getItem('sessionid') !== null ? localStorage.getItem('sessionid') : '',
      Url: url,
      Browser: this.getBrowserName(),
      Ip: '',
      Area: '',
      Id: 0,
      Controller: controller,
      Action: action,
      CreatedDate: moment().format('LLLL'),
      CreatedId: 0,
      LasteditedDate: '',
      LasteditedId: 0,
      Details: details
    };
    return this.userStats;
  }
  public getBrowserName(): string {
    const agent = window.navigator.userAgent.toLowerCase();
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!( window as any).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!( window as any).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }
}
