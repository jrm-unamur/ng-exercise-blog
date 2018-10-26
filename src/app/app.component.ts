import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-exercise-blog';
  postList = [
      {
        'title': 'My first post',
        'content': 'Content of first post',
        'loveIts': 0,
        'dontLoveIts': 0,
        'created_at': new Date()
      },
      {
        'title': 'My second post',
        'content': 'Content of second post',
        'loveIts': 1,
        'dontLoveIts': 2,
        'created_at': new Date()
      },
      {
        'title': 'My third post',
        'content': 'Content of third post',
        'loveIts': 2,
        'dontLoveIts': 1,
        'created_at': new Date()
      }
  ];
}
