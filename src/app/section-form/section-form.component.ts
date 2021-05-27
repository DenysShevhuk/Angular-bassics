import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.scss']
})
export class SectionFormComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';
  id = 3;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: this.id++
      };
      this.onAdd.emit(post);
      console.log('New Post', post);
      this.title = this.text = '';
    }
  }
}
