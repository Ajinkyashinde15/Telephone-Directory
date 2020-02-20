import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  Url : string = environment.baseUrl + 'pbcategory';
  constructor(private http : HttpClient) { }

  getPhoneBookCatList()
  {
    return this.http.get(this.Url);
  }
}
