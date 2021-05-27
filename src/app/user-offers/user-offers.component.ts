import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Offer} from '../shared/components/interfaces';
import {OfferService} from '../shared/service/offer.service';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.scss']
})
export class UserOffersComponent implements OnInit {
  form: FormGroup;

  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const offer: Offer = {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message,
      date: new Date()
    };
    this.offerService.crete(offer).subscribe(() => {
this.form.reset();
    });
    console.log(offer);
  }
}
