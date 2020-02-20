import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent implements OnInit {

  phoneDirectoryForms : FormArray =this.fb.array([]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addPhoneDirectoryForm();
  }

  addPhoneDirectoryForm(){
    this.phoneDirectoryForms.push(this.fb.group({
      phoneBookId : [0],
      firstName : [''],
      lastName : [''],
      address : [''],
      phoneNo : [''],
      email : [''],
      pbcId : [0]   
    }));
  }
}
