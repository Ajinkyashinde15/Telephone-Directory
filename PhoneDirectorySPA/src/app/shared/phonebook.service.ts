import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http : HttpClient) { }

  postPhoneBookRecord(formData)
  {
    return this.http.post(environment.baseUrl+'phonebook',formData);
  }
}
