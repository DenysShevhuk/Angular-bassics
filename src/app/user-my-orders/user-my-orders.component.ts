import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../shared/components/interfaces';
import {Subscription} from 'rxjs';
import {PostsService} from '../shared/post.service';

@Component({
  selector: 'app-user-my-orders',
  templateUrl: './user-my-orders.component.html',
  styleUrls: ['./user-my-orders.component.scss']
})
export class UserMyOrdersComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  // tslint:disable-next-line:typedef
  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
    console.log(id);
  }


  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

}
