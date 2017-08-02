import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  public data;
  public rowsOnPage = 10;
  public sortBy = "name";
  public isLoading : boolean = false;    
  constructor(private http: Http) { }

  ngOnInit() {
    this.isLoading = true;
    this.http.get("assets/payments.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                    this.isLoading = false;
                }, 1000);
            });
  }

}
