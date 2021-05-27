import {Component, OnInit} from '@angular/core';
import {Post} from '../shared/components/interfaces';
import {Subscription} from 'rxjs';
import {PostsService} from '../shared/post.service';
import {AuthService} from '../shared/service/auth.service';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  posts: Post[] = [];
  pSub: Subscription;

  constructor(
    private route: Router,
    private postsService: PostsService,
    private auth: AuthService,
    private viewportScroller: ViewportScroller,
  ) {
  }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
  // tslint:disable-next-line:typedef
  toTop() {
    this.viewportScroller.scrollToPosition([0, 330]);
  }
}
