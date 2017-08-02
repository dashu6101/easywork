import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public data;
  public rowsOnPage = 10;
  public sortBy = "name";
  public isLoading : boolean = false;    
  constructor(private http: Http) { }

  ngOnInit() {
    this.isLoading = true;
    this.http.get("assets/inbox.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    this.isLoading = false;
                }, 1000);
            });
  }

}
