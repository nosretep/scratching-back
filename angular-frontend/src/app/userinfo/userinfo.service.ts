import { Injectable } from '@angular/core';
import { Userinfo } from './userinfo';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserinfoService {

  constructor(private httpClient: HttpClient) { }

  private userinfo = this.httpClient.get<Userinfo>("/auth/userinfo").pipe(
    shareReplay(1)
  )

  getUserinfo(): Observable<Userinfo> {
    return this.userinfo
  }

}
