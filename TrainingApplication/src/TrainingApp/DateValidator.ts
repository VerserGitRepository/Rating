import { Component }  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.html'
})
export class ReactiveFormComponent {

  form: FormGroup

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ]
    }, {validator: this.dateLessThan('dateFrom', 'dateTo')});
  }

  dateLessThan(from: string, to: string) {
   return (group: FormGroup): {[key: string]: any} => {
    let f = group.controls[from];
    let t = group.controls[to];
    if (f.value > t.value) {
      return {
        dates: "Date from should be less than Date to"
      };
    }
    return {};
   }
 }

}