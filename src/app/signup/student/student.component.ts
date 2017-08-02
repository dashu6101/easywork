import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.flogo').css("display","none");
    $('#headerlink').removeClass('left-nav').removeClass('mr-auto').addClass('ml-auto');
    $('#headerbutton').removeClass('right-nav').addClass('mr-auto').addClass('left-nav').css("display","none");
    
    (<any>$('.carousel')).carousel({
      interval: false
    })
  }

}
