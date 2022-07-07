import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input() parentForm: {
    companyForm: FormGroup;
    initValue: { contact };
  };

  contactFormDefault = {
    email: [null, Validators.required],
    number: null,
  };

  contactForm = this.formBuilder.group(this.contactFormDefault);

  contacts = new FormArray([]);

  ngOnInit() {
    const { companyForm, initValue } = this.parentForm;

    if (initValue) this.editMode(initValue);

    companyForm.setControl('contacts', this.contactForm);

    this.sub(companyForm);
  }

  editMode({ contact }) {
    contact.forEach(({ email }) => {
      this.contacts.push(
        this.formBuilder.group({ email: [email, Validators.required] })
      );
    });
  }

  addContact() {
    this.contacts.push(this.contactForm);
    this.contactForm = this.formBuilder.group(this.contactFormDefault);
  }

  sub(companyForm: FormGroup) {
    companyForm.get('address').valueChanges.subscribe((value) => {
      // this.contactForm.patchValue({ email: value });
      console.log(value);
    });
  }
}
