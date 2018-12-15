import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('popUpText') popUpText:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  showInfoText(): void{
    var text = this.popUpText.nativeElement as HTMLSpanElement;
    text.classList.toggle("show");
  }

}
