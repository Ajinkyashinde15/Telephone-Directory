import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { PhoneService } from '../shared/phone.service';
import { PhonebookService } from '../shared/phonebook.service';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent implements OnInit {

  phoneDirectoryForms : FormArray =this.fb.array([]);
  phoneBookCat = [];

  constructor(private fb: FormBuilder, private phoneService : PhoneService, private phoneBookService : PhonebookService) { }

  ngOnInit() 
  {
    this.phoneService.getPhoneBookCatList().subscribe( res=> this.phoneBookCat= res as []);
    this.addPhoneDirectoryForm();
  }

  recordSubmit(fg:FormGroup)
  {
    this.phoneBookService.postPhoneBookRecord(fg.value).subscribe(
      (res : any) => {
        fg.patchValue({phoneBookId:res.phoneBookId});
      }
    );
  }

  addPhoneDirectoryForm(){
    this.phoneDirectoryForms.push(this.fb.group({
      phoneBookId : [0],
      firstName : ['',Validators.required ],
      lastName : ['',Validators.required ],
      address : ['',Validators.required ],
      phoneNo : ['',Validators.required ],
      email : ['',Validators.required ],
      pbcId : [0,Validators.min(1)]   
    }));
  }
}
