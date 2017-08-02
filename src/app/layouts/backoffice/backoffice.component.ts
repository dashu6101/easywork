import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  public isSmallWidth : boolean = false;
  NavToggle(){
    $("#wrapper").toggleClass("active");
    $(".main-content").toggleClass("active");
  }
  NavSmallToggle(isSmall){
    if(isSmall){
          $("#wrapper").toggleClass("active");
          $(".main-content").toggleClass("active");
    }
  }
  ngOnInit(){
    if(window.screen.width >= 992){
      this.isSmallWidth= true;     
    }
  }

}
