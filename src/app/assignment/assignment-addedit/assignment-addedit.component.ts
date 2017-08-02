import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-addedit',
  templateUrl: './assignment-addedit.component.html',
  styleUrls: ['./assignment-addedit.component.css']
})
export class AssignmentAddeditComponent implements OnInit {
  public fileName : string;
  constructor() { }
  changeFile(fileInput: any){
    this.fileName = fileInput.target.files[0].name;
  }
  ngOnInit() {
  }

}
