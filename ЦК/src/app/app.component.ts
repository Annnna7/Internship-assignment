import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked 
{
  title = 'Отдохнём?';
  greeting = "";

  constructor(private router: Router) {}

  goToPage1()
  {
    this.router.navigate(['/page1', 987]);
  }

  goToPage2()
  {
    this.router.navigate(['/page2', 123]);
  }

  ngOnInit(): void 
  {
    console.log('Я родился!');
  }

  ngOnDestroy(): void 
  {
    console.log('ngOnDestroy');
  }

  ngOnChanges(): void 
  {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void 
  {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void 
  {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void 
  {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void 
  {
    console.log('ngAfterContentChecked');
  }
  
  onSayHi(): void 
  {
    alert("Привет, " + this.greeting);
  }

}