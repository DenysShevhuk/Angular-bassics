import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/components/interfaces';
import {AuthService} from '../shared/service/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: string;
  email: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Потрібно увійти';
      }
    });
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  // tslint:disable-next-line:typedef
  submit() {
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/user', 'office']);
    });
  }
}
