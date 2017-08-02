import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.flogo').css("display","none");
    $('#headerlink').removeClass('left-nav').removeClass('mr-auto').addClass('ml-auto');
    $('#headerbutton').removeClass('right-nav').addClass('mr-auto').addClass('left-nav').css("display","none");
    
  }

}
