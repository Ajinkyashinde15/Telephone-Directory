import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http : HttpClient) { }

  getBankAccList()
  {
    return this.http.get(environment.baseUrl + 'phonebook');
  }

  postPhoneBookRecord(formData)
  {
    return this.http.post(environment.baseUrl+'phonebook',formData);
  }

  putPhoneBookRecord(formData)
  {
    return this.http.put(environment.baseUrl+'phonebook/'+formData.phoneBookId,formData);
  }

  deletePhoneBookRecord(phoneBookId)
  {
    return this.http.delete(environment.baseUrl+'phonebook/'+phoneBookId);
  }
}
