import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  constructor() {}

  @Input() parentForm: {
    companyForm: FormGroup;
    initValue: { address };
  };

  addressForm = new FormGroup({
    address: new FormControl(null, Validators.required),
    number: new FormControl(null, Validators.required),
    uf: new FormControl(null, Validators.required),
  });

  ngOnInit() {
    const { companyForm, initValue } = this.parentForm;

    if (initValue) this.editMode(initValue);

    companyForm.setControl('address', this.addressForm);
  }

  editMode({ address }) {
    this.addressForm.patchValue(address);
  }
}
