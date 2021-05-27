import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/service/auth.service';
import {Router} from '@angular/router';
import {FbCreateResponse, Post, User, UserRegister} from '../shared/components/interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {PostsService} from '../shared/post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  // tslint:disable-next-line:typedef
  submit() {
    if (this.form.invalid) {
      return;
    }
    const reg: UserRegister = {
      email: this.form.value.email,
      password: this.form.value.password,
      name: this.form.value.name
    };
    this.postsService.addUserBb(reg).subscribe(() => {
      this.form.reset();
    });
    this.auth.regist(reg).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/login']);
    });
  }
}
