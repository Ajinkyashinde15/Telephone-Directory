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
    this.phoneBookService.getBankAccList().subscribe(
      res =>{
        if(res==[])
        {
          this.addPhoneDirectoryForm();
        }else{
          (res as []).forEach((phoneDirectory:any) => {

            this.phoneDirectoryForms.push(this.fb.group({
              phoneBookId : [phoneDirectory.phoneBookId],
              firstName : [phoneDirectory.firstName,Validators.required ],
              lastName : [phoneDirectory.lastName,Validators.required ],
              address : [phoneDirectory.address,Validators.required ],
              phoneNo : [phoneDirectory.phoneNo,Validators.required ],
              email : [phoneDirectory.email,Validators.required ],
              pbcId : [phoneDirectory.pbcId,Validators.min(1)]   
            }));
                   
          });
        }
      }
    );
  }

  recordSubmit(fg:FormGroup)
  {
    if(fg.value.phoneBookId==0)
    {      
      this.phoneBookService.postPhoneBookRecord(fg.value).subscribe(
        (res : any) => {
          fg.patchValue({phoneBookId:res.phoneBookId});
        }
      );
    }else
    {
      this.phoneBookService.putPhoneBookRecord(fg.value).subscribe(
        (res : any) => {
        }
      );
    }
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
