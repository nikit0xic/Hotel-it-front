import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.css']
})
export class ReferenceCardComponent implements OnInit {

  constructor() { }

  @Input()
  title = ''

  @Input()
  content = ''
  ngOnInit(): void {
  }

}
