import {Component, OnInit} from '@angular/core';
import {Post, UserRegister} from '../shared/components/interfaces';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PostsService} from '../shared/post.service';
import {AuthService} from '../shared/service/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  regs: UserRegister[] = [];
  constructor(
    private route: Router,
    private postsService: PostsService,
    private auth: AuthService,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.postsService.getUserBb().subscribe(regs => {
      console.log('Res', regs);
      this.regs = regs;
    });
  }

  // tslint:disable-next-line:typedef
  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.route.navigate(['/']);
  }

}
