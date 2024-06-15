import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts = [
    {
      userName: 'Sofia Davis',
      userHandle: '115 seguidores',
      userImage: 'assets/img/sofia.jpg', 
      time: '4 días',
      title: 'Introducing our new product line!',
      content: 'We are excited to share our latest innovations with you. Check out the details and let us know what you think!',
      postImage: 'assets/img/feed1.jpg',
      likes: 5,
      comments: 15
    },

    {
      userName: 'Oscar Lopez',
      userHandle: '205 seguidores',
      userImage: 'assets/img/oscar.jpg', 
      time: '1 semana',
      title: 'Excited to share my latest project!',
      content: "'Ive been working hard on this and cant wait for you all to see it. Let me know what you think'",
      postImage: 'assets/img/feedOscar.jpg',
      likes: 5,
      comments: 15
    },

    {
      userName: 'Banco de crédito BCP',
      userHandle: '13.0613 seguidores',
      userImage: 'assets/img/bcp.jpg', 
      time: '1 semana',
      content: "'Ive been working hard on this and cant wait for you all to see it. Let me know what you think'",
      postVideo: 'assets/video/bcp.mp4',
      likes: 5,
      comments: 15
    }
    // ... más posts aquí
  ];
}
