import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public fileName : string;
  constructor() { }
  changeFile(fileInput: any){
    this.fileName = fileInput.target.files[0].name;
  }
  ngOnInit() {
    $('.flogo').css("display","none");
    $('#headerlink').removeClass('left-nav').removeClass('mr-auto').addClass('ml-auto');
    $('#headerbutton').removeClass('right-nav').addClass('mr-auto').addClass('left-nav').css("display","none");
    (<any>$('.carousel')).carousel({
      interval: false
    });
  }

}
