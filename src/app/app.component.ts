import {Component} from '@angular/core';


export interface Post {
  title: string;
  text: string;
  id?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date: Date = new Date();
  posts: Post[] = [
    {title: 'Хочу выучить Ангуляр', text: 'Я учу компоненты', id: 1},
    {title: 'Cлед блок', text: 'Будет про директиву', id: 2},
  ];


  // tslint:disable-next-line:typedef
  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  // tslint:disable-next-line:typedef
  removePost(id: number) {
    console.log('id', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}

