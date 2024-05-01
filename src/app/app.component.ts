import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'electron-app';

  constructor(public gtag: Gtag){};

  ngOnInit(): void {
    this.gtag.pageview({ 
      page_title: 'Lesson Feed',
      page_path: '/lessons',
      page_location: 'https://angularfirebase.com/lessons'
    });  
  }  
}
