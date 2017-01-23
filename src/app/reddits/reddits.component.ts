import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-reddits',
  templateUrl: './reddits.component.html',
  styleUrls: ['./reddits.component.css']
})
export class RedditsComponent {
  posts: Post[] = [
    new Post("Cats", "Elmira", "Cats are the best who agrees with me?", "../assets/images/cat1.jpg", 1)
  ];

}
