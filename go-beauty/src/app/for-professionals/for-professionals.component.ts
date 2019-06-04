import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-for-professionals',
  templateUrl: './for-professionals.component.html',
  styleUrls: ['./for-professionals.component.css']
})
export class ForProfessionalsComponent implements OnInit {

  constructor() { }
  submitted = false;
  applyNow = new FormGroup({
    flastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10),
    Validators.pattern(/^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    specialty: new FormControl('', [Validators.required]),
    sourceinfo: new FormControl(''),
    answer: new FormControl('', [Validators.required]),
    diploma: new FormControl('', [Validators.required]),
    uploadfile: new FormControl('', [Validators.required]),
    agreement: new FormControl('', [Validators.required])
  });
   ngOnInit() {
}

  onSubmit() { this.submitted = true; }
}
