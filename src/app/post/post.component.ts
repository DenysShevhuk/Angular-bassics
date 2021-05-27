import {Component, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Post} from '../app.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']

})
export class PostComponent implements OnDestroy {

  @Input() post: Post;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();

  // tslint:disable-next-line:typedef
  removePost() {
    this.onRemove.emit(this.post.id);
  }

  ngOnDestroy(): void {
    console.log('11');
  }
}
