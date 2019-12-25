import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../auth/core/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>('http://192.168.43.167:8050/eDigitaloffice/deviceLog/all');
  }
}
