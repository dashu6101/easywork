import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  public data;
  public rowsOnPage = 10;
  public sortBy = "name";
  public isLoading : boolean = false;    
  constructor(private http: Http) { }

  ngOnInit() {
    this.isLoading = true;
    this.http.get("assets/assignments.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    this.isLoading = false;
                }, 1000);
            });
  }
  
}
