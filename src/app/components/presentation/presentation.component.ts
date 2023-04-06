import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  scrollToSection2(): void {
    const section2 = this.elementRef.nativeElement.querySelector('#emergency');
    section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
