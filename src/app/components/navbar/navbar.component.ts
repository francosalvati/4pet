import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {

  }

  // scrollToSection2(): void {
  //   const section2 = this.elementRef.nativeElement.querySelector('#emergency');
  //   console.log(section2)
  //   section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }
}
