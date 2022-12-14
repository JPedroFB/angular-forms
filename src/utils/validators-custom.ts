import { FormControl } from '@angular/forms';

export default class ValidatorsCustom {
  public static setOnlyNumber = (form: FormControl) => {
    const numberRegex = new RegExp(/[^0-9]/gm);
    let value: string = form.value;
    if (value && numberRegex.test(value)) {
      form.setValue(value.replace(numberRegex, ''));
    }
  };
}
