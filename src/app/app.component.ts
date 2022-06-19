import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  companyForm = new FormGroup<{}>({
    corporateName: new FormControl(),
  });

  companyFormInit = {
    companyForm: this.companyForm,
    initValue: null,
  };

  ngOnInit(): void {
    this.companyForm.patchValue(this.companyFormInit.initValue);
  }

  onSubmit() {
    console.log(this.companyForm);
    console.log(JSON.stringify(this.companyForm.getRawValue()));
  }
}
