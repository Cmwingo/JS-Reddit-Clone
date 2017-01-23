import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @Output() newPostSender = new EventEmitter();
  
  submitForm(title: string, author: string, content: string, image: string, id: number) {
    var newPostToAdd: Post = new Post(title, author, content, image, id);
  }
}
