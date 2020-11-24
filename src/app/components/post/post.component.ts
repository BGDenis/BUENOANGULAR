import { Component, OnInit } from '@angular/core';
import { MypostService } from "../../servicios/mypost.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  title = 'Post Component';
  listaPost: any = [];
  constructor(private mypost: MypostService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.mypost.getAllPost().subscribe(data => { this.listaPost = data});
  }

  getPost() {
    this.mypost.getPost('2').subscribe(data => {console.log(data)});
  }
  /*
    createPost(){
      const post={
        userId:'1',
        title:'modificado',
        complete:true
      };
      this.mypost.createPost(post).subscribe((newpos)=>{console.log(newpos)});
    }*/
}
