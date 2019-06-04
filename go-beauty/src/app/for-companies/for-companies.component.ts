import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-for-companies',
  templateUrl: './for-companies.component.html',
  styleUrls: ['./for-companies.component.css']

})
export class ForCompaniesComponent implements OnInit {
   model: any = {};
  demoVisits = new FormGroup({
    flastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10),
    Validators.pattern(/^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    community: new FormControl('', [Validators.required]),
    employees: new FormControl('', [Validators.required]),
    comment: new FormControl(''),
    agreement: new FormControl('', [Validators.required])
  });
  constructor() { }
  submitted = false;
  ngOnInit() {}
  onSubmit() { this.submitted = true; }
}
