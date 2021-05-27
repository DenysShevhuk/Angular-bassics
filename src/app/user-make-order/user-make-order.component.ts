import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../shared/components/interfaces';
import {PostsService} from '../shared/post.service';

@Component({
  selector: 'app-user-make-order',
  templateUrl: './user-make-order.component.html',
  styleUrls: ['./user-make-order.component.scss']
})
export class UserMakeOrderComponent implements OnInit {
  isVisible = false;
  form: FormGroup;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sender: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern('[- +()0-9]+')]),
      weight: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
    });
  }

  // tslint:disable-next-line:typedef
  submit() {
    if (this.form.invalid) {
      return;
    }
    const post: Post = {
    sender: this.form.value.sender,
    address: this.form.value.address,
    contact: this.form.value.contact,
    phone: this.form.value.phone,
    weight: this.form.value.weight,
    data: this.form.value.data
    };
    this.postsService.create(post).subscribe(() => {
this.form.reset();
    });
  }
}
