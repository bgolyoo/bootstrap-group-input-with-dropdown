import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public IBDOptions: Array<{ id: number, value: string }> = [];
  public MSOptions: Array<{ id: number, value: string }> = [];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadOptions();
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      ibd: [''],
      ms: [null]
    });
    this.form.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((formValue: any) => {
        console.log('formvalue', formValue)
      });
  }

  private loadOptions(): void {
    this.IBDOptions = options.slice(0);
    this.MSOptions = options.slice(0);
  }

}

const options = [{
  id: 1,
  value: "Death and the Maiden"
}, {
  id: 2,
  value: "Fight Club"
}, {
  id: 3,
  value: "The Long Voyage Home"
}, {
  id: 4,
  value: "Edward Scissorhands"
}, {
  id: 5,
  value: "The Raven"
}, {
  id: 6,
  value: "Down and Out with the Dolls"
}, {
  id: 7,
  value: "Churchill: The Hollywood Years"
}, {
  id: 8,
  value: "Tell Them Willie Boy is Here"
}, {
  id: 9,
  value: "Rachel Getting Married"
}, {
  id: 10,
  value: "Endeavour"
}, {
  id: 11,
  value: "Night Will Fall"
}, {
  id: 12,
  value: "Mondo Hollywood"
}, {
  id: 13,
  value: "Lipton Cockton in the Shadows of Sodoma"
}, {
  id: 14,
  value: "The No. 1 Ladies' Detective Agency"
}, {
  id: 15,
  value: "A Haunted House"
}, {
  id: 16,
  value: "How Green Was My Valley"
}, {
  id: 17,
  value: "The Dirty Dozen"
}, {
  id: 18,
  value: "Revolutionary Road"
}, {
  id: 19,
  value: "Carmen"
}, {
  id: 20,
  value: "Episode 3: Enjoy Poverty"
}];
