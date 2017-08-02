import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  public isSmallWidth : boolean = false;
  toggleCard(e,id){
    e.preventDefault();
    (<any>$("#pcard-edit-"+id)).collapse("toggle");
  }

  ngOnInit() {
    if(window.screen.width <= 768){
      this.isSmallWidth= true;     
    }
  }

}
